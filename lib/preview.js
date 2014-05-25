"use strict";
//
// Preview: Console logging, inspecting and debugging tool.
//
// Version: 0.0.1
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


function preview(name) {
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
  
  
  var newName = true;
  for ( var ns in names ) {
        if ( names[ns].name === name ) {
          newName = false;
        }
  }
  if ( newName ) {
    names.push({name: name, color: setColor(name)});    // set new name
  }


  // returns this function for console.log(ing).
  function log(n, txt, dump) {

    if ( Object.prototype.toString.call(txt) === '[object Object]' ) {
      dump = txt;
      txt = extend(n);
      n = name;
    } else if ( txt != undefined && Object.prototype.toString.call(dump) != '[object Object]') {
      dump = undefined;
    } else if ( Object.prototype.toString.call(dump) === '[object Object]' ) {
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
        newName = false;
      }
    }   
    if ( newName ) {
      names.push({name: n, color: setColor(n)});    // set new name
    }
  
    var view = {};
    view.txt = txt;
    view.name = n;
    
    for ( var ns in names ) {
      if ( names[ns].name === n ) {
        colorThis = names[ns].color;
      }
    }
    
    if ( dump ) {
      console.log((view.name + ' > ').getcolor.bold.inverse + (view.txt + ' >> ').getcolor.inverse + util.inspect(dump, true, 99, true).inverse);
    } else {
      console.log((view.name + ' > ').getcolor.bold.inverse + view.txt.getcolor.inverse);
    }

  }

  log.enabled = true;
  log.namespace = name;

  return log;
}


var colours = ['cyan', 'magenta', 'yellow', 'blue', 'green', 'grey', 'red'];
function setColor(name) {

  var x = names.length;
  if ( x >= colours.length ) {
    x = x - colours.length;
  }

  var c = colours[x];

  return c;

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
