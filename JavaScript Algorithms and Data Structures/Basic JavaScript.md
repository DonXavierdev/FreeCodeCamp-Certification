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
 
