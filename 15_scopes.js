let a = 20;
const b = 30;
var c = 40;
// var c = 's';

if (true) {
  let a = 10;
  const b = 20;

  console.log('INNER :', a);
}
// var c = 'ss';

// * Closures Example
console.log(a);
function fourth() {
  const userName2 = 'sammy2';
  console.log(userName2);

  function one() {
    const userName = 'sammy';
    function two() {
      const website = 'www.sammy.com';
      console.log(userName, website);
    }
    console.log(userName2);
    two();
  }

  one();
}
fourth();

if (true) {
  const userName = 'hitesh';
  if (userName === 'hitesh') {
    const website = ' youtube';
    console.log(website + userName);
    console.log(website);
  }
  console.log(userName);
}
// console.log(userName);

console.log('******************  INTERESTING  ************************');
