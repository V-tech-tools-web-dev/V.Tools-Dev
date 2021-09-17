#! /usr/bin/env node

const vGd_Cfg = require('../_vguard.cfg')

console.log(`WELCOME TO vGuard CLI APP DEMO`);
var rootArgs = process.argv.slice(0);

var nodeLocation = rootArgs[0];
var moduleLocation = rootArgs[1];

var myArgs = rootArgs.slice(2);

console.log('nodeLocation: ', nodeLocation);
console.log('moduleLocation: ', moduleLocation);
console.log('myArgs: ', myArgs);


const argv = require('yargs-parser')(process.argv.slice(2))
console.log(argv)
