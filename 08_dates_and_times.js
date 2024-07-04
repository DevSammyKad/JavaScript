// Dates;

const myDate = new Date();

console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleDateString());
console.log(myDate.toLocaleString());

console.log(typeof myDate);

let myCreateDate = new Date();

console.log(myCreateDate.getDate());

let myTimeStamp = Date.now() / 1000;
console.log(Math.floor(Date.now() / 1000));
console.log(myTimeStamp.toFixed(0));

// * New method

let newDate = new Date();
console.log(newDate.getTime());

// ! i dont understand this methods

newDate.toLocaleString('default', {
  weekday: 'short',
});
