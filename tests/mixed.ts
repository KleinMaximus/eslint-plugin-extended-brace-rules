import { RuleTester } from 'eslint';
import { mixed as options } from '../src/configs';
import { MessageIds } from '../src/enums';
import cases from './cases';
import { BlockTypes } from './enums';

const { EXPRESSION_STATEMENT, RETURN_STATEMENT } = BlockTypes;
const { CLOSE_SINGLE } = MessageIds;

const valid: (string | RuleTester.ValidTestCase)[] = [
  { ...cases.classDeclarationSingle, options },
  { ...cases.classExpressionSingle, options },
  { ...cases.functionExpressionSingle, options },
  { ...cases.methodDefinitionSingle, options },
];

const invalid: RuleTester.InvalidTestCase[] = [
  {
    ...cases.functionExpressionClose,
    options,
    errors: [{ messageId: CLOSE_SINGLE, type: RETURN_STATEMENT }],
  },
  {
    ...cases.methodDefinitionClose,
    options,
    errors: [{ messageId: CLOSE_SINGLE, type: EXPRESSION_STATEMENT }],
  },
];

export default { valid, invalid };
