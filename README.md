# Preview

Console logging, inspecting and debugging tool.  

## Installation

From your terminal, requires [node.js](http://nodejs.org/).

```
npm install preview
```

## Module
```
require('preview')(<namespace>);
preview(<namespace>, <text>, <object>);
```

## Example

```js
var preview = require('preview')('app1');

var foo = {bar: 8211, hello: 'world', list: [1,2,3]};   // some object to inspect.

preview('foo');
preview('foo', foo);
preview('app2', 'foo again', foo);
```
To run preview, use the --preview argument:
```
node example.js --preview
```
![](http://i.imgur.com/YGz38Qd.png)

## License

Choose either: [MIT](http://opensource.org/licenses/MIT) or [Apache 2.0](http://www.apache.org/licenses/LICENSE-2.0).

