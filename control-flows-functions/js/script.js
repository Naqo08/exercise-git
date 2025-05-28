/* let number1, number2;
number1 = Number(prompt("Enter a number: "));
number2 = Number(prompt("Enter a second number: "));

if (number1 > number2) {
  console.log(`${number1} is bigger than ${number2}`);
} else {
  console.log(`${number2} is bigger than ${number2}`);
} */

/* let number1, number2;
number1 = Number(prompt("Enter a number: "));
number2 = Number(prompt("Enter a second number: "));

if (number1 > number2) {
  console.log(`${number1} is bigger than ${number2}`);
} else if (number1 === number2) {
  console.log(`${number2} is equal to ${number1}`);
} else {
  console.log(`${number2} is bigger than ${number1}`);
} */


/* let day = Number(prompt("Enter a day (1-7): "));

switch (day) {
  case 1: 
    console.log("Monday");
    break;
  
  case 2: 
    console.log("Tuesday");
    break;
  
  case 3: 
    console.log("Wednesday");
    break;
  
  case 4: 
    console.log("Thursday");
    break;
  
  case 5:
    console.log("Friday");
    break;
  
  case 6:
  case 7:
    console.log("It's the weekend!");
    break;
  
  default:
    console.log("Invalid day");
    break;
} */


/* let myArray = [4, 5, 6, 10, 12];
let total = 0;

for (let i = 0; i < myArray.length; i++) {
  total += myArray[i]
}

console.log(total); */

/* let number = 0;
let total = 0;

while (number < 8) {
  number = Math.floor((Math.random() * 10 + 1));
  console.log(number);
  total += number;
}

console.log(number); */

/* let number;
let total = 0;

do {
  number = Math.floor((Math.random() * 10 ) + 1);
  console.log(number);
  total += number;
}
while (number < 8);

console.log(`The sum of number is ${total}`); */


/* let number1 = 0.5;
let number2 = 0.2 + 0.3;

const variable1 = 5? 'truthy' : 'falsy';
console.log(variable1);

const age = 21;
const decision = age >= 15 ? "Can drive" : "Cannot drive";

console.log(decision); */


/* let number1 = 3;
let number2 = 5;

console.log(number1 === number2);
console.log(number1 !== number2);
console.log(number1 > number2);
console.log(number1 <= number2); */

/* let num = 3;

if (num > 0 && num < 10) {
  console.log('Number is above zero but below 10.');
} else {
  console.log("Number doesn't match with any target value.");
}


if (num === 3 || num === 7) {
  console.log("Number is either 3 or 7.");
} else {
  console.log("Number doesn't match with any target value.");
} */


/* function printName(myName) {
  console.log(`My name is ${myName}`);
}

printName("Din"); */

/* function addition(num1, num2) {
  let result = num1 + num2;
  return result;
}

let additionResult = addition(10, 8);
console.log(`The addition result is: ${additionResult}`); */

// Anonymous Function
/* let addition = function(num1, num2) {
  return num1 + num2;
} 

console.log(addition(5, 4)); */


// Arrow Function

/* let greet = () => {
  return "Good Morning";
}

let message = greet();
console.log(message);


let subtraction = (num1, num2) => {
  return num1 - num2; 
}

console.log(subtraction(10, 6)); */

/* let num = 12;
let checkEven = (num % 2 === 0) ? 
  () => console.log("Even"):
  () => console.log("Odd");

checkEven() */
  
/* const checkEvenOdd = (num) => {
  if (num % 2 === 0) {
    return 'Even';
  } else {
    return 'Odd';
  } 
} 

console.log(checkEvenOdd(11)); */


/* let isLegal = (age) => {
  if (age >= 18) {
    return 'can drive';    
  } else {
    return 'cannot drive';
  }
}

checkDriving = isLegal(18);
console.log(checkDriving); */

// Coding Exercise 1.3

let membersProfile = [
  {
    firstName: 'Diego',
    lastName: 'Maradona',
    hobbies: ['cooking', 'football'],
    food: ['nasi ayam', 'nasi lemak'],
    pets: 'cat'
  },
  {
    firstName: 'Petr',
    lastName: 'Cech',
    hobbies: ['eating', 'football', 'hockey'],
    food: ['soto', 'ikan', 'roti canai'],
    pets: ['cat', 'frog']
  },
  {
    firstName: 'Roger',
    lastName: 'Federer',
    hobbies: ['pickleball', 'badminton'],
    food: ['sate', 'roti telur'],
    pets: ['fish', 'parrot']
  }
]



// Coding Exercise

// 1
function getFullNames(members) {
  const fullNames = [];
  for (member in members) {
    const fullName = `${member.firstName} ${members.lastName}`;
    fullNames.push(fullName);
  }
  return fullNames;
}

const allFullNames = getFullNames(membersProfile);
console.log(allFullNames);

// 2

/* function countVowels(str) {
  const vowelList = 'aeiou';
  let count = 0;
  let lowerCaseStr = str.toLowerCase();
  for (let i = 0; i < lowerCaseStr.length; i++) {
    if (vowelList.includes(lowerCaseStr[i])) {
      count++;
    } 
  }
  return count;
}

console.log(countVowels('naqiuddin'));
console.log(countVowels('tom cruise')); */






