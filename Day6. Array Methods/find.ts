const arr: number[] = [2, 4, 6, 8, 10];
const arr1: number[] = [2, 3, 4, 7, 8];

const odd = (value: number) => {
  return value % 2 == 1;
};

// Get all elements that are odd numbers
const out: number[] = arr.filter(odd);
const out1: number[] = arr1.filter(odd);
console.log(`Output of array 1 : ${out}`);
console.log(`Output of array 2 : ${out1}`);
