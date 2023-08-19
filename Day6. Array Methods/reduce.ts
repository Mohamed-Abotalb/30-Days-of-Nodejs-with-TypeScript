const arr: number[] = [5, 5, 8, 7, 6];
console.log(arr);

const mul = (value: number, total: number) => {
  total *= value;
  return total;
};

// Get the result of multiplication of all array elements
const output = arr.reduce(mul);
console.log(`The product of the array is : ${output}`);
