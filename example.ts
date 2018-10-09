
//
// ts-node example.ts --preview
//

//const preview = require('./');

import { preview } from './';

let foo: any = {bar: 8211, hello: 'world', list: [1,2,3]};   // some object to inspect.

preview('foo', undefined, true);
preview('foo object', foo, false);

