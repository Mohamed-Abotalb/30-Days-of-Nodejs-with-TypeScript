// Different ways to create an array
// an array of names
const names: string[] = ['Mohamed', 'Ahmed', 'Mahmoud'];
console.log(names);

//calculating the length of array
const len: number = names.length;
console.log(len);

//Another way to create array
let arr = new Array<number>(3); // declare an array "arr" of size 3
arr = [2, 4, 6]; // initialize elements of array

//OR
// declare and initialize in a single statement
const arr1 = new Array<number>(1, 3, 5);

console.log(`arr: ${arr}`);
console.log(`arr1: ${arr1}`);
