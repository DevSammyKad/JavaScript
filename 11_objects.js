// SingleTon   ==> const tinderUser = new Object();

// Non Single Tone object ==>  const user = {}

// Object literals

// 2 Ways to access key Property

// * . Method
// * Bracket Notation

const symb = Symbol('key1');

const jsUser = {
  name: 'Sameer',
  age: '21',
  [symb]: 'key2',
  location: 'pune',
  surname: 'kad',
  'full name': 'sammer kad',
};

// console.log(jsUser); // We Can access this value using . method

// console.log(jsUser.full name); // but we cant string access string Key

// Thats why we requierd Bracket Notation
console.log(jsUser['full name']);

// console.log(typeof jsUser.symb);

// How To Frezz object

Object.freeze(jsUser);

if (Object.isFrozen(jsUser)) {
  console.log('Oject is freezz');
} else {
  console.log('objet is not frezz');
}

jsUser.age = '12';

console.log(jsUser);
