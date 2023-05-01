#!/usr/bin/node
const arg = procee.argv[2];

if (isNaN(parseInt(arg))) {
  console.log('Missing number of occurrences');
} else {
  const num = Math.floor(parseInt(arg));
  let output = '';

  for (let i = 0; i < num; i++) {
    output += 'C is fun\n';
  }
  console.log(output.trim());
}
