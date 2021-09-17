#! /usr/bin/env node



console.log(`WELCOME TO vGuard CLI APP DEMO`);
var rootArgs = process.argv.slice(0);

var nodeLocation = rootArgs[0];
var moduleLocation = rootArgs[1];

var myArgs = rootArgs.slice(2);

console.log('nodeLocation: ', nodeLocation);
console.log('moduleLocation: ', moduleLocation);
console.log('myArgs: ', myArgs);
