import { RuleTester } from 'eslint';
import { resolve } from 'path';
import { Dictionary } from 'lodash';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const readFilesSync = require('@cloudcmd/read-files-sync');

const codes: Dictionary<string> = readFilesSync(resolve(__dirname, './cases'), 'utf8');

const camelize = function camelise(value: string): string {
  const result = value.toLowerCase().replace(
    /(?:(^.)|([-_\s]+.))/g,
    (match): string => match.charAt(match.length - 1).toUpperCase(),
  );
  return [result.charAt(0).toLowerCase(), result.substring(1)].join('');
};

type Cases = Dictionary<RuleTester.ValidTestCase>;

const cases: Cases = Object.keys(codes).reduce((acc, key): Cases => {
  acc[camelize(key)] = {
    code: codes[key],
    parserOptions: {
      ecmaVersion: 6,
      sourceType: 'module',
    },
  };
  return acc;
}, {});

export default cases;
