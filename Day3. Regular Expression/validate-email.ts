// Validating emails
const str: string = 'rjbitdemo@gmail.com';

const pattern =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;

const response = str.match(pattern);

response
  ? console.log('Valid email address')
  : console.log('Please enter a valid email address');
