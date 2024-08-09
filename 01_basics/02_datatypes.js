// Datatypes in javascript!
"use strict"; // treat all JS code as newer version!
// alert(3 + 3)  // we are using nodejs, not browser!

console.log(3+ 3);

// code readability should be high.

let age = 18;  // Number
let isAdult = true; //Boolean
let name = "Ajit"; // String
let address; // undefined
let state = null; // Object

console.log(typeof undefined); // undefined
console.log(typeof null); // object
let arr = ["Ajit",25,"kumar"];
console.log(typeof arr);

const myFunction = function() {
    console.log("Hello world!");   
}

console.log(typeof myFunction);  // Function


/*
There are two types of datatypes!    for better understanding visit MDN

Primitive
. number 
. bigint
. string   => ""
. boolen   => The Boolean type represents a logical entity and is inhabited by two values: true and false.
. null     => The Null type is inhabited by exactly one value: null.
. undefined => The Undefined type is inhabited by exactly one value: undefined.
. symbol

Non - primitive
. Array
. object 
. functions

*/

// **************** STACK AND HEAP MEMORY IN JS **************

// Stack (Primitive),  Heap (Non - Primitive)

/*
STACK :- In JavaScript, static data includes primitive values like strings, numbers, boolean, null, and undefined.
A fixed amount of memory is allocated for static data.

HEAP :- It is used to store objects and functions in JavaScript. 
The engine doesn’t allocate a fixed amount of memory. 
*/ 




