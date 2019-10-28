#!/usr/bin/env node
'use strict';
const root = require('app-root-path').path;
const Fs = require('fs');

console.log(root);
console.log(process.argv);

// let [, , target, dest] = process.argv;
//
// if(!target) {
//     throw new Error('target is not provided');
// } else {
//     target = root + '/' + target;
// }
//
// if(!dest) {
//     throw new Error('destination is not provided');
// } else {
//     dest = root + '/' + dest;
// }
//
// if(!Fs.existsSync(dest)) {
//
//     Fs.copyFileSync(target,  dest);
//     console.log(`copying ${target} to ${dest}`);
//
// } else {
//
//     console.log('already exist');
// }

