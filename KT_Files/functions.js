// *5. Functions - Defined with the keyword "function"

function myFunction(a, b) {
    return a * b;
}
console.log(myFunction(2, 3))

//Function as an expression
const x = function (a, b) { return a * b };  
console.log(x(4, 4))  // Prints 16

//Constructor
const newFunction = new Function("a", "b", "return a * b");  
let y = newFunction(5, 5);
console.log(y)  //Prints 25


//Arrow Function
const sum = (p, q) => { 
    return p + q
}
console.log(sum(9, 9))


//Function without parameters
const hello = ()=>{   
    console.log("Hello all. How are you?")
}
hello(); // calling the function explictly


// Example 1

let s = sumAll(1, 123, 500, 115, 44, 88)
function sumAll() {
    let sum = 0;
    for(let i = 0; i < arguments.length; i++) {
      sum += arguments[i];
    }
    return sum;
  }
  console.log(s)

  
  // Example 2

  function nameFunction(arg1, arg2) {   // This is a function constructor:
    this.firstName = arg1;
    this.lastName  = arg2;
  }
    // This creates a new object
  const myObj = new nameFunction("John", "Doe");
  
  // This will return "JohnDoe"
 let b = myObj.firstName + myObj.lastName;
 console.log(b)


 // Example 3

 const person = {
    firstName:"Arjun",
    lastName: "Reddy",
    fullName: function () {
      return this.firstName + " " + this.lastName;
    }
  }
    console.log( person.fullName()) // This will return "Arjun Reddy"

// Example 4

const newName = {   // *** Using call() Method ***
    fullName: function() {
      return this.firstName + " " + this.lastName;
    }
  }
  const person1 = {
    firstName:"Tim",
    lastName: "Cook"
  }
  const person2 = {
    firstName:"Bill",
    lastName: "Gates"
  }
   //The call() method takes arguments separately.
   // The apply() method takes arguments as an array.
   let z =  newName.fullName.call(person1); // Tim Cook
   let az = newName.fullName.apply(person2)
   console.log(z)
   console.log(az)


   // Function Borrowing - bind()

   const person3 = {
    firstName:"John",
    lastName: "Doe",
    fullName: function () {
      return this.firstName + " " + this.lastName;
    }
  }
    const member = {
    firstName:"Hege",
    lastName: "Nilsen",
  }
    let fullName = person3.fullName.bind(member);
  console.log(fullName())
