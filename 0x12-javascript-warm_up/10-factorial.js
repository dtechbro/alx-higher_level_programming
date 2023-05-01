#!/usr/bin/node
const factorial = (n) => {
  return isNaN(n) ? 1 : n === 0 ? 1 : n * factorial(n - 1);
}

const n = Number(process.argv[2]);
console.log(`Factorial of ${n} is ${factorial(n)}`);
