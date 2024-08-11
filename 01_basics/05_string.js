// Creating strings
// Strings can be created as primitives, from string literals, or as objects, using the String() constructor:

const string1 = "A string primitive";
const string2 = 'Also a string primitive';
const string3 = `Yet another string primitive`;
const string4 = new String("A String object");

const name =  "Ajit";
const repoCount = 10;

console.log(name + repoCount);

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);
console.log(name.length);
console.log(name.charAt(0));
console.log(name.indexOf('t'));

console.log(name.toUpperCase());
let newName = name.concat( " Kumar");
console.log(newName.length);
console.log(newName);







