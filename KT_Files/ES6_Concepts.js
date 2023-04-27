//  Array Helper methods - forEach, map, filter, find, every, some, reduce

//forEach(): The forEach() function is used to iterate through all the entries of the array.
let sum = 0;
const numbers = [65, 44, 12, 4];
numbers.forEach(myFunction);
console.log("Sum is :"+sum)
function myFunction(item) {
  sum += item;
}

// map() creates a new array from calling a function for every array element.
// map() does not execute the function for empty elements.
// map() does not change the original array.

const persons = [
    {firstname : "Malcom", lastname: "Reynolds"},
    {firstname : "Kaylee", lastname: "Frye"},
    {firstname : "Jayne", lastname: "Cobb"}
  ];
 
  console.log(persons.map(getFullName))
    function getFullName(item) {
    return [item.firstname,item.lastname].join(" ");
  }

// The filter() method creates a new array filled with elements that pass a test provided by a function.
// The filter() method does not execute the function for empty elements.
// The filter() method does not change the original array.

const ages = [32, 33, 16, 40];
console.log(ages.filter(checkAdult)) 
function checkAdult(age) {
  return age >= 18;
}

const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];
const result = words.filter(word => word.length > 6);
console.log(result);

const fruits = ["apple", "banana", "grapes", "mango", "orange"];

/**
 * Filter array items based on search criteria (query)
 */
function filterItems(arr, query) {
  return arr.filter((el) => el.toLowerCase().includes(query.toLowerCase()));
}
console.log(filterItems(fruits, "ap")); // ['apple', 'grapes']
console.log(filterItems(fruits, "an")); // ['banana', 'mango', 'orange']

//find() returns the value of the first element 
//in an array that passes a test (provided by a function)

const myAge = [3, 10, 18, 20 ,21];
console.log(myAge.find(checkAge)) 
function checkAge(age) {
  return age > 18;
}

// The every() method executes a function for each array element.
// The every() method returns true if the function returns true for all elements.
// The every() method returns false if the function returns false for one element.

console.log(myAge.every(checkAge)) //false for array myAge

// The some() method executes the callback function once for each array element.
// The some() method returns true (and stops) if the function returns true for one of the array elements.
// The some() method returns false if the function returns false for all of the array elements.

let x = ages.some(checkAge);
console.log(x) // true 

// The reduce() method executes a reducer function for array element.
// The reduce() method returns a single value: the function's accumulated result.

const newNumbers = [175, 50, 25];
console.log(newNumbers.reduce(myFunc)) 
function myFunc(total, num) {
  return total - num;
} // returns 100 = 175-(50+25)

//JavaScript Template Literals
let firstName = "John";
let lastName = "Doe";
let text = `Welcome ${firstName}, ${lastName}!`;
console.log(text)

//Arrow Fucntion
hello = function() {     
    return "Hello World!";
  }
  console.log(hello())

hello1 = () => {
    return "Hellooooo Worldddddd!";
  }
  console.log(hello1())


  // Promise and fetch
  const fetchPromise = fetch('https://ghibliapi.herokuapp.com/people');
  console.log(fetchPromise)