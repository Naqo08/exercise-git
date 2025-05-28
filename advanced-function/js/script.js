/* let counter = 0;

function add() {
  counter += 1;
}

add();
add();
add();

console.log(`The global counter is: ${counter}`); */

/* function myCounter() {
  let counter = 0;
  return function () {
    counter++ 
    return counter;
  };
}

const add = myCounter();

// Private variable memory
console.log(`The global counter is ${add()}`);
console.log(`The global counter is ${add()}`);
console.log(`The global counter is ${add()}`);

// Trying to access private memory
console.log(`Assessing counter ${counter}`); */


// Higher Order Function

/* function callbackFunction() {
  console.log("I am a callback function");
}

function higherOrderFunction(func) {
  console.log("I am a higher order function");
}

higherOrderFunction(callbackFunction()); */


// HOF Example 1

const radiusList = [1, 2, 3];

const calcArea = function(radius) {
  return Math.PI * radius ** 2;
}

const calcDiameter = function(radius) {
  return radius * 2;
}

const calculate = function(radius, logic) {
  const output = [];
  for (let i = 0; i < radius.length; i++) {
    output.push(logic(radius[i]));
  }
}

console.log(calculate(radiusList, calcArea))
console.log(calculate(radiusList, calcDiameter));


// Recursive
/* let counter = 10;

function reduceToZero(n) {
  if (n === 0) {
    console.log("It's time.");
    return
  } 
  console.log(`Current value is: ${n}`);

  reduceToZero(n - 1);
}

reduceToZero(counter); */


// For loop 

/* for (let counter = 10; counter > 0; counter--) {
  if (counter === 3) {
    break;
  }
  console.log(`Current value ${counter}`);
} */


/* const fruits = ["Banana", "Orange", "Apple", "Mango"]
console.log(fruits);
fruits.splice(2, 1, "Lemon", "Kiwin");
console.log(fruits); */
// `fruits.splice(2, 2);
// console.log(fruits);
// fruits.splice(0, 0, "Durian", "Grape");
// console.log(fruits);`


const multiply = (a, b) => {
  return a * b;
}

let result1 = multiply(10, 2);
console.log(result1);


const divide = (a) => {
  return (b) => {
    return a / b;
  }
}

console.log(divide(20)(5));