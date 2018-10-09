# Preview

[![build status][travis-image]][travis-url]
[travis-image]: https://api.travis-ci.org/fluidecho/preview.png
[travis-url]: https://travis-ci.org/fluidecho/preview

Console logging, inspecting and debugging tool.  

Instead of having console.log and util.inspect all over your code during development, use preview and can then turn printing on or off using _--preview_ argument.

## Installation

From your terminal, requires [node.js](http://nodejs.org/).

```
npm install preview
```

## Module
```
require('preview')(<namespace>, {options});
preview(<namespace>, <text>, <object>);
```
Objects supported: __{}, [], Number, Buffer, Date, Boolean__

## Example

```js
var preview = require('preview')('app1');

var foo = {bar: 8211, hello: 'world', list: [1,2,3]};   // some object to inspect.

preview('foo');
preview('foo object', foo);
preview('app2', 'foo.bar: ' + foo.bar);
preview('foo foo from app1 again');
```
To run preview, use the _--preview_ argument:
```
node example.js --preview
```
![](http://i.imgur.com/CBuMtOC.png)

### Namespaces

Can print just a specific namespace or a list of namespaces.

```
node example.js --preview=app1
node example.js --preview="app1, app2"
```

## Options
```js
{
  inverse: true   // inverse the background color.
}
```

## License

Choose either: [MIT](http://opensource.org/licenses/MIT) or [Apache 2.0](http://www.apache.org/licenses/LICENSE-2.0).
