import { BlockTypes as DefaultTypes } from '../src/enums';

enum LocalTypes {
  EXPRESSION_STATEMENT = 'ExpressionStatement',
  RETURN_STATEMENT = 'ReturnStatement',
}

export const BlockTypes = {
  ...DefaultTypes,
  ...LocalTypes,
};
