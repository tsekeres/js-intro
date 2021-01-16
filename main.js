console.log("Tad Sekeres");

// function sayHello() {
  // console.log("Hello");
// }

//  **********this above is the only method that will work out of cascading order

// const sayHello = function() {
//   console.log("Hello");
// }

// const sayHello = () => {
//   console.log("Hello");
// }

// sayHello();

// **************function with arguments

// function logsHello(name) {
//   console.log(`Hello, ${name}!`);
// }

// logsHello('Tad');


const sum = 55

const addTwoNumbers = (num1, num2) => {
  const sum = num1 + num2;
  console.log(sum);
  return sum;
}

console.log(sum);
console.log(addTwoNumbers(5, 7));
console.log(sum);

// this calls and returns in this order: 
// line 36 returns 55 (from line 28)
// line 37 returns 12 (from line 32)
// line 37 returns 12 (from line 33)
// line 38 returns 55 (from line 28 again)
