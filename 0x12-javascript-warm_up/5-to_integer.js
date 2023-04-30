#!/usr/bin/node
const arg = process.argv[2];
console.log(Number.isInteger(Number(arg))) ? `My number: ${parseInt(arg)}` : "Not a Number";
