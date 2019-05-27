import { PropertyValues } from '../enums';

const { ALWAYS, NEVER } = PropertyValues;

export default [
  {
    ClassDeclaration: NEVER,
    ClassExpression: NEVER,
    MethodDefinition: NEVER,
    FunctionDeclaration: ALWAYS,
    FunctionExpression: ALWAYS,
    ArrowFunctionExpression: ALWAYS,
    IfStatement: ALWAYS,
    TryStatement: ALWAYS,
    CatchClause: ALWAYS,
    DoWhileStatement: ALWAYS,
    WhileStatement: ALWAYS,
    ForStatement: ALWAYS,
    ForInStatement: ALWAYS,
    ForOfStatement: ALWAYS,
    SwitchStatement: ALWAYS,
  },
  { allowSingleLine: false },
];
