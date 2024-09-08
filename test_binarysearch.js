import binarySearch from "./binarysearch.js"; 

// Arrays to test
const oldNumberArray = [21, 22, 23, 89, 25, 27, 28, 29, 31, 32, 34, 35];
const numberArray = oldNumberArray.toSorted();


const oldStringArray = ["Draco", "åge", "Dumbledore", "Harry", "Hermione", "Luna", "Neville", "Ron", "Snape", "Voldemort"];
const stringArray = oldStringArray.toSorted();


// Test finding a number in sorted array
let searchNumber = 28;
let result = binarySearch(searchNumber, numberArray);

console.log(`______________ Test finding a number ______________ `);
console.log(numberArray);
console.log(`Found number ${searchNumber} at index: ${result}`);
console.log(`______________ _____________________ ______________ `);
console.log(``);
console.log(``);

// Test finding a word (string) in sorted array
let searchString = "Luna";
result = binarySearch(searchString, stringArray);

console.log(`______________ Test finding a word (string) ______________ `);
console.log(stringArray);
console.log(`Found string "${searchString}" at index: ${result}`);
console.log(`______________ ____________________________ ______________ `);
console.log(``);
console.log(``);

