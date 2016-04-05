#!/usr/bin/env node

var program = require('commander');

program
    .version('0.0.1')
    .usage('<location pattern> <destination (optional)>')
    .parse(process.argv);

if(!program.args.length) {
    program.help();
} else {
    console.log('Keywords: ' + program.args);
}
