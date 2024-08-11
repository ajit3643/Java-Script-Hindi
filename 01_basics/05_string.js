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

// String Length
// To find the length of a string, use the built-in length property:

let text = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let length = text.length;
/*
Extracting String Characters
There are 4 methods for extracting string characters:

The at(position) Method
The charAt(position) Method
The charCodeAt(position) Method
Using property access [] like in arrays
*/ 
// JavaScript String charAt()
// The charAt() method returns the character at a specified index (position) in a string:

let char = text.charAt(5);
console.log(char);

/*
Extracting String Parts
There are 3 methods for extracting a part of a string:

slice(start, end)
substring(start, end)
substr(start, length)
JavaScript String slice()
slice() extracts a part of a string and returns the extracted part in a new string.

The method takes 2 parameters: start position, and end position (end not included).
*/ 

let part = text.slice(7, 13);








