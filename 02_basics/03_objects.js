/*
Object
The Object type represents one of JavaScript's data types. 
It is used to store various keyed collections and more complex entities. 
Objects can be created using the Object() constructor or the object initializer / literal syntax.
*/
// Singleton - constructor
// Object.create

// ---------------- Object literals --------------------------

// object literals

const mySym = Symbol("key1")


const JsUser = {
    name: "Ajit",
    "full name": "Kumar Ajit",
    [mySym]: "mykey1",
    age: 18,
    location: "Gurgaon",
    email: "kumarajit@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["full name"])
// console.log(JsUser[mySym])

JsUser.email = "hitesh@chatgpt.com"
// Object.freeze(JsUser)
JsUser.email = "hitesh@microsoft.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());