// Array in JS.

const arr = [0,1,2,3,4,5,true,"Ajit"];
//console.log(arr[4]);

const newArr = new Array(1,2,3,4,5);
//console.log(newArr);


// JavaScript arrays are resizable and can contain a mix of different data types.

// JavaScript arrays are not associative arrays and so, 
// array elements cannot be accessed using arbitrary strings as indexes, 
// but must be accessed using nonnegative integers.

// ---------------------------- Array Methods ---------------------------------

// push () - It adds elements to the end of the array.

let myArr = [1,2,3,4,5];
//console.log(myArr);

// Before apply push () method. Output is :- [ 1, 2, 3, 4, 5 ]

myArr.push(10);
console.log(myArr);

// After apply push () method. Output is :- [ 1, 2, 3, 4, 5, 10 ]

// pop () - It removes the last element from an array and returns removed element.

myArr.pop();
console.log(myArr);

// Length :- It returns the number of elements in an array.

// console.log(myArr.length);

// Unshift () :- It adds elements to the beginning of an array.

myArr.unshift(0);
console.log(myArr);

// Shift () :- It removes the first elements and returns removed element from an array.

myArr.shift();
console.log(myArr);

console.log(myArr.includes(5));  // Output - true. It means this value 5 is exists in an array.
console.log(myArr.includes(54)); // Output - false. It means this value 54 is not exists in an array.

console.log(myArr.indexOf(5));  // Output - This value contains 4th index of an array.

let newArray = myArr.join();
console.log(myArr);
console.log(newArray);

// sort () :- It sorts the elements of an array.
newArray = [64,45,3,92,44,64];
console.log(newArray);
console.log(newArray.sort());

console.log(newArr.reverse());




















