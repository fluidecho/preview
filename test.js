var preview = require('./index')('app1');

var foo = {bar: 2, hello: 'world'};

var foo2 = {bar: 2, hello: 'world', list: [1,2,3,4,5], fab: true};


// test:
preview('hello from app1, 1');

preview('hello from app1, 2, foo', foo);

preview('app2', 'hello from app2, 1');

preview('hello from app1, 3');

preview('app2', 'hello from app2, 2, foo2', foo2);

preview('hello from app1, 4');
