// Write a function isOddOrEven(number) that takes a number as input and returns "Odd" if the number is odd and "Even" if the number is even.

function isOddOrEven(num) {
  if (num % 2 === 0) {
    console.log(`Given number is Even : ${num}`);
  } else {
    console.log(`Given number is odd : ${num}`);
  }
}

isOddOrEven(22);

// Create a function canVote(age) that checks if a person is eligible to vote (must be 18 or older). If eligible, return "You can vote", otherwise return "You are not eligible to vote".

function canVote(age) {
  if (age >= 18) {
    return console.log('you can Vote');
  } else {
    return console.log('You are not eligible to vote');
  }
}

canVote(18);

// Write a function checkTemperature(temp) that accepts a temperature and returns "It's cold" if the temperature is less than 15, "It's warm" if it’s between 15 and 25, and "It's hot" if it’s above 25.

function checkTemperature(temp) {
  if (temp < 15) {
    console.log('its Cold ');
  } else if (temp >= 15 && temp <= 25) {
    console.log("It's warm");
  } else {
    console.log('its hot');
  }
}
checkTemperature(252);

// Create a simple login system where the function login(username, password) checks if the username is "admin" and the password is "1234". If both are correct, return "Login successful", otherwise return "Invalid credentials".

// Write a function calculateGrade(score) that takes a student's score (0-100) and returns their letter grade based on the following:

function calculateGrade(score) {
  if (score >= 90) {
    console.log('Grade A');
  } else if (score >= 80) {
    console.log('Grade B');
  } else if (score >= 70) {
    console.log('Grade c');
  } else if (score >= 60) {
    console.log('Grade D');
  } else {
    console.log('Grade F');
  }
}

calculateGrade(69);
// Implement a function calculateDiscount(price, isMember) that applies a 10% discount to a product if the user is a member (isMember === true). Otherwise, no discount should be applied. Return the final price after the discount (if any).

function calculateDiscount(price, isMember) {
  if (isMember === true) {
    let discountedPrice = price;
    const discountedPercentage = (price * 10) / 100;
    discountedPrice = price - discountedPercentage;
    return console.log('Customer is Member so price is ', discountedPrice);
  } else {
    console.log('Customer is not Member Price is ', price);
  }
}

// Short Hand
calculateDiscount(100, true);
function calculateDiscount(price, isMember) {
  const finalPrice = isMember ? price * 0.9 : price;
  console.log(`Final price is: ${finalPrice}`);
}

calculateDiscount(100, true); // Test for a member

// Create a function checkPasswordStrength(password) that checks if the password length is at least 8 characters. If the length is 8 or more, return "Strong password", otherwise return "Weak password".

function checkPasswordStrength(password) {
  return password.length >= 8 ? 'Password is strong' : 'Password is Weak';
}
console.log(checkPasswordStrength('3932923093283212'));

// Write a function checkNumberSign(num) that takes a number and returns "Positive" if the number is greater than zero, "Negative" if less than zero, and "Zero" if it's exactly zero.
function checkNumberSign(num) {
  if (num > 0) {
    return 'Positive';
  } else if (num < 0) {
    return 'Negative';
  } else return 'Num is 0 or -0';
}

console.log(checkNumberSign(0));

// Write a function greetBasedOnTime(hour) that takes an hour (in 24-hour format) and returns a greeting:

function greetBaseOnTime(hour) {
  if (hour >= 5 && hour < 12) {
    console.log('Good morning');
  } else if (hour >= 12 && hour < 18) {
    console.log('Good Afternoon');
  } else if (hour >= 18 && hour < 21) {
    console.log('Good Evening');
  } else {
    console.log('Good Night');
  }
}

greetBaseOnTime(250);
