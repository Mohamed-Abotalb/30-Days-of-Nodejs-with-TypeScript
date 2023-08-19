// Validating Hexadecimal number
const str: string = 'FFFFFF';

const pattern = /^[a-fA-F0-9]+$/g;

const response = str.match(pattern);

response
  ? console.log('Valid Hexadecimal number')
  : console.log('Not a valid Hexadecimal number');
