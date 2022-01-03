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




//Objects

const jonasArray = [
  "Jonas",
  "Doe",
  2027 - 1991,
  "teacher",
  ["Michael", "Peter", "Steven"],
];

const jonasObject = {
  firstName: "Maria",
  lastName: "Chira",
  age: 2027 - 1991,
  job: "teacher",
  friends: ["Michael", "Peter", "Steven"],
};




//Dot vs Bracket Notation
const maria = {
  firstName: "Maria",
  lastName: "Chira",
  age: 2027 - 1991,
  job: "teacher",
  friends: ["Michael", "Peter", "Steven"],
};

console.log(maria);
console.log(maria.lastName);
console.log(maria["lastName"]);

const nameKey = "Name";
console.log(maria["first" + nameKey]);
console.log(maria["last" + nameKey]);

const interestedIn = prompt(
  "What do you want to know about Maria? Choose between firstName, lastName, age, job and friends"
);
console.log(maria[interestedIn]);

if (maria[interestedIn]) {
  console.log(maria[interestedIn]);
} else {
  console.log(
    "Wrong request! Choose between firstName, lastName, age, job and friends"
  );
}

//adding new properties to the object
maria.location = "Birmingham";
maria["twitter"] = "@mariachira";
console.log(maria);

//Challenge
// 'Maria has 3 friends and his best friend is called Michael.'

const myBestFriend = `${maria.firstName} has ${maria.friends.length} friends and his best friend is called ${maria.friends[0]}.`;

console.log(myBestFriend);




//Objects Methods

const maria = {
  firstName: "Maria",
  lastName: "Chira",
  birthYear: 1991,
  job: "teacher",
  friends: ["Michael", "Peter", "Steven"],
  hasDriversLicense: true,

  // calcAge: function (birthYear) {
  //   return 2037 - birthYear;
  // },

  // calcAge: function () {
  //   // console.log(this);
  //   return 2037 - this.birthYear;
  // },

  calcAge: function () {
    this.age = 2037 - this.birthYear;
    return this.age;
  },

  getSummary: function () {
    return `${this.firstName} is a ${this.calcAge()} years old ${
      this.job
    }, and she has ${this.hasDriversLicense ? "a" : "no"} driver's licence`;
  },
};

console.log(maria.calcAge());

console.log(maria.age);
console.log(maria.age);
console.log(maria.age);

//Challenge
//'Jonas is a 46 years old teacher and he has a driver's license.'

console.log(maria.getSummary());




//loops - for

// console.log("Lifting weights repetition 1");
// console.log("Lifting weights repetition 2");
// console.log("Lifting weights repetition 3");
// console.log("Lifting weights repetition 4");
// console.log("Lifting weights repetition 5");
// console.log("Lifting weights repetition 6");
// console.log("Lifting weights repetition 7");
// console.log("Lifting weights repetition 8");
// console.log("Lifting weights repetition 9");
// console.log("Lifting weights repetition 10");

for (let rep = 1; rep <= 10; rep++) {
  console.log(`Lifting weights repetition ${rep}`);
}



//Looping Arrays Breaking And Continuing

const jonas = [
  "Jonas",
  "Doe",
  2027 - 1991,
  "teacher",
  ["Michael", "Peter", "Steven"],
  true,
];

const types = [];
// console.log(jonas[0]);
// console.log(jonas[1]);
// console.log(jonas[2]);
// console.log(jonas[3]);
// console.log(jonas[4]);
//jonas[5] does not exist

for (let i = 0; i < jonas.length; i++) {
  //Reading from jonas array
  console.log(jonas[i], typeof jonas[i]);

  //Filling types array
  //types[i] = typeof jonas[i];
  types.push(typeof jonas[i]);
}

console.log(types);

const birthYears = [1991, 2007, 1969, 2020];
const ages = [];
for (let i = 0; i < birthYears.length; i++) {
  ages.push(2037 - birthYears[i]);
}

console.log(ages);

//continue and break
console.log("----------Only Strings-----------");
for (let i = 0; i < jonas.length; i++) {
  if (typeof jonas[i] != "string") continue;
  console.log(jonas[i], typeof jonas[i]);
}

console.log("----------Break With Number-----------");
for (let i = 0; i < jonas.length; i++) {
  if (typeof jonas[i] === "number") break;
  console.log(jonas[i], typeof jonas[i]);
}



//Looping Backwards and Loops In Loops
const jonas = [
  "Jonas",
  "Doe",
  2027 - 1991,
  "teacher",
  ["Michael", "Peter", "Steven"],
  true,
];

for (let i = jonas.length - 1; i >= 0; i--) {
  console.log(i, jonas[i]);
}

for (let exercise = 1; exercise <= 3; exercise++) {
  console.log(`-----Starting exercise ${exercise}`);
  for (let rep = 1; rep <= 5; rep++) {
    console.log(`Exercise ${exercise}: Lifting weight repetition ${rep}`);
  }
}



//The While Loop
// for (let rep = 1; rep <= 10; rep++) {
//   console.log(`For: Lifting weights repetition ${rep}`);
// }

let rep = 1;

while (rep <= 10) {
  console.log(`While: Lifting weights repetition ${rep}`);
  rep++;
}

let dice = Math.trunc(Math.random() * 6) + 1;

while (dice !== 6) {
  console.log(`You rolled a ${dice}`);
  dice = Math.trunc(Math.random() * 6) + 1;
  if (dice == 6) {
    console.log("Loop is about to end...");
  }
}

*/
