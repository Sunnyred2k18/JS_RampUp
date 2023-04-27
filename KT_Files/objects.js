class railwayForm{
    submit(){
        console.log(this.name +": Form submitted for train no :" +this.trainno)
    }
    cancel(){
        console.log(this.name +": Form cancelled for train no :" +this.trainno)
    }
    fill(givenName, trainNo){
        this.name = givenName
        this.trainno = trainNo
    }
}

let person1 = new railwayForm
person1.fill("Arjun",111444)
let person2 = new railwayForm
person2.fill("Reddy",222333)

person1.submit()
person2.submit()
person1.cancel()


// Object.values() converts an object to an array
const person = {
    name: "John",
    age: 30,
    cityName: "New York",
    //today: new Date()
    get city(){             
        return this.cityName;    //JavaScript Getter (The get Keyword)
    }
  };
  let z = Object.values(person);
  console.log(z)
  //Any JavaScript object can be converted to a string
  //with the JavaScript function JSON.stringify():
  let myString = JSON.stringify(person);
  console.log(myString)
  console.log(person.city)


  // JavaScript Setter (The set Keyword)
  const xPerson = {
    firstName: "John",
    lastName: "Doe",
    language: "",
    set lang(lang) {
      this.language = lang;
    }
  };
  
  // Set an object property using a setter:
  xPerson.lang = "english";
  console.log(xPerson.language)
  
//----------------------------------------------------------------------------

  // Constructor function for Person objects
function constrPerson(first, last, age, eye) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eye;
    this.nationality = "English"; //Adding property to constroctor function
  }
  // Create a Person object
const myFather = new constrPerson("John", "Doe", 50, "blue");
const myMother = new constrPerson("Sally", "Rally", 48, "green");

// Add nationality to first object
//myFather.nationality = "English";

console.log("My father is " + myFather.age + "."+ "and nationality is:"+ myFather.nationality + 
". My mother is " + myMother.age + ".")

//--------------------------------------------------------------------------------


//*** Object Iterables ***
myNumbers = {}; // Create an Object
myNumbers[Symbol.iterator] = function() {  // Make it Iterable
  let n = 0;
  done = false;
  return {
    next() {
      n += 10;
      if (n == 100) {done = true}
      return {value:n, done:done};
    }
  };
}

let text1 = ""
for (const num of myNumbers) {
  text1 += num + "\n"
}
console.log(text1)

//-----------------------------------------------------------------------
// Create a Set
const letters = new Set(["a","b","c"]);

// List all entries
const iterator = letters.entries();  //entries will create a (value,value) instead of                                  
let text2 = "";                      //(key,value) pairs
for (const entry of iterator) {
  text2 += entry + "\n";
}
console.log(text2)


//-----------------------------------------------------------------------------
//JavaScript Maps :
// A Map holds key-value pairs where the keys can be any datatype.
// A Map remembers the original insertion order of the keys.
// A Map has a property that represents the size of the map.

// Create a Map
const fruits = new Map([
    ["apples", 500],
    ["bananas", 300],
    ["oranges", 200]
  ]);
  fruits.set("bananas", 450);
  console.log(fruits.get("apples"))
  console.log(fruits.delete("oranges"))
  console.log(fruits.size)
  console.log(fruits.has("apples"))


  //Being able to use objects as keys is an important Map feature.
  // Create Objects
const apples = {name: 'Apples'};
const bananas = {name: 'Bananas'};
const oranges = {name: 'Oranges'};

// Create a Map
const fruits1 = new Map();

// Add the Objects to the Map
fruits1.set(apples, 555);
fruits1.set(bananas, 333);
fruits1.set(oranges, 222);