"use strict";
//
// Preview: Console logging, inspecting and debugging tool.
//
// Version: 0.1.3
// Author: Mark W. B. Ashcroft (mark [at] kurunt [dot] com)
// License: MIT or Apache 2.0.
//
// Copyright (c) 2014-2017 Mark W. B. Ashcroft.
// Copyright (c) 2014-2017 FluidEcho.
//


var util = require('util');
var extend = require('util')._extend;
var colors = require('colors');
var argv = require('minimist')(process.argv.slice(2));


module.exports = preview;   // public expose module.


var names = [];
var colorThis = '';
var only = false;   // namespace control.


function preview(name, options) {
  function disabled(){}
  disabled.enabled = false;

  // if argument --preview set.
  if ( !argv.preview ) {
    return disabled;
  }

  // namespace control.
  if ( Object.prototype.toString.call(argv.preview) != '[object Boolean]' && only === false ) {
    only = [];
    only = argv.preview.split(',');
    for (var z = 0; z < only.length; z++) {
      only[z] = only[z].trim();
    }
  }

  if ( only != false ) {
    var validName = false;
    for (var z = 0; z < only.length; z++) {
      if ( only[z] === name ) {
        validName = true;
        break;
      }
    }
    if ( !validName ) {
      return disabled;
    }
  }

  // options:
  if ( options === undefined ) {
    options = {};
  }

  if ( options.inverse === undefined ) {
    options.inverse = false;
  }

  var newName = true;
  for ( var ns in names ) {
    if ( names[ns].name === name ) {
      newName = false;
      break;
    }
  }
  if ( newName ) {
    names.push({name: name, color: setColor(name)});    // set new name
  }


  // returns this function for console.log(ing).
  function log(n, txt, dump) {

    // TODO: benchmarking feature.
    //if ( n === 'bm' ) {
    //  bm(name, dump);
    //}

    // --- preview(n, txt, dump)
    // A = preview('name', 'txt', {dump:true})
    // B = preview('name', 'txt')
    // C = preview('txt', {dump:true})
    // D = preview('txt')

    if ( Object.prototype.toString.call(n) === '[object String]' && Object.prototype.toString.call(txt) === '[object String]') {
      //console.log('A or B');
      n = n;
      txt = txt;
      dump = dump;
    } else if ( Object.prototype.toString.call(txt) != '[object String]' ) {
      //console.log('C or D');
      dump = txt;
      txt = extend(n);
      n = name;
    } else {
      //console.log('D');
      txt = extend(n);
      n = name;
    }

    var newName = true;
    for ( var ns in names ) {
      if ( names[ns].name === n ) {
        colorThis = names[ns].color;
        newName = false;
        break;
      }
    }
    if ( newName ) {
      var c = setColor(n);
      names.push({name: n, color: c});    // set new name
      colorThis = c;
    }

    if ( options.inverse ) {
      if ( dump || dump === false ) {
        console.log(((n + ' > ').bold + txt + ' >> ')[colorThis].inverse + '\n' + util.inspect(dump, true, 99, true));
      } else {
        console.log((n + ' > '.bold + txt)[colorThis].inverse);
      }
    } else {
      if ( dump || dump === false ) {
        console.log(((n + ' > ').bold + txt + ' >> ')[colorThis] + '\n' + util.inspect(dump, true, 99, true));
      } else {
        console.log((n + ' > '.bold + txt)[colorThis]);
      }
    }

  }

  log.enabled = true;
  log.namespace = name;

  return log;
}


var colours = randomize(['cyan', 'magenta', 'yellow', 'blue', 'green', 'grey', 'red']);   // randomize array so each process using preview starts with a different colour.

function randomize(array) {
  var i = array.length, temp, randomi;

  while (i !== 0) {
    randomi = Math.floor(Math.random() * i);
    i -= 1;
    temp = array[i];
    array[i] = array[randomi];
    array[randomi] = temp;
  }

  return array;
}


function setColor(name) {

  var pw = Math.floor(names.length / colours.length);
  var x = names.length - (colours.length * pw);

  return colours[x];

}
