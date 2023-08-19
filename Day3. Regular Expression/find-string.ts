// Finding specific text
import * as fs from 'fs';

const fileName: string = 'data.txt';

const str: string = fs.readFileSync(fileName).toString();

const pattern = /man/gim;

const array = str.match(pattern);

const len = array?.length;

console.log('Occurrences of pattern in the string is : ' + len);
