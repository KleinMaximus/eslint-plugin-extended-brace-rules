import { cloneDeep } from 'lodash';
import base from './base';

const mixed = cloneDeep(base);
mixed[1].allowSingleLine = true;

export default mixed;
