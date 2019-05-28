import { CLIEngine } from 'eslint';
import { braceOnSameLine } from './rules';
import { base as baseConfigOptions, mixed as mixedConfigOptions } from './configs';
import * as enums from './enums';

/**
 * use in ESLint config
 * {
 *   extends: ['plugin:extended-brace-plugin/mixed']
 * }
 */

const base: CLIEngine.Options = {
  plugins: ['extended-brace-plugin'],
  rules: {
    'brace-style': 'off',
    'extended-brace-plugin/brace-on-same-line': [
      'error',
      ...baseConfigOptions,
    ],
  },
};

const mixed: CLIEngine.Options = {
  plugins: ['extended-brace-plugin'],
  rules: {
    'brace-style': 'off',
    'extended-brace-plugin/brace-on-same-line': [
      'error',
      ...mixedConfigOptions,
    ],
  },
};

const configs = { base, mixed };

const rules = {
  'brace-on-same-line': braceOnSameLine,
};

export {
  configs,
  enums,
  rules,
};
