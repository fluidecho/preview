"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//
// Preview2: Console logging, inspecting and debugging tool.
//
// Version: 0.2.0
// Author: Mark W. B. Ashcroft (mark [at] fluidecho [dot] com)
// License: MIT or Apache 2.0.
//
// Copyright (c) 2014-2018 Mark W. B. Ashcroft.
// Copyright (c) 2014-2018 Fluidecho.
//
const util_1 = require("util");
const argv = require('minimist')(process.argv.slice(2));
function preview(argA, argB, print) {
    if (!argv.preview && print != true)
        return;
    if (argB != undefined) {
        console.log(`(${module.filename}:${process.pid}) >> ` + argA + ' >>> ' + '\n' + util_1.inspect(argB, true, 99, true) + ' ¬');
    }
    else {
        console.log(`(${module.filename}:${process.pid}) >> ` + util_1.inspect(argA, true, 99, true) + ' ¬');
    }
}
exports.preview = preview;
;
//# sourceMappingURL=index.js.map