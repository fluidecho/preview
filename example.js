//
// node example.js --preview
//

var preview = require('./')('app1');

var foo = {bar: 8211, hello: 'world', list: [1,2,3]};   // some object to inspect.

preview('foo');
preview('foo object', foo);
preview('app2', 'foo.bar: ' + foo.bar);
preview('foo foo from app1 again');
