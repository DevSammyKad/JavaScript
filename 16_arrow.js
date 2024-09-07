const user = {
  name: 'sam',
  age: 30,
  job: 'Developer',
  lastName: 'kad',
  welcomeMessage: function () {
    console.log(
      `Hello, my name is ${this.name} and I'm ${user.age} years old`,
      console.log(`I'm a ${this.developer}`), // why this showing undefined?
      console.log(`my last name is ${this.lastName}`)
    );
    console.log(`I'm a ${this.name}`);
    console.log('INNER This :', this);
  },
};

user.welcomeMessage();

// What is the sequence of execution of the above code?

// I'm a undefined
// my last name is kad
// Hello, my name is sam and I'm 30 years old undefined undefined
// I'm a sam

console.log('Outer THis :', this);

console.log('*****************    Arrow Functions    ****************** ');

// Arrow Function
() => {};

const arrowFunction = () => {
  console.log('Arrow Function');
};

const normalFunction = function () {
  console.log('Normal Function :', ' function (parameter1, parameter2) {}');
};

normalFunction();
