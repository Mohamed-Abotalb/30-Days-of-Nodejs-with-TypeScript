// Finding number of tags
import * as fs from 'fs';

const fileName: string = 'data.html';

const str = fs.readFileSync(fileName).toString();

const pattern = /<(\"[^\"]*\"|'[^']*'|[^'\">])*>/gim;

const array = str.match(pattern);

const len = array?.length;

console.log('Occurrences of pattern in the string is : ' + len);
