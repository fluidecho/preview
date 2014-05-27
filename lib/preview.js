"use strict";
//
// Preview: Console logging, inspecting and debugging tool.
//
// Version: 0.0.6
// Author: Mark W. B. Ashcroft (mark [at] kurunt [dot] com)
// License: MIT or Apache 2.0.
//
// Copyright (c) 2014 Mark W. B. Ashcroft.
// Copyright (c) 2014 Kurunt.
//


var util = require('util');
var extend = require('util')._extend;
var colors = require('colors');
var argv = require('minimist')(process.argv.slice(2));


module.exports = preview;   // public expose module.


var names = [];
var colorThis = '';


function preview(name, options) {
  function disabled(){}
  disabled.enabled = false;
  
  // if argument --preview set.
  if ( !argv.preview ) {
    return disabled;
  }

  // TODO: name into namespace control.
  //if ( names[0] === '*' ) {
  //  names[0] = name;    // first call of preview
  //} else {
  //  return disabled;    // if none.
  //}
  
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

    if ( Object.prototype.toString.call(txt) === '[object Array]' ) {
      txt = {'[object Array]': txt};
    }
    
    if ( Object.prototype.toString.call(dump) === '[object Array]' ) {
      dump = {'[object Array]': dump};
    }

    // TODO: benchmarking feature.
    //if ( n === 'bm' ) {
    //  bm(name, dump);
    //}

    //function bm(namespace, dump) {
      //var x = extend(dump);
      //setInterval(function () {   
        //log(namespace + ':benchmark', '' + dump);
        //x = 0;    // reset
      //}, 1000);
    //}

    if ( Object.prototype.toString.call(txt) === '[object Object]' ) {
      dump = txt;
      txt = extend(n);
      n = name;
    } else if ( txt != undefined && ( Object.prototype.toString.call(dump) != '[object Object]' || Object.prototype.toString.call(dump) != '[object Number]' ) ) {
      dump = undefined;
    } else if ( Object.prototype.toString.call(dump) === '[object Object]' || Object.prototype.toString.call(dump) === '[object Number]' ) {
      txt = txt;
      dump = dump;
    } else {
      txt = n;
      n = name;
      dump = undefined; 
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
      if ( dump ) {
        console.log((n + ' > ').getcolor.bold.inverse + (txt + ' >> ').getcolor.inverse + '\n ' + util.inspect(dump, true, 99, true).inverse);
      } else {
        console.log((n + ' > ').getcolor.bold.inverse + txt.getcolor.inverse);
      }    
    } else {
      if ( dump ) {
        console.log((n + ' > ').getcolor.bold + (txt + ' >> ').getcolor + '\n ' + util.inspect(dump, true, 99, true));
      } else {
        console.log((n + ' > ').getcolor.bold + txt.getcolor);
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

  var x = names.length;
  if ( x >= colours.length ) {
    x = x - colours.length;
  }

  return colours[x];

}

colors.addSequencer("getcolor", (function() {
  return function(letter, i, exploded) {
     return letter === "" ? letter : letter[colorThis];
  };
})());  








/*
// TODO: name into namespace control.
preview.enable = function(argvname) {
  if ( argvname === true ) {
    argvname = '*';   // allow any namespace.
  }
  names.push(argvname);
};
// read if --preview argument and any --preview=namespace
if ( argv.preview ) {
  preview.enable(argv.preview);
}
*/
