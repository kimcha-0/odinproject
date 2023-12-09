let num = 1234;
let str = "Hello";
let strTwo = 'Single quotes are okay too';
let phrase = `can embed another ${str}`;

// booleans
let nameFieldChecked = true;
let ageFieldChecked = false;

// booleans can be the result of comparisons
let isGreater = 4 > 1; // => true

// in JS, null does not indicate a null pointer, it merely represents an "empty" value
let age = null;

// the "undefined" value indicates that the "value is not assigned"
let unassigned;

// when we declare a variable without initializing it, it is assigned the "undefined" value


// the object Type
typeof undefined; // undefined
typeof 0; // number
typeof 10n; // bigint
typeof true; // boolean
typeof "foo"; // string
typeof Symbol("id"); // symbol type is used to create unique identifiers for objects
typeof Math; // object
typeof null; // object
typeof alert; // function
