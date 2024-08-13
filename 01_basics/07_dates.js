// Dates
let myDate = new Date();
// console.log(myDate.toString());
// console.log(myDate.toLocaleString()); // Output - 8/13/2024, 6:12:46 AM
// console.log(myDate.toDateString());  // Output - Tue Aug 13 2024
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toTimeString());

// console.log(typeof myDate);  // Output - object

// let myCreatedDate  = new Date(2024,7,13);
// let myCreatedDate  = new Date(2024,7,13,12,31,8);
let myCreatedDate  = new Date("07-13-2024");
// console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now();
// console.log(myTimeStamp);  // Output - 1723532734907 milliseconds
// console.log(myCreatedDate.getTime());

// console.log(Math.floor(Date.now()/1000));

let newDate = new Date();

console.log(newDate);
console.log(newDate.getDate());
console.log(newDate.getMonth());
console.log(newDate.getFullYear());

console.log(`Date - ${newDate.getDate()}/${newDate.getMonth()}/${newDate.getFullYear()}`);

newDate.toLocaleString('default',{
   weekday:"long" 
});











 





 