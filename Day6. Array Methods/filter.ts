const arr: number[] = [2, 4, 6, 8, 10];
const arr1: number[] = [2, 3, 4, 6, 8];

const even = (value: number) => {
  return value % 2 == 0;
};

// Get all elements that are even numbers
const out: number[] = arr.filter(even);
const out1: number[] = arr1.filter(even);
console.log(`Output of array 1 : ${out}`);
console.log(`Output of array 2 : ${out1}`);
