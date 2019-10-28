#!/usr/bin/env node
'use strict';
const root = require('app-root-path').path;
const Fs = require('fs');

let [, , target, dest] = process.argv;

if(!target) {
    throw new Error('target is not provided');
}

if(!dest) {
    throw new Error('destination is not provided');
}

if(!Fs.existsSync(root + '/' + dest)) {

    Fs.copyFileSync(root + '/' + target, root + '/' + dest);
}

