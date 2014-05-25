//
// node example.js --preview
//

var preview = require('./')('app1');

var foo = {bar: 8211, hello: 'world', list: [1,2,3]};   // some object to inspect.

preview('foo');
preview('foo', foo);
preview('app2', 'foo again', foo);
