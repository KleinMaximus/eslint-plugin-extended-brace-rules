import { RuleTester } from 'eslint';
import { base as options } from '../src/configs';
import { MessageIds } from '../src/enums';
import cases from './cases';
import { BlockTypes } from './enums';

const {
  CLASS_DECLARATION,
  CLASS_EXPRESSION,
  EXPRESSION_STATEMENT,
  FUNCTION_EXPRESSION,
  METHOD_DEFINITION,
  RETURN_STATEMENT,
} = BlockTypes;

const {
  BODY,
  CLOSE,
  NO_SINGLE,
  OPEN,
  OPEN_ALLMAN,
} = MessageIds;

const valid: (string | RuleTester.ValidTestCase)[] = [
  { ...cases.classDeclarationAllman, options },
  { ...cases.classExpressionAllman, options },
  { ...cases.functionExpressionOtbs, options },
  { ...cases.methodDefinitionAllman, options },
];

const invalid: RuleTester.InvalidTestCase[] = [
  {
    ...cases.classDeclarationBody,
    options,
    errors: [{ messageId: BODY, type: METHOD_DEFINITION }],
  },
  {
    ...cases.classDeclarationClose,
    options,
    errors: [{ messageId: CLOSE, type: METHOD_DEFINITION }],
  },
  {
    ...cases.classDeclarationOtbs,
    options,
    errors: [{ messageId: OPEN_ALLMAN, type: CLASS_DECLARATION }],
  },
  {
    ...cases.classDeclarationSingle,
    options,
    errors: [{ messageId: NO_SINGLE, type: CLASS_DECLARATION }],
  },

  {
    ...cases.classExpressionBody,
    options,
    errors: [{ messageId: BODY, type: METHOD_DEFINITION }],
  },
  {
    ...cases.classExpressionClose,
    options,
    errors: [{ messageId: CLOSE, type: METHOD_DEFINITION }],
  },
  {
    ...cases.classExpressionOtbs,
    options,
    errors: [{ messageId: OPEN_ALLMAN, type: CLASS_EXPRESSION }],
  },
  {
    ...cases.classExpressionSingle,
    options,
    errors: [{ messageId: NO_SINGLE, type: CLASS_EXPRESSION }],
  },

  {
    ...cases.functionExpressionAllman,
    options,
    errors: [{ messageId: OPEN, type: FUNCTION_EXPRESSION }],
  },
  {
    ...cases.functionExpressionBody,
    options,
    errors: [
      { messageId: OPEN, type: FUNCTION_EXPRESSION },
      { messageId: BODY, type: EXPRESSION_STATEMENT },
    ],
  },
  {
    ...cases.functionExpressionClose,
    options,
    errors: [{ messageId: CLOSE, type: RETURN_STATEMENT }],
  },
  {
    ...cases.functionExpressionSingle,
    options,
    errors: [{ messageId: NO_SINGLE, type: FUNCTION_EXPRESSION }],
  },

  {
    ...cases.methodDefinitionBody,
    options,
    errors: [{ messageId: BODY, type: METHOD_DEFINITION }],
  },
  {
    ...cases.methodDefinitionClose,
    options,
    errors: [{ messageId: CLOSE, type: EXPRESSION_STATEMENT }],
  },
  {
    ...cases.methodDefinitionOtbs,
    options,
    errors: [{ messageId: OPEN_ALLMAN, type: METHOD_DEFINITION }],
  },
  {
    ...cases.methodDefinitionSingle,
    options,
    errors: [
      { messageId: NO_SINGLE, type: METHOD_DEFINITION },
    ],
  },
];

export default { valid, invalid };
