// console.time() and console.timeEnd()

console.time('division');
const x: number = 10;
const y: number = 20;
const result: number = x / y;

if (result == 2) {
  console.log('Result: %d', result);
} else {
  console.log('Result: ' + result);
}
console.timeEnd('division');
