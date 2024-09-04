
// Function definition!
function sayMyName(){
    // console.log("A");
    // console.log("J");
    // console.log("I");
    // console.log("T");

    console.log("KUMAR AJIT");
    
    
}

// sayMyName - Function reference!, () - function execution!
// sayMyName() - Function call.

// function addTwoNumbers(number1, number2){

//     console.log(number1 + number2);
// }

function addTwoNumbers(number1, number2){

    // let result = number1 + number2
    // return result
    return number1 + number2
}

const result = addTwoNumbers(3, 5)

// console.log("Result: ", result);


function loginUserMessage(username = "sam"){
    if(!username){
       // console.log("PLease enter a username");
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("hitesh"))
// console.log(loginUserMessage("hitesh"))


function calculateCartPrice(val1, val2, ...num1){
    return num1
}

// console.log(calculateCartPrice(200, 400, 500, 2000))

const user = {
    username: "hitesh",
    prices: 199
}

function handleObject(anyobject){
   // console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user)
handleObject({
    username: "sam",
    price: 399
})

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));
//console.log(returnSecondValue([200, 400, 500, 1000]));



// self study

function isAdult (){
    let age = 16;
    if(age >= 18){
        console.log("adult");
        
    }else{
        console.log("not adult");
        
    }
}
// isAdult();

function printNumber (){
    for(let i = 0; i <= 5; i++){
        console.log(i);
    }
}
// printNumber();

function poem (){
    console.log("Twinkle, twinkle, little star,How I wonder what you are!Up above the world so high,Like a diamond in the sky.");  
    console.log("When the blazing sun is gone,When he nothing shines upon,Then you show your little light,Twinle, twinkle, all the night.");
    
}
//poem();


function rollDice (){
    let dice = Math.floor(Math.random()*6) + 1;
    console.log(dice);
    
}

rollDice();

// function with passing arguments.
function printInfo (name,age){
console.log(`${name}'s age is ${age}.`);
}
printInfo("Ajit",23);