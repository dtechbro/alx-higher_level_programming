#!/usr/bin/node
const arg = procee.argv[2];
const num = parseInt(arg);

if (isNaN(num)) {
  console.log('Missing number of occurrences');
} else {
  let output = '';
  for (let i = 0; i < num; i++) {
    output += 'C is fun\n';
  }
  console.log(output);
}
