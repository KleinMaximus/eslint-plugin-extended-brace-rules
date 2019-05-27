import { RuleTester } from 'eslint';
import rule from '../src/rules/brace-on-same-line';
import { mixed } from '../tests';

const ruleTester = new RuleTester();
ruleTester.run('brace-on-same-line', rule, mixed);
