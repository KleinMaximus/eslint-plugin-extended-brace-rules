import { Linter } from 'eslint';
import { braceOnSameLine } from './rules';
import { base as baseConfigOptions, mixed as mixedConfigOptions } from './configs';
import * as enums from './enums';

/**
 * use in ESLint config
 * {
 *   extends: ['plugin:extended-brace-rules/mixed'],
 *   plugins: ['extended-brace-rules']
 * }
 */

const base: Linter.Config = {
  rules: {
    'brace-style': 'off',
    'extended-brace-rules/brace-on-same-line': [
      'error',
      ...baseConfigOptions,
    ],
  },
};

const mixed: Linter.Config = {
  rules: {
    'brace-style': 'off',
    'extended-brace-rules/brace-on-same-line': [
      'error',
      ...mixedConfigOptions,
    ],
  },
};

export const configs = { base, mixed };

export const rules = {
  'brace-on-same-line': braceOnSameLine,
};

export { enums };
