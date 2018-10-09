"use strict";
//
// Preview2: Console logging, inspecting and debugging tool.
//
// Version: 0.2.1
// Author: Mark W. B. Ashcroft (mark [at] fluidecho [dot] com)
// License: MIT or Apache 2.0.
//
// Copyright (c) 2014-2018 Mark W. B. Ashcroft.
// Copyright (c) 2014-2018 Fluidecho.
//


import {inspect} from 'util';
const argv = require('minimist')(process.argv.slice(2));


export function preview(argA: any, argB?: undefined|any, print?: boolean) : void {
  if ( !argv.preview && print != true ) return;
  if ( argB != undefined ) {
    console.log(`(${module.filename}:${process.pid}) >> ` + argA + ' >>> ' + '\n' + inspect(argB, true, 99, true) + ' ¬');
  } else {
    console.log(`(${module.filename}:${process.pid}) >> ` + inspect(argA, true, 99, true) + ' ¬');
  }
};
