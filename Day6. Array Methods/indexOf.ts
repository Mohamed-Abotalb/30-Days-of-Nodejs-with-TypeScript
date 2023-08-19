const arr: number[] = [5, 2, 8, 5, 6];
console.log(arr);

// Search for value 8 and get its index
const pos: number = arr.indexOf(8);
console.log('index of 8 is : ' + pos);

// Search for value 5 and get its index
const pos1: number = arr.indexOf(5);
console.log('index of 5 is : ' + pos1);

// Search for value 9 and get its index
const pos2: number = arr.indexOf(9);
console.log('index of 9 is : ' + pos2); // 9 not found
