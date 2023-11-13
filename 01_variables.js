const accountID = 12444;

let accountEmail = "sameerkad@gmail.com";
var accountPassword = "12345";
accountCity = "Pune";

//is not allowed to assign or redeclare value for const
// accountID = second;

//variables.js:7  Uncaught ReferenceError: second is not defined
// console.log(accountID);

// yes we can reasign a value for let variables
accountEmail = "sameerkad@gmail.cm";

//No  we can't redeclare Block scoped variables
// let accountEmail = "sameerkad@gmail.com";

// yes we can redeclare Block scoped variables
var accountCity = "mumbai";

console.log(accountEmail);
// console.log(accountID);

// when we use console.table dont forget to used [ ] block brackets
console.table([accountCity, accountEmail, accountID]);
