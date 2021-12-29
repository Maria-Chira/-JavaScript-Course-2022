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


*/
