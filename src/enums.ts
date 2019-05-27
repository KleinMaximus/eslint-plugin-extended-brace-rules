export enum BlockTypes {
  CLASS_DECLARATION = 'ClassDeclaration',
  CLASS_EXPRESSION = 'ClassExpression',
  FUNCTION_EXPRESSION = 'FunctionExpression',
  METHOD_DEFINITION = 'MethodDefinition',
}

export enum MessageIds {
  BODY = 'body',
  CLOSE = 'close',
  CLOSE_SINGLE = 'single',
  NO_SINGLE = 'multi',
  OPEN = 'open',
  OPEN_ALLMAN = 'allman',
}

export enum PropertyValues {
  ALWAYS = 'always',
  IGNORE = 'ignore',
  NEVER = 'never',
}

export enum Styles {
  ALLMAN = 'allman',
  OTBS = '1tbs',
}
