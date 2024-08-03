const accountId = 687545;
let accountEmail = "ajitinfotech123@google.com";
var accountPassword = "123547";
let accountState;

accountCity = "Gurgaon"; // This is also possible to make a variable. without using keywords let, const, var.

console.log(accountId);

/*
The keywords var, let, and const in JavaScript define the variable scope and behavior. 
The var keyword has function scope and is hoisted. 
The let and const keywords have block scope.
Perfer not to use var.
Example : 
var myName = "Chris";
var myName = "Bob";
But the following would throw an error on the second line:
let myName = "Chris";
let myName = "Bob";
*/

console.table([accountId, accountEmail, accountPassword, accountCity,accountState]);
