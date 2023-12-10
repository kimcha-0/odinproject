let year = prompt('In which year was ECMAScript-2015 specification published?', '');

if (year == 2015) alert( 'You are right!' );

let age = prompt("How old are you?", '');
let accessAllowed;

if (age > 18) {
    accessAllowed = true;
} else {
    accessAllowed = false;
}

// we can use the ? operator to do a variable assignment in one line
let accessAllowedOptimized = (age > 18) ? true : false;

// chained ? operators

let result = age < 3 ? 'Hi, baby' : (age < 18) ? 'Hi, teen' : (age < 100) ? 'Hi, less than century years old' : 'What an unusual and impressive age!';

console.log(result);
