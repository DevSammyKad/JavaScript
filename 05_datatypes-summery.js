// There are to types of dataTypes Primitive and Referance type (non primitive )
// In JavaScript, a primitive (primitive value, primitive data type) is data that is not an object and has no methods or properties. 

// There are 7 primitive data types:

// string
// number
// bigint
// boolean
// undefined
// symbol
// null

const id = 33
const anotherId = "33"

console.log(id === anotherId); // = false
console.log(anotherId);

// There are 3 Reference (Non primitive data types) :

// Object 
// Array
// Function

// Array
const heros = ["badman","superman","spiderman"] ;

console.log(heros);

// Object

const user = {
    name: "sameer",
    surName:"kad",
    age: 22
}
console.log(user);

// Function

const myFunction = function(){
    ssz
}
console.log( typeof myFunction);


// ##################     Stack (Primitive), Heap (Non-primitive)     ################

// Stack (Primitive)
let valueOne = "sameer"
let sameer = "kad" 

console.log(valueOne);
console.log(sameer);

// Stack memory send Copy to browser

// ##########  Heap, Referance (Non-Primitive)  ################

let userOne = {
    emailId:"sameerkad@gmail.com",
    name: "sameer"
};

let userTwo = {
    emialId:"udhay@gmail.com",
    name:"udhay"
}
let userThree  = userTwo

userTwo.emailId = "udhay2@gmail.com"
console.log(userThree)

// Heap send referance to browser
