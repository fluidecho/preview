var preview = require('./index')('app1');

var foo = {bar: 1, hello: 'world'};

var foo2 = {bar: 2, hello: 'world', list: [1,2,3,4,5], fab: true};


// test:
preview('hello from app1, 1');

preview('hello from app1, 2, foo', foo);

preview('app2', 'hello from app2, 1');

preview('hello from app1, 3');

preview('app2', 'hello from app2, 2, foo2', foo2);

preview('hello from app1, 4');

preview('maths addition', 'add 4 and 5: ' + (4 + 5));

var x = 1;
preview('x = ' + x++);
preview('x = ' + x++);
preview('x', 'x = ' + x++);

var bar = {
	barbar: function (b) {
	}
};

preview('bar', 'x = ' + x++, bar);

preview('test array', ['one', 'two', 'three']);

preview('hello1', 'world1');

preview('hello2', 'world2');

preview('hello3', 'world3');

preview('hello4', 'world4');

preview('last foo', foo);

preview('-----------------------------------------');
preview('test all object types');
preview('-----------------------------------------');

preview('object Object', {test: true});
preview('object Array', [1,2,3]);
preview('object Buffer', new Buffer('hello'));
preview('object Number', 101);







