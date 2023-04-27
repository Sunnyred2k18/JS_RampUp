// *4 REGULAR EXPRESSIONS

let regex = /test/
regex = /test/g       //g means global - will search everywhere 
//regex = /test /i       //i means case-insensitive

//console.log(regex)
//console.log(regex.source)

// Functions to match Regular Expressions
let str = "This is to test the regular exp test";
let result = regex.exec(str)  //  exec() will return an array for match and null for no match
// result = regex.exec(str)
// console.log("The result from exec is :",result) // this is used for global
//console.log(result)
//console.log(result.input)
//console.log(result.index)

// Using test() which returns true or false upon a match in the given string
let result2 = regex.test(str);
//console.log(result2)

// Using match() which returns an array of results or null
let result3 = str.match(regex)
//console.log(result3)

//Using search() which returns the index of first match else -1
let result4 = str.search(regex)
//console.log(result4)

//Using replace() which returns the new string with replacements
let result5 = str.replace(regex, 'DEMO')
//console.log(result5)





// <<<*** Check for metacharacter symbols ***>>>

let reg = /check/g
reg = /^T/            //^ means the exp will match if string starts with T
reg = /ck$/           //$ at the end means the exp ends with k
reg = /che.k/         // . matches exactly any one character
reg = /ch*ck/         // * matches with 0 or more characters

let s = "This is to check the check";
let sol = reg.exec(s)
console.log("The result from exec is :",sol)

if (reg.test(s)){
    console.log(`The string : ${s} matches the expression : ${reg}`)  
}
else{
    console.log(`The string : ${s} does not match the expression : ${reg}`)  
}

