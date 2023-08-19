// Creating a Regular Expression:
// 1. By regular expression literals: In this, the pattern to be matched is enclosed between the / (slashes):
const reg = /ab*/;

// 2. By calling the constructor function: In this, the pattern to be matched comes within the constructor function RegExp:
const newReg = new RegExp('ab*');
//It will match a , ab, abb , abbbbbb , abbbbbbb and so on.
//But will not match b, bc, abc,aba , etc.
