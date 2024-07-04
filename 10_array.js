const marvelHeros = ['Thor', 'IronMan', 'Hulk', 'Loki'];

const dcHeros = ['flash', 'superman', 'batman'];

// console.log(marvelHeros.unshift('Shaktiman'));
// console.log(marvelHeros.unshift('Shaktiman', 'vision'));

// const allHeros = marvelHeros.concat(dcHeros);

const allHeros = [...marvelHeros, ...dcHeros]; // Using Spread Oprator

// console.log(marvelHeros);
console.log(allHeros);

// Learn Concat

const myArray = [1, 2, 3, 4, [2, 4, 5, [1, 2, 3], 16, 12]];

const anotherArray = myArray.flat(Infinity);

console.log(myArray.length);
console.log(anotherArray.length);

console.log(Array.isArray('sammyer'));
console.log(Array.from('sammyer'));
