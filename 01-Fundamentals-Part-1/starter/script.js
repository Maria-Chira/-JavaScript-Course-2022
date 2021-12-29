/*
let js = "amazing";
console.log(40 + 8 + 23 - 10);

console.log("Jonas");
console.log(23);

let firstName = "Matilda";

console.log(firstName);
console.log(firstName);
console.log(firstName);


//////////////////////////////
//Variable name convention
let jonas_matilda = "JM";
let $function = 27;

let person = "Jonas";
let PI = 3.1415; //constant Upper Case

//Descriptive names
let myFirstJob = "Programmer";
let myCurrentJob = "Teacher";

//It is not recommended
let job1 = "programmer";
let job2 = "teacher"; 




///////////////////////////////////
//Data Types
let javaScriptIsFun = true;
console.log(javaScriptIsFun);

//console.log(typeof true);
console.log(typeof javaScriptIsFun);
//console.log(typeof 23);
//console.log(typeof "Jonas");

javaScriptIsFun = "YES!";
console.log(typeof javaScriptIsFun);

let year;
console.log(year);
console.log(typeof year);

year = 1991;
console.log(typeof year);

console.log(typeof null); //object - weird behavior


///////////////////////////////////////
// var let const
let age = 30;
age = 31;

const birthYear = 1991;
//birthYear = 1900; - wrong

var job = "programmer";
job = "teacher";


lastName = "Chira";
console.log(lastName);

////////////////////////////////////////////
//Operators
const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;
console.log(ageJonas, ageSarah);

console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);

const firstName = "Jonas";
const lastName = "Doe";
console.log(firstName + " " + lastName);


/////////////////////////////////////////
//Assignment operators
let x = 10 + 5; //15
x += 10; //25
x *= 4; //100
x++;
x--;
x--;
console.log(x);


/////////////////////////////////
//Comparison operators
console.log(ageJonas > ageSarah); // >, <, >=, <=
console.log(ageSarah >= 18);

const isFullAge = ageSarah >= 18;

console.log(now - 1991 > now - 2018);


const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;

console.log(25 - 10 - 5);
let x, y;
x = y = 25 - 10 - 5; // x = y = 10 => y = 10 x = 10 =>left to right
console.log(x, y);

const averageAge = (ageJonas + ageSarah) / 2;
console.log(ageJonas, ageSarah);


///////////////////////////////////////////////////
//Strings and Template Literals
const firstName = "Jonas";
const job = "teacher";
const birthYear = 1991;
const year = 2037;

const jonas =
  "I'm " + firstName + ", a " + (year - birthYear) + " years old " + job + "!";
console.log(jonas);

const jonasNew = `I'm ${firstName}, a ${year - birthYear} years old ${job}!`;
console.log(jonasNew);

console.log(`Just a regular string....`);


///////////////////Multiline string
console.log(`String with \n\
multiple \n\
lines`);

console.log(`String 
multiple
lines`);



/////////////////////////////////
/////if/else statements
const age = 15;
if (age >= 18) {
  console.log("Sarah can start driving licence");
} else {
  const yearsLeft = 18 - age;
  console.log(`Sarah is too young. Wait another ${yearsLeft} years.`);
}

const birthYear = 1991;
let century;
if (birthYear <= 2000) {
  let century = 20;
} else {
  let century = 19;
}


///////////////////////
//Type Conversion

const inputYear = "1991";
console.log(Number(inputYear), inputYear);
console.log(inputYear + 18); //Output 199118
console.log(Number(inputYear) + 18); //Output 2009

console.log(Number("Jonas")); //NaN
console.log(typeof NaN); //number but invalid one

console.log(String(23), 23);

/////Type Coercion
console.log("I am " + 23 + " years old");
console.log("23" - "10" - 3); // 10
console.log("23" / "2"); //11.5

let n = "1" + 1; //11
n = n - 1; //10
console.log(n); //10

console.log(2 + 3 + 4 + "5"); //95
console.log("10" - "4" - "3" - 2 + "5"); //15



////////////////////////////////
//5 falsy values: 0 , "", undefined, NaN, null

console.log(Boolean(0)); //false
console.log(Boolean(undefined)); //false
console.log(Boolean("Jonas")); //true
console.log(Boolean({})); //true
console.log(Boolean("")); //false

const money = 0;
if (money) {
  console.log("Don't spend it all!");
} else {
  console.log("You should get a job!");
}

let height;
if (height) {
  console.log("YAY! Height is defined");
} else {
  console.log("Height is UNDEFINED");
}



////////////////
//Equality operators
//Strict equality operator - doesn't so type coercion
const age = "18";
if (age === 18) console.log("You just became an adult. (strict)");

//Loose equality operator
if (age == 18) console.log("You just became an adult. (loose)");

const favourite = Number(prompt("What's your favorite number?"));
console.log(favourite);
console.log(typeof favourite);

if (favourite === 23) {
  console.log("Cool! 23 is an amazing number");
} else if (favourite === 7) {
  console.log("7 is also a cool number");
} else if (favourite === 9) {
  console.log("9 is also a cool number");
} else {
  console.log("Number is not 23 or 7 or 9");
}

///Different operator (strict !== or loose !=)
if (favourite !== 23) {
  console.log("Why not 23?");
}



////////////////////////////////
//Logical operators: & || ! Operators

const hasDrivingLicense = true;
const hasGoodVision = true;

console.log(hasDrivingLicense && hasGoodVision);
console.log(hasDrivingLicense || hasGoodVision);
console.log(!hasDrivingLicense);

// if (hasDrivingLicense && hasGoodVision) {
//   console.log("Sarah is able to drive.");
// } else {
//   console.log("Someone else should drive.");
// }

const isTired = false;
console.log(hasDrivingLicense && hasGoodVision && isTired);

if (hasDrivingLicense && hasGoodVision && !isTired) {
  console.log("Sarah is able to drive.");
} else {
  console.log("Someone else should drive.");
}



//Switch Statement
const day = "thursday";
switch (day) {
  case "monday": // day === 'Monday'
    console.log("Plan course structure");
    console.log("Go to coding meetup");
    break;
  case "tuesday":
    console.log("Prepare theory videos");
    break;
  case "wednesday":
  case "thursday":
    console.log("Write code examples");
    break;
  case "friday":
    console.log("Record videos");
    break;
  case "saturday":
  case "sunday":
    console.log("Enjoy the weekend");
    break;
  default:
    console.log("Not a valid day!");
}


//if else syntax
if (day === "monday") {
  console.log("Plan course structure");
  console.log("Go to coding meetup");
} else if (day === "tuesday") {
  console.log("Prepare theory videos");
} else if (day === "wednesday" || day === "thursday") {
  console.log("Write code examples");
} else if (day === "friday") {
  console.log("Record videos");
} else if (day === "saturday" || day === "sunday") {
  console.log("Enjoy the weekend");
} else {
  console.log("Not a valid day!");
}



//Statements and Expressions
3 + 4; //expression because produce a value in JS
1991; //expression
true && false && !false; //expression because produce a boolean value;

if (23 > 10) {
  const str = "23 is bigger"; //statement => it performs some actions but doesn't produce a value
}

const me = "Maria";  //expression
console.log(`I'm ${2037 - 1992} years old ${me}.`);
\



//The Conditional Operator == Ternary Operator
const age = 15;
age >= 18
  ? console.log("I like to drink wine")
  : console.log("I like to drink water");

const drink = age >= 18 ? "wine" : "water";
console.log(drink);

let drink2;
if (age >= 18) {
  drink2 = "wine";
} else {
  drink2 = "water";
}
console.log(drink2);

console.log(`I like to drink ${age >= 18 ? "wine" : "water"}`);

*/
