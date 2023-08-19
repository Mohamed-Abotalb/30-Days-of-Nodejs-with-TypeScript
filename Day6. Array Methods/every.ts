const arr: number[] = [2, 4, 6, 8, 10];
const arr1: number[] = [2, 3, 4, 6, 8];

const even = (value: number) => {
  return value % 2 == 0;
};

// check if all arrays elements are even numbers or not
const out: boolean = arr.every(even);
const out1: boolean = arr1.every(even);
console.log(`Output of array 1 : ${out}`);
console.log(`Output of array 2 : ${out1}`);
