import { RuleTester } from 'eslint';
import rule from '../src/rules/brace-on-same-line';
import { base } from '../tests';

const ruleTester = new RuleTester();
ruleTester.run('brace-on-same-line (base)', rule, base);
