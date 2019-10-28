#!/usr/bin/env node
'use strict';

const Fs = require('fs');

const root = process.env.INIT_CWD;

let [, , target, dest] = process.argv;

if(!target) {
    throw new Error('target is not provided');
} else {
    target = root + '/' + target;
}

if(!dest) {
    throw new Error('destination is not provided');
} else {
    dest = root + '/' + dest;
}

if(!Fs.existsSync(dest)) {

    Fs.copyFileSync(target,  dest);
    console.log(`copying ${target} to ${dest}`);

} else {

    console.log('already exist');
}

