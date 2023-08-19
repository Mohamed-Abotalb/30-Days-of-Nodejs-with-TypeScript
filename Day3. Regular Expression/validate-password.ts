// Validating Password
const str: string = 'Aa#1aaabcde';

const pattern = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;

const response = str.match(pattern);

response ? console.log('Valid password') : console.log('Not a valid password');
