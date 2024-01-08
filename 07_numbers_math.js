const number = new Number(88.6);

console.log(number);

const anotherNumber = 1320.69;

console.log(anotherNumber.toFixed(5));
console.log(anotherNumber.toPrecision(5));

// toLocaleString

const otherNumber = 25;

const formatNumber = otherNumber.toLocaleString();

console.log(formatNumber);

// ====================    MATHS   ================================
console.log('Maths');

console.log(Math);

console.log(Math.round(4.1));

console.log(Math.ceil(4.1));
console.log(Math.floor(4.5));

// random

console.log(Math.random() * 10 + 1);
console.log(Math.floor(Math.random() * 10 + 1));

const min = 1;
const max = 9;

console.log(Math.floor(Math.random() * (max - min + 1)) + min);

const sqr = Math.sqrt(otherNumber);

console.log(sqr);
