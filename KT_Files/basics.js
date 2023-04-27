// #1 Printing hello world
console.log('Hello world');

// #2 Variables

let firstName = 'John' // anything written in quotes is a string
firstName = 'sara' // constant can be declared without let 
let lastName = 'Doe'
let score = 103 
let bonus = 20
let totalScore = score + bonus
console.log("Total score is :"+totalScore)
console.log(firstName + ' ' +lastName) // prints John Doe (Concatenation)


// #3 Hoisting
// 18 and 19 lines will run because of hoisting
console.log(a)  //prints Undefined
greet()
function greet() { 
    console.log('Example for Hosting')

}
var a = 9; //Declaration is hoisted at top But initialization is not (ex: let a = 9)
console.log(a) // Prints 9
// * Function exp and Class exp are not hoisted 



