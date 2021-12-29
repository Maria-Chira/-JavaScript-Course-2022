/*
//activating strict mode
"use strict";

let hasDriversLicense = false;
let passTest = true;

if (passTest) hasDriverLicense = true; //wrong spelling
if (hasDriversLicense) console.log("I can drive.");

const interface = "Audio"; //reserved word
const private = 534; //reserved word


/////////////////////////functions

function logger() {
  console.log("My name is Maria.");
}

//calling/ running / invoking the function
logger();
logger();
logger();

function fruitProcessor(apples, oranges) {
  console.log(apples, oranges);
  const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
  return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);
console.log(fruitProcessor(5, 0));

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);

const num = Number("23");
console.log(num);




/////Function Declaration
const age1 = calcAge1(1992); //we can call the function before initialization;

function calcAge1(birthYear) {
  // const age = 2037 - birthYear;
  // return age;
  return 2037 - birthYear;
}

/////Function Expression
const calcAge2 = function (birthYear) {
  return 2037 - birthYear;
};
const age2 = calcAge2(1992); // we can't call the function before initialization;

console.log(age1, age2);




/////////////Arrow function

const calcAge3 = (birthYear) => 2037 - birthYear;
const age3 = calcAge3(1992);
console.log(age3);

const yearsUntilRetirement = (birthYear, firstName) => {
  const age = 2037 - birthYear;
  const retirement = 65 - age;
  return `${firstName} retires in ${retirement} years.`;
};

console.log(yearsUntilRetirement(1992, "Maria"));
console.log(yearsUntilRetirement(1980, "Bob"));




//////Functions Calling Others Functions

function cutFruitPieces(fruit) {
  return fruit * 4;
}

function fruitProcessor(apples, oranges) {
  const applePieces = cutFruitPieces(apples);
  const orangePieces = cutFruitPieces(oranges);
  console.log(apples, oranges);
  const juice = `Juice with ${applePieces} pieces of apples and ${orangePieces} pieces of oranges.`;
  return juice;
}
console.log(fruitProcessor(2, 3));



////Review Functions
const calcAge = function (birthYear) {
  return 2037 - birthYear;
};

const yearsUntilRetirement = function (birthYear, firstName) {
  const age = calcAge(birthYear);
  const retirement = 65 - age;

  if (retirement > 0) {
    console.log(`${firstName} retires in ${retirement} years.`);
    return retirement;
  } else {
    console.log(`${firstName} has already retired.`);
    return -1;
  }
};

console.log(yearsUntilRetirement(1992, "Maria"));
console.log(yearsUntilRetirement(1950, "Mike"));




///////////////////////////////////////Arrays
const friend1 = "Denis";
const friend2 = "Maria";
const friend3 = "Andrei";

const friends = ["Denis", "Maria", "Andrei"]; //literal syntax
console.log(friends);

const y = new Array(1991, 1994, 2008, 2020);

//Accessing elements
console.log(friends[0]);
console.log(friends[2]);

console.log(friends.length);
console.log(friends[friends.length - 1]);

//Mutating the array even if we declared the array using the keyword const
friends[2] = "Pete";
console.log(friends);

//friends = ["Bob", "Alice"]; // but we can't completely replace the entire array.

const firstName = "Maria";
const maria = [firstName, "Chira", 2037 - 1992, "teacher", friends];
console.log(maria);

//Exercise
const calcAge = function (birthYear) {
  return 2037 - birthYear;
};
const years = [1990, 1967, 2002, 2010, 2018];

const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length - 1]);
console.log(age1, age2, age3);

const age = [
  calcAge(years[0]),
  calcAge(years[1]),
  calcAge(years[years.length - 1]),
];
console.log(age);




//////////////Array Methods

//push()
const friends = ["Denis", "Maria", "Andrei"];
const newLength = friends.push("Pete"); //add an element at the end of the array => returns a value, the length of the new array
console.log(friends);
console.log(newLength);

//unshift() => add elements at the beginning of the array => returns a value, the length of the new array
friends.unshift("John");
console.log(friends);

//pop() => remove the last element from the array => returns a value, the removed element
friends.pop();
const popped = friends.pop();
console.log(popped);
console.log(friends);

// shift()=> removes the first element from the array => returns a value, the removed element
friends.shift();
console.log(friends);

//indexOf
console.log(friends.indexOf("Maria"));
console.log(friends.indexOf("Bob")); //an element that doesn't exist will return index -1

//.includes
friends.push(23);
console.log(friends.includes("Maria")); //returns true if the arrays includes the value
console.log(friends.includes("Bob")); //otherwise false
friends.includes(23); //true
friends.includes("23"); //false => does not do type coercion

if (friends.includes("Maria")) {
  console.log("You have a friend called Maria");
}


*/
