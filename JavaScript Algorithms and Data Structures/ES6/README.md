# ES6
### ECMAScript, or ES, is a standardized version of JavaScript. Because all major browsers follow this specification, the terms ECMAScript and JavaScript are interchangeable.ES6, released in 2015, added many powerful new features to the language. 
#### Compare Scopes of the var and let Keywords
```
function checkScope() {
  "use strict";
  let i = "function scope";
  if (true) {
    let i = "block scope";
    console.log("Block scope i is: ", i);
  }
  console.log("Function scope i is: ", i);
  return i;
}
```
#### Mutate an Array Declared with const
```
const s = [5, 7, 2];
function editInPlace() {
  "use strict";
  s[0] = 2;
  s[1] = 5;
  s[2] = 7;
}
editInPlace();
```
#### Prevent Object Mutation
```
function freezeObj() {
  const MATH_CONSTANTS = {
    PI: 3.14
  };
  // Only change code below this line
  Object.freeze(MATH_CONSTANTS);
  // Only change code above this line
  try {
    MATH_CONSTANTS.PI = 99;
  } catch(ex) {
    console.log(ex);
  }
  return MATH_CONSTANTS.PI;
}
const PI = freezeObj();
```
#### Use Arrow Functions to Write Concise Anonymous Functions
```
const myFunc = () => {
  const myVar = "value";
  return myVar;
}
```
#### Write Arrow Functions with Parameters
```
const multiplier = (item, multi) => item * multi;
multiplier(4, 2);
```
#### Set Default Parameters for Your Functions
```
const greeting = (name = "Anonymous") => "Hello " + name;

console.log(greeting("John"));
console.log(greeting());
```
#### Use the Rest Parameter with Function Parameters
```
function howMany(...args) {
  return "You have passed " + args.length + " arguments.";
}
console.log(howMany(0, 1, 2));
console.log(howMany("string", null, [1, 2, 3], { }));
```
####  Use the Spread Operator to Evaluate Arrays In-Place
```
const arr = [6, 89, 3, 45];
const maximus = Math.max(...arr);
```
#### Use Destructuring Assignment to Extract Values from Objects
```
const HIGH_TEMPERATURES = {
  yesterday: 75,
  today: 77,
  tomorrow: 80
};

// Only change code below this line

const {today, tomorrow} = HIGH_TEMPERATURES;

// Only change code above this line
```
#### Use Destructuring Assignment to Assign Variables from Objects
```
const HIGH_TEMPERATURES = {
  yesterday: 75,
  today: 77,
  tomorrow: 80
};

// change code below this line
  
const { today: highToday, tomorrow: highTomorrow } = HIGH_TEMPERATURES;

// change code above this line

console.log(highToday); // should be 77
console.log(highTomorrow); // should be 80
```
#### Use Destructuring Assignment to Assign Variables from Nested Objects
```
const LOCAL_FORECAST = {
  yesterday: { low: 61, high: 75 },
  today: { low: 64, high: 77 },
  tomorrow: { low: 68, high: 80 }
};

// Only change code below this line
const { today: { low: lowToday, high: highToday } } = LOCAL_FORECAST;
// Only change code above this line
```
#### Use Destructuring Assignment to Assign Variables from Arrays
```
let a = 8, b = 6;
[a, b] = [b, a];
```
#### Destructuring via rest elements
```
function removeFirstTwo(list) {
  // Only change code below this line
  const [a, b, ...shorterList] = list; // Change this line
  // Only change code above this line
  return shorterList;
}

const source = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const sourceWithoutFirstTwo = removeFirstTwo(source);
```
#### Use Destructuring Assignment to Pass an Object as a Function's Parameters
```
const stats = {
  max: 56.78,
  standard_deviation: 4.34,
  median: 34.54,
  mode: 23.87,
  min: -0.75,
  average: 35.85
};

// Only change code below this line
const half = ({ max, min }) => (max + min) / 2.0;
// Only change code above this line
```
#### Create Strings using Template Literals
```
const result = {
  success: ["max-length", "no-amd", "prefer-arrow-functions"],
  failure: ["no-var", "var-on-top", "linebreak"],
  skipped: ["no-extra-semi", "no-dup-keys"]
};
function makeList(arr) {
  "use strict";
  // change code below this line
  const failureItems = [];
  for (let i = 0; i < arr.length; i++) {
    failureItems.push(`<li class="text-warning">${arr[i]}</li>`);
  }
  // change code above this line
  return failureItems;
}

const failuresList = makeList(result.failure);
```
#### Write Concise Object Literal Declarations Using Object Property Shorthand
```
const createPerson = (name, age, gender) => {
  "use strict";
  // change code below this line
  return {
    name,
    age,
    gender
  };
  // change code above this line
};
```
#### Write Concise Declarative Functions with ES6
```
const bicycle = {
  gear: 2,
  setGear(newGear) {
    "use strict";
    this.gear = newGear;
  }
};
```
#### Use class Syntax to Define a Constructor Function
```
class Vegetable {
  constructor(name) {
    this.name = name;
  }
}

const carrot = new Vegetable("carrot");
console.log(carrot.name); // => should be 'carrot'
```
#### Use getters and setters to Control Access to an Object
```
class Thermostat {
  constructor(fahrenheit) {
    this._celsius = (5 / 9) * (fahrenheit - 32);
  }
  
  get temperature() {
    return this._celsius;
  }
  
  set temperature(celsius) {
    return this._celsius = celsius;
  }
}
```
#### Use export to Share a Code Block
```
export const uppercaseString = (string) => {
  return string.toUpperCase();
}

export const lowercaseString = (string) => {
  return string.toLowerCase()
}
```
#### Create a Module Script
```
<html>
  <body>
    <!-- add your code below -->
    <script type="module" src="index.js"></script>
    <!-- add your code above -->
  </body>
</html>
```
#### Reuse JavaScript Code Using import
```
import { uppercaseString, lowercaseString } from './string_functions.js';
// add code above this line

uppercaseString("hello");
lowercaseString("WORLD!");
```
#### Use * to Import Everything from a File
```
import * as stringFunctions from "./string_functions.js";
// add code above this line

stringFunctions.uppercaseString("hello");
stringFunctions.lowercaseString("WORLD!");
```
#### Create an Export Fallback with export default
```
"use strict";
export default function subtract(x, y) {
  return x - y;
}
```
#### Import a Default Export
```
import subtract from "./math_functions.js";
// add code above this line

subtract(7,4);
```
#### Create a JavaScript Promise
```
const makeServerRequest = new Promise((resolve, reject) => {

});
```
#### Complete a Promise with resolve and reject
```
const makeServerRequest = new Promise((resolve, reject) => {
  // responseFromServer represents a response from a server
  let responseFromServer;

  if(responseFromServer) {
    resolve("We got the data");
  } else {	
    reject("Data not received");
  }
});
```
#### Handle a Fulfilled Promise with then
```
const makeServerRequest = new Promise((resolve, reject) => {
  // responseFromServer is set to true to represent a successful response from a server
  let responseFromServer = true;
	
  if(responseFromServer) {
    resolve("We got the data");
  } else {	
    reject("Data not received");
  }
});

makeServerRequest.then(result => {
  console.log(result);
});
```
#### Handle a Rejected Promise with catch
```
const makeServerRequest = new Promise((resolve, reject) => {
  // responseFromServer is set to false to represent an unsuccessful response from a server
  let responseFromServer = false;
	
  if(responseFromServer) {
    resolve("We got the data");
  } else {	
    reject("Data not received");
  }
});

makeServerRequest.then(result => {
  console.log(result);
});

makeServerRequest.catch(error => {
  console.log(error);
});
```
