const tinderUser = {};

tinderUser.id = '123abc';
tinderUser.name = 'sammy';

tinderUser.isLoggedIn = false;

// console.log(tinderUser);

const user = {
  email: 'sammer@gmail.com',
  userName: {
    fullName: {
      firstName: 'sammer ',
      lastName: 'kad',
    },
  },
};

// console.log(user.userName.fullName);

// How to Combine Object

const obj1 = { 1: 'a', 2: 'b' };
const obj2 = { 3: 'a', 4: 'b' };

//! const obj3 = { obj1, obj2 };  Wrong Way

// output { obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'a', '4': 'b' } }

// * Right Way using spred oprator and Assign method

const obj3 = { ...obj1, ...obj2 }; //* using Spred Oprator
// console.log(obj3);
// Output { '1': 'a', '2': 'b', '3': 'a', '4': 'b' }

const obj4 = Object.assign({}, obj1, obj2); //* using Assign Method
// console.log(obj4);
// Output { '1': 'a', '2': 'b', '3': 'a', '4': 'b' }

console.log(tinderUser);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));
console.log(tinderUser.hasOwnProperty('id'));
