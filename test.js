var preview = require('./index')('test');

preview('-----------------------------------------');
preview('testing');
preview('-----------------------------------------');

preview('txt');
preview('namespace', 'txt');
preview('namespace', 'txt', {dump:true});

preview('-----------------------------------------');
preview('preview(txt, dump)');
preview('-----------------------------------------');

preview('object Object', {test: true});
preview('object Array', [1,2,3]);
preview('object Buffer', new Buffer('hello'));
preview('object Number', 101);
preview('object Date', new Date);
preview('object Boolean', true);

preview('-----------------------------------------');
preview('preview(n, txt, dump)');
preview('-----------------------------------------');

preview('namespace 1', 'object Object', {test: true});
preview('namespace 2', 'object Array', [1,2,3]);
preview('namespace 3', 'object Buffer', new Buffer('hello'));
preview('namespace 4', 'object Number', 101);
preview('namespace 5', 'object Date', new Date);
preview('namespace 6', 'object Boolean', false);

preview('-----------------------------------------');
preview('sundry');
preview('-----------------------------------------');

preview('txt');
preview('namespace', 'txt');
preview('namespace', 'txt', {dump:true});
preview('1');
preview('2', 'txt');
preview('3', 'txt', {dump:true});
preview('4', 'txt');
preview('5', 'txt');
preview('6', 'txt');
preview('7', 'txt');
preview('object Date', new Date);
preview('namespace 5', 'object Date', new Date);
