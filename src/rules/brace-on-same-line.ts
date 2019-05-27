import { Rule, AST, SourceCode } from 'eslint';
import { BlockStatement, ClassBody, Node } from 'estree'; // eslint-disable-line import/no-unresolved
import { merge, noop, repeat, Dictionary } from 'lodash'; // eslint-disable-line object-curly-newline
import { create as createBase, meta as baseMeta } from 'eslint-plugin-brace-rules/lib/rules/brace-on-same-line';

import {
  BlockTypes,
  MessageIds,
  PropertyValues,
  Styles,
} from '../enums';

const {
  CLASS_DECLARATION,
  CLASS_EXPRESSION,
  FUNCTION_EXPRESSION,
  METHOD_DEFINITION,
} = BlockTypes;

const {
  BODY,
  CLOSE,
  CLOSE_SINGLE,
  NO_SINGLE,
  OPEN,
  OPEN_ALLMAN,
} = MessageIds;

const { ALWAYS, IGNORE, NEVER } = PropertyValues;
const { ALLMAN, OTBS } = Styles;

interface BlockParent extends BlockStatement {
  parent: Node;
}

type Fixer = (fixer: Rule.RuleFixer) => Rule.Fix;
type StylesDictionary = Dictionary<StringDictionary>;
type StringDictionary = Dictionary<string>;
type Body = BlockStatement | ClassBody;
type CheckNode = (node: Node) => void;

const blocks: BlockTypes[] = [
  CLASS_DECLARATION,
  CLASS_EXPRESSION,
  FUNCTION_EXPRESSION,
  METHOD_DEFINITION,
];

const initStyles = function initStyles(value: PropertyValues): StringDictionary {
  return blocks.reduce((acc: StringDictionary, type): StringDictionary => {
    acc[type] = value;
    return acc;
  }, {});
};

const styles: StylesDictionary = {
  [OTBS]: initStyles(ALWAYS),
  [ALLMAN]: initStyles(NEVER),
};

const create = function create(context: Rule.RuleContext): Rule.RuleListener {
  const sourceCode: SourceCode = context.getSourceCode();
  const styleValue: string | StringDictionary = context.options[0] || OTBS;
  const style: StringDictionary = typeof styleValue === 'string' ? styles[styleValue] : styleValue;

  const options = { ...style, ...context.options[1] };

  blocks.forEach((type: string): void => {
    if (!(type in options)) return;
    if (options[type] === IGNORE) {
      delete options[type];
    } else {
      options[type] = options[type] === ALWAYS;
    }
  });

  const insertBreakBefore = function insertBreakBefore(token: AST.Token, whitespace = ''): Fixer {
    return (fixer: Rule.RuleFixer): Rule.Fix => fixer.insertTextBefore(token, `\n${whitespace}`);
  };

  const removeBreakBetween = function removeBreakBetween(startToken: AST.Token, endToken: AST.Token): Fixer {
    return (fixer: Rule.RuleFixer): Rule.Fix => fixer.replaceTextRange([
      startToken.range[1],
      endToken.range[0],
    ], ' ');
  };

  const getWhitespaceBefore = function getWhitespaceBefore(token: Node): string {
    if (!token || !token.loc) return '';

    const src = sourceCode.getText(token, token.loc.start.column);
    const indent = (/^(\s+)/).exec(src);

    return indent ? indent[1] : '';
  };

  const checkBlock = function checkBlock(
    parentNode: Node,
    expectSameLine: boolean,
    reportParent: boolean = false,
  ): void {
    if (!('body' in parentNode) || !('type' in parentNode.body)) return;

    const { type } = parentNode.body;
    if (type !== 'BlockStatement' && type !== 'ClassBody') return;

    const node = parentNode.body;
    const previousToken = sourceCode.getTokenBefore(node);
    const curlyToken = sourceCode.getFirstToken(node);
    const curlyTokenEnd = sourceCode.getLastToken(node);
    if (!previousToken || !curlyTokenEnd || !curlyToken) return;

    const allOnSameLine = previousToken.loc.start.line === curlyTokenEnd.loc.start.line;
    const { allowSingleLine } = options;
    if (allowSingleLine && allOnSameLine) return;

    const reportNode = (parentNode || node) as BlockParent;
    const whitespace = getWhitespaceBefore(parentNode);
    if (allOnSameLine) {
      const reportDescriptor: Rule.ReportDescriptor = {
        node: reportParent ? reportNode.parent : reportNode,
        messageId: NO_SINGLE,
        fix: insertBreakBefore(curlyTokenEnd, whitespace),
      };
      context.report(reportDescriptor);
      return;
    }

    const startSameLine = previousToken.loc.start.line === curlyToken.loc.start.line;
    if (startSameLine !== expectSameLine) {
      const reportDescriptor: Rule.ReportDescriptor = {
        node: reportParent ? reportNode.parent : reportNode,
        messageId: startSameLine ? OPEN_ALLMAN : OPEN,
        fix: startSameLine ? insertBreakBefore(curlyToken, whitespace) : removeBreakBetween(previousToken, curlyToken),
      };
      context.report(reportDescriptor);
    }

    if (!('body' in node)) return;
    const { body } = node;

    if (!('length' in body) || !body.length) return;
    const [first] = body;

    if (first.loc && first.loc.start.line === curlyToken.loc.start.line) {
      const reportDescriptor: Rule.ReportDescriptor = {
        node: first,
        messageId: BODY,
        fix: insertBreakBefore(curlyToken, repeat(' ', first.loc.start.column)),
      };
      context.report(reportDescriptor);
    }

    const lastToken = body[body.length - 1];
    const endOnSameLine = lastToken.loc && lastToken.loc.end.line === curlyTokenEnd.loc.end.line;
    if (endOnSameLine) {
      const reportDescriptor: Rule.ReportDescriptor = {
        node: lastToken,
        messageId: allowSingleLine ? CLOSE_SINGLE : CLOSE,
        fix: insertBreakBefore(curlyTokenEnd, whitespace),
      };
      context.report(reportDescriptor);
    }
  };

  const checkNode = function checkNode(type: string): CheckNode {
    if (!(type in options)) return noop;

    return (node: Node): void => {
      const { parent } = node as BlockParent;
      const applyParent = (
        type === FUNCTION_EXPRESSION
        && parent
        && parent.type === METHOD_DEFINITION
        && METHOD_DEFINITION in options
      );
      const expectSameLine: boolean = applyParent ? options[METHOD_DEFINITION] : options[type];

      checkBlock(node, expectSameLine, applyParent);
    };
  };

  const result: Rule.RuleListener = {
    ...createBase(context),
    [CLASS_DECLARATION]: checkNode(CLASS_DECLARATION),
    [CLASS_EXPRESSION]: checkNode(CLASS_EXPRESSION),
    [FUNCTION_EXPRESSION]: checkNode(FUNCTION_EXPRESSION),
    [METHOD_DEFINITION]: checkNode(METHOD_DEFINITION),
  };

  return result;
};

const rule: Rule.RuleModule = {
  create,
  meta: merge(
    {},
    baseMeta || {},
    {
      schema: [
        {
          oneOf: [
            {},
            {
              properties: {
                ClassDeclaration: {
                  enum: [ALWAYS, NEVER, IGNORE],
                },
              },
            },
          ],
        },
      ],
      messages: {
        [BODY]: 'Statement inside of curly braces should be on next line.',
        [CLOSE]: 'Closing curly brace does not appear on the same line as the subsequent block.',
        [CLOSE_SINGLE]: 'Closing curly brace should be on the same line as opening curly brace or on the line after the previous block.',
        [NO_SINGLE]: 'Single-line blocks defining is not allowed by configuration - brackets must be placed on different lines.',
        [OPEN]: 'Opening curly brace does not appear on the same line as controlling statement.',
        [OPEN_ALLMAN]: 'Opening curly brace appears on the same line as controlling statement.',
      },
    },
  ),
};

export default rule;
