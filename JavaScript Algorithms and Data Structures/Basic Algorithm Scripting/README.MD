# Basic Algorithm Scripting
#### Convert Celsius to Fahrenheit
```
function convertCtoF(celsius) {
  let fahrenheit;
  fahrenheit=(9/5)*celsius+32
  return fahrenheit;
}

convertCtoF(30);
```
#### Reverse a String
```
function reverseString(str) {
  let reversedStr = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversedStr += str[i];
  }
  return reversedStr;
}
```
#### Factorialize a Number
```
function factorialize(num) {
  let fact=1;
  for( let i=2;i<=num;i++){
    fact*=i
  }
 
  return fact;

}

factorialize(5);
```
#### Find the Longest Word in a String
```
function findLongestWordLength(str) {
  
  let words = str.split(' ');
  let maxLength = 0;

  for (let i = 0; i < words.length; i++) {
    if (words[i].length > maxLength) {
      maxLength = words[i].length;
    }
  }

  return maxLength;
}

findLongestWordLength("The quick brown fox jumped over the lazy dog");
```
#### Return Largest Numbers in Arrays
```
function largestOfFour(arr) {
  const results = [];
  for (let i = 0; i < arr.length; i++) {
    let largestNumber = arr[i][0];
    for (let j = 1; j < arr[i].length; j++) {
      if (arr[i][j] > largestNumber) {
        largestNumber = arr[i][j];
      }
    }
    results[i] = largestNumber;
  }

  return results;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
```
#### Confirm the Ending
```
function confirmEnding(str, target) {
  return str.slice(str.length - target.length) === target;
}
confirmEnding("Bastian", "n");

```
#### Repeat a String Repeat a String
```
function repeatStringNumTimes(str, num) {
  let string=''
  while(num>0){
    string+=str;
    num--;
  }
  return string
}

repeatStringNumTimes("abc", 3);
```
#### Truncate a String
```
function truncateString(str, num) {
  if (str.length > num) {
    return str.slice(0, num) + "...";
  } else {
    return str;
  }
}

truncateString("A-tisket a-tasket A green and yellow basket", 8);
```
#### Finders Keepers
```
function findElement(arr, func) {
  let num = 0;

  for (let i = 0; i < arr.length; i++) {
    num = arr[i];
    if (func(num)) {
      return num;
    }
  }

  return undefined;
}
findElement([1, 2, 3, 4], num => num % 2 === 0);
```
#### Boo who
```
function booWho(bool) {
  if(bool===true || bool===false){
    return true
  }
  return false;
}

booWho(null);
```
#### Title Case a Sentence
```
function titleCase(str) {
  const newTitle = str.split(" ");
  const updatedTitle = [];
  for (let st in newTitle) {
    updatedTitle[st] = newTitle[st][0].toUpperCase() + newTitle[st].slice(1).toLowerCase();
  }
  return updatedTitle.join(" ");
}

titleCase("I'm a little tea pot");
```
#### Slice and Splice
```
function frankenSplice(arr1, arr2, n) {
  let localArr = arr2.slice();
  localArr.splice(n, 0, ...arr1);
  return localArr;
}
frankenSplice([1, 2, 3], [4, 5, 6], 1);
```
#### Falsy Bouncer
```
function bouncer(arr) {
  return arr.filter(Boolean);
}
bouncer([7, "ate", "", false, 9]);
```
#### Where do I Belong
```
function getIndexToIns(arr, num) {
  arr.sort((a, b) => a - b);

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] >= num) return i;
  }

  return arr.length;
}

getIndexToIns([40, 60], 50);
```
#### Mutations
```
function mutation(arr) {
  const test = arr[1].toLowerCase();
  const target = arr[0].toLowerCase();
  for (let i = 0; i < test.length; i++) {
    if (target.indexOf(test[i]) < 0) return false;
  }
  return true;
}

mutation(["hello", "hey"]);
```
#### Chunky Monkey
```
function chunkArrayInGroups(arr, size) {
  let temp = [];
  const result = [];

  for (let a = 0; a < arr.length; a++) {
    if (a % size !== size - 1) temp.push(arr[a]);
    else {
      temp.push(arr[a]);
      result.push(temp);
      temp = [];
    }
  }

  if (temp.length !== 0) result.push(temp);
  return result;
}
chunkArrayInGroups(["a", "b", "c", "d"], 2);
```