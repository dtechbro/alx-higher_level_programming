#!/usr/bin/node
const arg = process.argv[2];
console.log((/^\d+$.test(arg)) ? `My number: ${parseInt(arg)}` : "Not a Number");
