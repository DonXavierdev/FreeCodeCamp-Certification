# Some fundamental programming concepts in JavaScript.
#### Comment Your JavaScript Code
```
// This is an in-line comment.
/* This is a
multi-line comment */
```
#### Declare JavaScript Variables
```
var myName;
```
#### Storing Values with the Assignment Operator
```
// Setup
var a;

// Only change code below this line
a=7;
```
#### Assigning the Value of One Variable to Another
```
// Setup
var a;
a = 7;
var b;

// Only change code below this line
b=a;
```
#### Initializing Variables with the Assignment Operator
```
var a=9;
```
#### Declare String Variables
```
var myFirstName='Don'
var myLastName='Xavier'
```
#### Understanding Uninitialized Variables
```
// Only change code below this line
var a=5;
var b=10;
var c='I am a';
// Only change code above this line

a = a + 1;
b = b + 5;
c = c + " String!";
```
#### Understanding Case Sensitivity in Variables
```
// Variable declarations
var studlyCapVar;
var properCamelCase;
var titleCaseOver;

// Variable assignments
studlyCapVar = 10;
properCamelCase = "A String";
titleCaseOver = 9000;
```
#### Explore Differences Between the var and let Keywords
```
let catName = "Oliver";
let catSound = "Meow!";
```
#### Declare a Read-Only Variable with the const Keyword
```
const FCC = "freeCodeCamp";
let fact = "is cool!";

fact = "is awesome!";
console.log(FCC, fact);
```
#### Add Two Numbers with JavaScript
```
const sum = 10 + 10;
```
#### Subtract One Number from Another with JavaScript
```
const difference = 45 - 33;
```
#### Multiply Two Numbers with JavaScript
```
const product = 8 * 10;
```
#### Divide One Number by Another with JavaScript
```
const quotient = 66 / 33;
```
#### Increment a Number with JavaScript
```
let myVar = 87;

// Only change code below this line
myVar++
```
#### Decrement a Number with JavaScript
```
let myVar = 11;

// Only change code below this line
myVar--
```
#### Create Decimal Numbers with JavaScript
```
const ourDecimal = 5.7;

// Only change code below this line
var myDecimal=5.7;
```
#### Multiply Two Decimals with JavaScript
```
const product = 1.0 * 5.0;
```
#### Divide One Decimal by Another with JavaScript
```
var quotient = 4.4 / 2.0;
```
#### Finding a Remainder in JavaScript
```
const remainder = 11%3;
```
#### Compound Assignment With Augmented Addition
```
let a = 3;
let b = 17;
let c = 12;

// Only change code below this line
a += 12;
b += 9;
c += 7;
```
#### Compound Assignment With Augmented Subtraction
```
a  -= 12;
b -= 9;
c -= 7;

```
#### Compound Assignment With Augmented Multiplication
```
a *=12;
b *= 9;
c *= 7;

```
#### Compound Assignment With Augmented Division
```
a /=12;
b /= 9;
c /= 7;

```
#### Escaping Literal Quotes in Strings
```
const sampleStr = "Alan said, \"Peter is learning JavaScript\".";
```
#### Concatenating Strings with Plus Operator
```
const ourStr = "I come first. " + "I come second.";
```
#### Concatenating Strings with the Plus Equals Operator
```
let ourStr = "I come first. ";
ourStr += "I come second.";
```
#### Constructing Strings with Variables
```
const ourName = "freeCodeCamp";
const ourStr = "Hello, our name is " + ourName + ", how are you?";
```
#### Appending Variables to Strings
```
const anAdjective = "awesome!";
let ourStr = "freeCodeCamp is ";
ourStr += anAdjective;
```
#### Find the Length of a String
```
// Setup
let lastNameLength = 0;
const lastName = "Lovelace";

// Only change code below this line
lastNameLength = lastName.length;
```
#### Use Bracket Notation to Find the First Character in a String
```
// Setup
let firstLetterOfLastName = "";
const lastName = "Lovelace";

// Only change code below this line
firstLetterOfLastName = lastName[0]; // Change this line
```
#### Understand String Immutability

```
// Setup
let myStr = "Jello World";

// Only change code below this line
myStr = "Hello World"; // Change this line
// Only change code above this line
```
#### Use Bracket Notation to Find the Nth Character in a String


```
// Setup
const lastName = "Lovelace";

// Only change code below this line
const thirdLetterOfLastName = lastName[2]; // Change this line
```
#### Use Bracket Notation to Find the Last Character in a String
```
// Setup
const lastName = "Lovelace";

// Only change code below this line
const lastLetterOfLastName = lastName[lastName.length -1]; // Change this line
```
#### Use Bracket Notation to Find the Nth-to-Last Character in a String
```
// Setup
const lastName = "Lovelace";

// Only change code below this line
const secondToLastLetterOfLastName = lastName[lastName.length-2]; // Change this line
```
#### Word Blanks
```
var myNoun = "dog";
var myAdjective = "big";
var myVerb = "ran";
var myAdverb = "quickly";

var wordBlanks = "The " + myAdjective + " " + myNoun + " " + myVerb + " " + myAdverb + "."; // Only change this line;
```
#### Store Multiple Values in one Variable using JavaScript Arrays
```
const sandwich = ["peanut butter", "jelly", "bread"];
```
#### Nest one Array within Another Array
```
const teams = [["Bulls", 23], ["White Sox", 45]];
```
#### Access Array Data with Indexes
```
const array = [50, 60, 70];
console.log(array[0]);
const data = array[1];
```
#### Modify Array Data With Indexes
```
const ourArray = [50, 40, 30];
ourArray[0] = 15;
```
#### Access Multi-Dimensional Arrays With Indexes
```
const arr = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [[10, 11, 12], 13, 14]
];

const subarray = arr[3];
const nestedSubarray = arr[3][0];
const element = arr[3][0][1];
```
#### Manipulate Arrays With push Method
```
const arr1 = [1, 2, 3];
arr1.push(4);

const arr2 = ["Stimpson", "J", "cat"];
arr2.push(["happy", "joy"]);
```
#### Manipulate Arrays With pop Method
```
const threeArr = [1, 4, 6];
const oneDown = threeArr.pop();
console.log(oneDown);
console.log(threeArr);
```
#### Manipulate Arrays With shift Method
```
const ourArray = ["Stimpson", "J", ["cat"]];
const removedFromOurArray = ourArray.shift();

```
#### Manipulate Arrays With unshift Method
```
const ourArray = ["Stimpson", "J", "cat"];
ourArray.shift();
ourArray.unshift("Happy");
```
#### Shopping List
```
var myList = [
  ["Canned Beans", 3],
  ["Milk Galon", 1],
  ["Cereal", 2],
  ["Toilet Paper", 12],
  ["Sack of Rice", 1]
];
```
#### Write Reusable JavaScript with Functions
```
function functionName() {
  console.log("Hello World");
}

```
#### Passing Values to Functions with Arguments
```
function testFun(param1, param2) {
  console.log(param1, param2);
}
```
#### Return a Value from a Function with Return
```
function plusThree(num) {
  return num + 3;
}

const answer = plusThree(5);
```
#### Global Scope and Functions
```
// Declare your variable here
var myGlobal = 10;

function fun1() {
  oopsGlobal = 5;
}

// Only change code above this line
function fun2() {
  var output = "";
  if (typeof myGlobal != "undefined") {
    output += "myGlobal: " + myGlobal;
  }
  if (typeof oopsGlobal != "undefined") {
    output += " oopsGlobal: " + oopsGlobal;
  }
  console.log(output);
}
```
#### Local Scope and Functions
```
function myTest() {
  const loc = "foo";
  console.log(loc);
}

myTest();
console.log(loc);
```
#### Global vs. Local Scope in Functions
```
var outerWear = "T-Shirt";

function myOutfit() {
  var outerWear = "sweater";
  return outerWear;
}

myOutfit();
```
#### Understanding Undefined Value returned from a Function
```
let sum = 0;

function addSum(num) {
  sum = sum + num;
}

addSum(3);
```
#### Assignment with a Returned Value
```
// Setup
let processed = 0;

function processArg(num) {
  return (num + 3) / 5;
}

// Only change code below this line
processed = processArg(7);
```
#### Stand in Line
```
function nextInLine(arr, item) {
  // Only change code below this line
  
  arr.push(item);
  const removed = arr.shift();
  return removed;
  // Only change code above this line
}

// Setup
let testArr = [1, 2, 3, 4, 5];

// Display code
console.log("Before: " + JSON.stringify(testArr));
console.log(nextInLine(testArr, 6));
console.log("After: " + JSON.stringify(testArr));
```
#### Understanding Boolean Values
```
function welcomeToBooleans() {
  // Only change code below this line

  return true; // Change this line

  // Only change code above this line
}
```
#### Use Conditional Logic with If Statements
```
function test (myCondition) {
  if (myCondition) {
    return "It was true";
  }
  return "It was false";
}

test(true);
test(false);

```
#### Comparison with the Equality Operator
```
function equalityTest(myVal) {
  if (myVal == 10) {
    return "Equal";
  }
  return "Not Equal";
}

```
#### Comparison with the Strict Equality Operator
```
3 ===  3  // true
3 === '3' // false
```
#### Practice comparing different values
```
// Setup
function compareEquality(a, b) {
  if (a === b) { // Change this line
    return "Equal";
  }
  return "Not Equal";
}

compareEquality(10, "10");
```
#### Comparison with the Inequality Operator
```
// Setup
function testNotEqual(val) {
  if (val!=99) { // Change this line
    return "Not Equal";
  }
  return "Equal";
}

testNotEqual(10);
```
#### Comparison with the Strict Inequality Operator
```
3 !==  3  // false
3 !== '3' // true
4 !==  3  // true
```
#### Comparison with the Greater Than Operator
```
function testGreaterThan(val) {
  if (val>100) {  // Change this line
    return "Over 100";
  }

  if (val>10) {  // Change this line
    return "Over 10";
  }

  return "10 or Under";
}

testGreaterThan(10);
```
#### Comparison with the Greater Than Or Equal To Operator
```
function testGreaterOrEqual(val) {
  if (val >= 20) return "20 or Over";

  if (val >= 10) return "10 or Over";

  return "Less than 10";
}
```
#### Comparison with the Less Than Operator
```
function testLessThan(val) {
  if (val < 25) return "Under 25";

  if (val < 55) return "Under 55";

  return "55 or Over";
}
```
#### Comparison with the Less Than Or Equal To Operator
```
function testLessOrEqual(val) {
  if (val <= 12) return "Smaller Than or Equal to 12";

  if (val <= 24) return "Smaller Than or Equal to 24";

  return "More Than 24";
}
```
#### Comparisons with the Logical And Operator
```
function testLogicalAnd(val) {
  // Only change code below this line

  if (val <= 50 && val >= 25) {
    return "Yes";
  }

  // Only change code above this line
  return "No";
}

// Change this value to test
testLogicalAnd(10);
```
#### Comparisons with the Logical Or Operator
```
if (val < 10 || val > 20) {
  return "Outside";
}
```
#### Introducing Else Statements
```
if (num > 10) {
  return "Bigger than 10";
} else {
  return "10 or Less";
}
```
#### Introducing Else If Statements
```
if (num > 15) {
  return "Bigger than 15";
} else if (num < 5) {
  return "Smaller than 5";
} else {
  return "Between 5 and 15";
}
```
#### Logical Order in If Else Statements
```
function orderMyLogic(val) {
  if (val < 5) {
    return "Less than 5";
  } else if (val < 10) {
    return "Less than 10";
  } else {
    return "Greater than or equal to 10";
  }
}
```
#### Chaining If Else Statements
```
function testSize(num) {
  // Only change code below this line
  if (num < 5) {
    return "Tiny";
  } else if (num < 10) {
    return "Small";
  } else if (num < 15) {
    return "Medium";
  } else if (num < 20) {
    return "Large";
  } else {
    return "Huge";
  }
  // Only change code above this line
}
```
#### Golf Code
```
const names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];

function golfScore(par, strokes) {
  // Only change code below this line
  if (strokes == 1) {
    return names[0];
  } else if (strokes <= par - 2) {
    return names[1];
  } else if (strokes === par - 1) {
    return names[2];
  } else if (strokes === par) {
    return names[3];
  } else if (strokes === par + 1) {
    return names[4];
  } else if (strokes === par + 2) {
    return names[5];
  } else {
    return names[6];
  }
  // Only change code above this line
}

// Change these values to test
golfScore( 5, 4);
``` 
#### Selecting from Many Options with Switch Statements
```
switch (fruit) {
  case "apple":
    console.log("The fruit is an apple");
    break;
  case "orange":
    console.log("The fruit is an orange");
    break;
}
```
#### Adding a Default Option in Switch Statements
```
switch (num) {
  case value1:
    statement1;
    break;
  case value2:
    statement2;
    break;
...
  default:
    defaultStatement;
    break;
}
```
#### Multiple Identical Options in Switch Statements
```
let result = "";
switch (val) {
  case 1:
  case 2:
  case 3:
    result = "1, 2, or 3";
    break;
  case 4:
    result = "4 alone";
}
```
#### Replacing If Else Chains with Switch
```
//   if (val === "bob") {
//     answer = "Marley";
//   } else if (val === 42) {
//     answer = "The Answer";
//   } else if (val === 1) {
//     answer = "There is no #1";
//   } else if (val === 99) {
//     answer = "Missed me by this much!";
//   } else if (val === 7) {
//     answer = "Ate Nine";
//   }
```
#### Returning Boolean Values from Functions
```
function isEqual(a, b) {
  return a === b;
}
```
#### Return Early Pattern for Functions
```
function myFun() {
  console.log("Hello");
  return "World";
  console.log("byebye")
}
myFun();

```
#### Counting Cards
```
let count = 0;

function cc(card) {
  // Only change code below this line
  switch (card) {
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
      count++;
      break;
    case 10:
    case "J":
    case "Q":
    case "K":
    case "A":
      count--;
      break;
  }
  if (count > 0) {
    return count + " Bet";
  } else {
    return count + " Hold";
  }
  // Only change code above this line
}

cc(2); cc(3); cc(7); cc('K'); cc('A');
```
#### Build JavaScript Objects
```
const cat = {
  "name": "Whiskers",
  "legs": 4,
  "tails": 1,
  "enemies": ["Water", "Dogs"]
};
```
#### Accessing Object Properties with Dot Notation
```
const myObj = {
  prop1: "val1",
  prop2: "val2"
};

const prop1val = myObj.prop1;
const prop2val = myObj.prop2;
```
#### Accessing Object Properties with Bracket Notation
```
const myObj = {
  "Space Name": "Kirk",
  "More Space": "Spock",
  "NoSpace": "USS Enterprise"
};

myObj["Space Name"];
myObj['More Space'];
myObj["NoSpace"];
```
#### Accessing Object Properties with Variables
```
const dogs = {
  Fido: "Mutt",
  Hunter: "Doberman",
  Snoopie: "Beagle"
};

const myDog = "Hunter";
const myBreed = dogs[myDog];
console.log(myBreed);
```
#### Updating Object Properties
```
// Setup
var myDog = {
  name: "Coder",
  legs: 4,
  tails: 1,
  friends: ["freeCodeCamp Campers"]
};

// Only change code below this line.

myDog.name = "Happy Coder"; // Solution
```
#### Add New Properties to a JavaScript Object
```
const ourDog = {
  "name": "Camper",
  "legs": 4,
  "tails": 1,
  "friends": ["everything!"]
};

ourDog.bark = "bow-wow";
```
#### Delete Properties from a JavaScript Object
```
const ourDog = {
  "name": "Camper",
  "legs": 4,
  "tails": 1,
  "friends": ["everything!"],
  "bark": "bow-wow"
};

delete ourDog.bark;
```
#### Using Objects for Lookups
```
const article = {
  "title": "How to create objects in JavaScript",
  "link": "https://www.freecodecamp.org/news/a-complete-guide-to-creating-objects-in-javascript-b0e2450655e8/",
  "author": "Kaashan Hussain",
  "language": "JavaScript",
  "tags": "TECHNOLOGY",
  "createdAt": "NOVEMBER 28, 2018"
};

const articleAuthor = article["author"];
const articleLink = article["link"];

const value = "title";
const valueLookup = article[value];
```
#### Testing Objects for Properties
```
function checkForProperty(object, property) {
  return object.hasOwnProperty(property);
}

checkForProperty({ top: 'hat', bottom: 'pants' }, 'top'); // true
checkForProperty({ top: 'hat', bottom: 'pants' }, 'middle'); // false
```
#### Manipulating Complex Objects
```
const ourMusic = [
  {
    "artist": "Daft Punk",
    "title": "Homework",
    "release_year": 1997,
    "formats": [ 
      "CD", 
      "Cassette", 
      "LP"
    ],
    "gold": true
  }
];
```
#### Accessing Nested Arrays
```
const ourPets = [
  {
    animalType: "cat",
    names: [
      "Meowzer",
      "Fluffy",
      "Kit-Cat"
    ]
  },
  {
    animalType: "dog",
    names: [
      "Spot",
      "Bowser",
      "Frankie"
    ]
  }
];

ourPets[0].names[1];
ourPets[1].names[0];
```
#### Record Collection
```
function updateRecords(records, id, prop, value) {
  if (value === "") {
    delete records[id][prop];
  } else if (prop !== "tracks" && value !== "") {
    records[id][prop] = value;
  } else if (prop === "tracks" && value !== "") {
    if (records[id].hasOwnProperty("tracks") === false) {
      records[id][prop] = [];
    }
    records[id][prop].push(value);
  }
  return records;
}
```
#### Iterate with JavaScript While Loops
```
const ourArray = [];
let i = 0;

while (i < 5) {
  ourArray.push(i);
  i++;
}
```
#### Iterate with JavaScript For Loops
```
const ourArray = [];

for (let i = 0; i < 5; i++) {
  ourArray.push(i);
}
```
#### Iterate Odd Numbers With a For Loop
```
const ourArray = [];

for (let i = 1; i < 9; i += 2) {
  ourArray.push(i);
}
```
#### Count Backwards With a For Loop
```
const ourArray = [];

for (let i = 10; i > 0; i -= 2) {
  ourArray.push(i);
}
```
#### Iterate Through an Array with a For Loop
```
const arr = [10, 9, 8, 7, 6];

for (let i = 0; i < arr.length; i++) {
   console.log(arr[i]);
}
```
#### Nesting For Loops
```
const arr = [
  [1, 2], [3, 4], [5, 6]
];

for (let i = 0; i < arr.length; i++) {
  for (let j = 0; j < arr[i].length; j++) {
    console.log(arr[i][j]);
  }
}
```
#### Iterate with JavaScript Do...While Loops
```
const ourArray = [];
let i = 0;

do {
  ourArray.push(i);
  i++;
} while (i < 5);
```
#### Replace Loops using Recursion
```
function multiply(arr, n) {
    if (n <= 0) {
      return 1;
    } else {
      return multiply(arr, n - 1) * arr[n - 1];
    }
  }
```
#### Profile Lookup
```
function lookUpProfile(name, prop) {
  for (let x = 0; x < contacts.length; x++) {
    if (contacts[x].firstName === name) {
      if (contacts[x].hasOwnProperty(prop)) {
        return contacts[x][prop];
      } else {
        return "No such property";
      }
    }
  }
  return "No such contact";
}
```
#### Generate Random Fractions with JavaScript
```
function randomFraction() {
  // Only change code below this line.
  var result = 0;
  // Math.random() can generate 0. We don't want to     return a 0,
  // so keep generating random numbers until we get one     that isn't 0
  while (result === 0) {
    result = Math.random();
  }

  return result;
  // Only change code above this line.
}
```
#### Generate Random Whole Numbers with JavaScript
```
Math.floor(Math.random() * 20);
```
#### Generate Random Whole Numbers within a Range
```
Math.floor(Math.random() * (max - min + 1)) + min
```
#### Use the parseInt Function
```
const a = parseInt("007");
```
#### Use the parseInt Function with a Radix
```
// syntax : parseInt(string, radix);
const a = parseInt("11", 2);
```
#### Use the Conditional (Ternary) Operator
```
function findGreater(a, b) {
  return a > b ? "a is greater" : "b is greater or equal";
}
```
#### Use Multiple Conditional (Ternary) Operators
```
function findGreaterOrEqual(a, b) {
  return (a === b) ? "a and b are equal" : (a > b) ? "a is greater" : "b is greater";
}
```
#### Use Recursion to Create a Countdown
```
function countdown(n) {
  if (n < 1) {
    return [];
  } else {
    const arr = countdown(n - 1);
    arr.unshift(n);
    return arr;
  }
}
```
#### Use Recursion to Create a Range of Numbers
```
function rangeOfNumbers(startNum, endNum) {
  if (endNum < startNum) {
    return [];
  } else {
    const numbers = rangeOfNumbers(startNum, endNum - 1);
    numbers.push(endNum);
    return numbers;
  }
}
```
