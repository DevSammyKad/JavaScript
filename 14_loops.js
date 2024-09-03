//* Loops are used to execute a block of code repeatedly for a specified number of times. JavaScript supports several types of loops, including:

//! 1. For Loop

// A for loop is used to execute a block of code for a specified number of times.

// Example
for (let i = 0; i < 5; i++) {
  console.log(i);
}

// //! 2. While Loop

// // A while loop is used to execute a block of code as long as a specified condition is true.

// // Syntax
// while (condition) {
//   // code to be executed
// }

// // Example
// let i = 0;
// while (i < 5) {
//   console.log(i);
//   i++;
// }
// ```;

// //! 3. Do-While Loop

// // A do-while loop is similar to a while loop, but the code inside the loop is executed at least once before the condition is checked.

// // Syntax
// do {
//   // code to be executed
// } while (condition);

// // Example
// let i = 0;
// do {
//   console.log(i);
//   i++;
// } while (i < 5);
// ```

// //! 4. For-In Loop

// // A for-in loop is used to iterate over the properties of an object.

// // Syntax
// for (variable in object) {
//   // code to be executed
// }

// // Example
// let person = { name: 'John', age: 30, city: 'New York' };
// for (let key in person) {
//   console.log(key + ': ' + person[key]);
// }
// ```;

// //! 5. For-Of Loop

// // A for-of loop is used to iterate over the values of an array or an iterable object.

// // Syntax
// for (variable of iterable) {
//   // code to be executed
// }

// // Example
// let fruits = ['apple', 'banana', 'orange'];
// for (let fruit of fruits) {
//   console.log(fruit);
// }
// ```

// //! 6. For-Each Loop

// // A for-each loop is used to execute a block of code for each element in an array.

// // Syntax
// array.forEach(function(currentValue, index, array) {
//   // code to be executed
// });

// // Example
// let numbers = [1, 2, 3, 4, 5];
// numbers.forEach(function(number) {
//   console.log(number);
// });
// ```;

// //! 7. Map Loop

// // A map loop is used to create a new array with the results of applying a provided function on every element in the original array.

// // Syntax
// let newArray = array.map(function (currentValue, index, array) {
//   // code to be executed
// });

// // Example
// let numbers = [1, 2, 3, 4, 5];
// let doubleNumbers = numbers.map(function (number) {
//   return number * 2;
// });
// console.log(doubleNumbers);
// ```

// //! 8. Filter Loop

// // A filter loop is used to create a new array with all elements that pass the test implemented by the provided function.

// // Syntax
// let newArray = array.filter(function(currentValue, index, array) {
//   // code to be executed
// });

// // Example
// let numbers = [1, 2, 3, 4, 5];
// let evenNumbers = numbers.filter(function(number) {
//   return number % 2 === 0;
// });
// console.log(evenNumbers);
// ```;

// //! 9. Reduce Loop

// // A reduce loop is used to apply a function to each element in the array to reduce it to a single value.

// // Syntax
// let result = array.reduce(function (accumulator, currentValue, index, array) {
//   // code to be executed
// });

// Example
// let numbers = [1, 2, 3, 4, 5];
// let sum = numbers.reduce(function (total, number) {
//   return total + number;
// }, 0);
// console.log(sum);

// for (let count = 1; count <= 5; count++) {
//   console.log('Sameer is not here');
// }
// console.log('Sameer is here');

// for (let count = 1; count <= 5; count++){

// }
// let sum = 0;
// let n = 10;
// for (let i = 2; i <= n; i++) {
//   sum = sum + i;

//   console.log(sum);
//   // console.log(i);
// }

// let sum = 0;
// let n = 5;

// for (let i = 0; i <= n; i++) {
//   sum = sum + i;
//   console.log(sum);
// }

//* Write a JavaScript program that uses a for loop to print all the even numbers from 2 to 20.

// for (let i = 2; i <= 20; i = i++) {
//   console.log(i);
// }

// function sumOfEvenNumbers(limit) {
//   let sum = 0;
//   for (let num = 2; num <= limit; num += 2) {
//     sum += num;
//   }
//   return sum;
// }

// Example usage
// const evenSum = sumOfEvenNumbers(0);
// console.log('Sum of even numbers from 2 to 20:', evenSum);

// if (true) {
//   const name = 'sammy';
//   const website = 'www.samm.com';
//   if (name === 'sammy') {
//     console.log(name + ' ' + website);
//   }
// }
// console.log(website);

// function addOne(num) {
//   return num + 1;
// }

// console.log(addOne(1));

// const addTwo = function (num) {
//   return num + 2;
// };

// console.log(addTwo(41));
// console.log(addTwo(2));
