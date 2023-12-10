let result = undefined || null | 1;
// result is assigned the first value that is true
true || console.log("true");
false || console.log("false");

// && finds the first false values
let and = 1 && 2 && null && 3;
console.log(and);
console.log(1 && 2 && 3 && 4);
