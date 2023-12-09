// all string methods return a new string; strings are immutable
// template literals respect the line breaks in the source code
let newLine = `One day you finally knew
what you had to do, and began.`;
console.log(newLine);
console.log(`length of newLine: ${newLine.length}`);
console.log(`slice of newLine: ${newLine.slice(5, 10)}`);
console.log(`substring of newLine: ${newLine.substring(5, 10)}`);
console.log(`substr of newLine: ${newLine.substr(5, 10)}`);
console.log(`substr of newLine: ${newLine.substr(5)}`);

let newNewLine = newLine.replace("One", "Some");
console.log(newNewLine);

let regExLine = newLine.replace(/you/g, "You");
console.log("RegEx: " + regExLine);

// replaceAll() is a ES2021 feature and does not work in Internet Explorer
let regExReplace = newLine.replaceAll("you", "Yous");
console.log("replaceAllRegEx: " + regExReplace);

const myString = "1234";
const myNum = Number(myString);
console.log(typeof myNum);

const newNum = 1234;
const newString = String(newNum);
console.log(typeof newString);


let exString = "ABCDEFGHIJKLMNOP";
let lowerExString = exString.toLowerCase();
let upperExString = exString.toUpperCase();
console.log(lowerExString);
console.log(upperExString);

let hello = "Hello";
let world = "World";
let helloWorld = hello.concat(" ", world);
console.log(helloWorld);
