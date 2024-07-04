// function AddTwoNumber(number1, number2) {
//   // Parameeters
//   console.log(number1 + number2);
// }

// AddTwoNumber(3, 12); // => Agruments

function addTwoNumber(number1, number2) {
  let result = number1 + number2;
  return result;
}

const result = addTwoNumber(3, 2);

console.log('result :', result);

//  Advance Functions

function loginUserMessage(username = 'sam') {
  if (!username) {
    console.log('Please enter your username');
    result;
  }
  return `${username} just Logged in`;
}

console.log(loginUserMessage('ram'));

// Calculation value of Card

function calculateCartValue(...num1) {
  let sum = 0;
  for (i = 0; i < num1.length; i++) {
    sum += num1[i];
  }
  return sum;
}

console.log(calculateCartValue(299, 1, 39923, 222));

function calculateSum(...value) {
  let sum = 0;
  for (let i = 0; i < value.length; i++) {
    sum += value[i];
  }
  return sum;
}

console.log('TOTAL value ', calculateSum(2, 1, 3, 2));

const user = {
  username: 'sammy',
  price: 2001,
};

function handleObject(anyObject) {
  console.log(
    `user name is ${anyObject.username} and price is  ${anyObject.price}`
  );
}

handleObject(user);

console.log('Practice session start');

// * Easy - Calculate Area and Perimeter:
// Write two functions:

// calculateArea(length, width) that takes length and width as parameters and returns the area of a rectangle.
// calculatePerimeter(length, width) that takes length and width as parameters and returns the perimeter of a rectangle.
// Call both functions with sample values and print the results to the console.

function calculateArea(length, width) {
  return length * width;
}
console.log(calculateArea(20, 20));

function calculatePerimeter(length, width) {
  return 2 * (length * width);
}
console.log(calculatePerimeter(20, 20));

console.log(
  'Area is',
  calculateArea(20, 20),
  'Perimeter is',
  calculatePerimeter(20, 20)
);

//* Medium - Find the Largest Number:

// Write a function findLargest(num1, num2, num3) that takes three numbers as parameters and returns the largest number.
// Test your function with different sets of numbers and print the largest number to the console.

function findLargest(num1, num2, num3) {
  let largest = num1;
  if (num1 < num2) {
    largest = num2;
  }
  if (num2 < num3) {
    largest = num3;
  }
  return largest;
}

let test = findLargest(2222, 223, 32);

console.log('The largest number is: ' + test);
let test2 = findLargest(10, 50, 20);
console.log('The largest number is: ' + test2);

let test3 = findLargest(-5, 10, -2);

console.log('The largest number is: ' + test3);

function calculateLength(Word) {
  return Word.length;
}
console.log(calculateLength('22223434'));

function calculateSmallest(number1, number2, number3, number4) {
  let smallest = number1;
  if (number1 > number2) smallest = number2;
  if (number2 > number3) smallest = number3;
  if (number3 > number4) smallest = number4;
  return smallest;
}
console.log(calculateSmallest(134, 1223, 21, '20'));

function calSmallest(...numbers) {
  let small = numbers.length;
  console.log('small number', small);
}
console.log('________________QUESTIONS_______________________');

// Write a function calculateDiscountedPrice that takes the price of an item and a discount percentage as parameters. Calculate and return the discounted price.

const calculateDiscountedPrice = (price, discountPercentage) => {
  let discountedPrice = price - (price * discountPercentage) / 100;

  return discountedPrice.toFixed(2);
};

console.log(calculateDiscountedPrice(22, 10));

// Write a function called applyTax that takes the price of an item and a tax rate as parameters. Calculate and return the final price after applying the tax.

// Once you've written the function, test it with a price of $100 and a tax rate of 8%. Your function should return the final price after applying the tax.

const applyTax = (item, taxRate) => {
  let finalPrice = item + (item * taxRate) / 100;
  return finalPrice;
};
console.log(applyTax(100, 8));

//Write a function called calculateTotalCost that takes the price of an item, a discount percentage, and a tax rate as parameters. Calculate and return the total cost after applying both the discount and the tax.

const calculateTotalCost = (itemPrice, discountPercentage, taxRate) => {
  let priceAfterDiscount = itemPrice - (itemPrice * discountPercentage) / 100;
  let totalCost = priceAfterDiscount + (priceAfterDiscount * taxRate) / 100;

  return totalCost;
};

function calculateDiscountPercentageFraction(originalPrice, discountedPrice) {
  let discount = originalPrice - discountedPrice;
  let discountFraction = discount / originalPrice;
  let discountPercentage = discountFraction * 100;
  return discountFraction;
}

console.log(
  calculateDiscountPercentageFraction(100, 10),
  ' calculateDiscountPercentageFraction'
);
// Create a function convertTemperature that converts temperatures between Celsius and Fahrenheit. It should take a temperature value and a scale ('C' for Celsius, 'F' for Fahrenheit) as parameters and return the converted temperature.
// Implement a function checkPalindrome that checks if a given string is a palindrome. Return true if it is, and false otherwise.
// Write a function calculateFactorial that calculates the factorial of a given number and returns the result.
// Create a function checkPrimeNumber that checks if a given number is a prime number. Return true if it is, and false otherwise.
// const createHelloWorld = () => {
//   let word = console.log('Hello World');
//   return word;
// };
