//  *5. Arrays and its functions 

let marks = [79,83,92,87,false,"absent"]
console.log(marks)
marks[6] = 98
console.log(marks[4])
console.log(marks[6])
console.log("Length is :",marks.length) // shows the length of the array
console.log(typeof marks) // Prints Object


console.log("Using for loop")
for (let i = 0; i<=marks.length; i++) {
console.log(marks[i])   
}

//Array Methods

console.log(marks.toString()) //Prints 79,83,92,87,false,absent,98

console.log(marks.join("_"))  // Prints 79_83_92_87_false_absent_98 

console.log(marks.pop())  //Pops last element in the array, 98

console.log(marks.push(11), marks)  //push returns the new array length

console.log(marks.shift(), marks)  // removes the first element

console.log(marks.unshift(22),marks) // adds element int the beginning of aaray

// compare
let compare = (a,b)=>{   //a-b to print in ascending and b-a to descending
    return a-b
}

let num = [123,4,5,22,3]
let num_more = [6,7,8,9,0]

console.log(num)
//delete num[0] // Deletes 1
console.log(num)
console.log("length is :",num.length) // does not effect array length

let newArray = num.concat(num_more) // ex: a.concat(b,c)
console.log(newArray)

console.log(num.sort(compare)) //modifies original array into alphabetically 

console.log(num.reverse()) 


