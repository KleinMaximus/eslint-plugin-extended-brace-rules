declare module 'eslint-plugin-brace-rules/lib/rules/brace-on-same-line' {
  import { Rule } from 'eslint';

  export function create(context: Rule.RuleContext): Rule.RuleListener;
  export const meta: Rule.RuleModule['meta'];
}
