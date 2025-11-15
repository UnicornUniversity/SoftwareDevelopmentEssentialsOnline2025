// implicit conversion
// explicit conversion

// explicit conversion
const x = 100;
const xString = x.toString();

const yString = "200.25";
const yInt = parseInt(yString);
const yFloat = parseFloat(yString);

// implicit conversion
console.log("yInt = " + yInt);
console.log("yFloat = " + yFloat);

console.log("16" + 10);
console.log(16 + "10");

console.log("16" - 10);
console.log(16 - "10");
console.log(16 - "10a"); // NaN = not a number

console.log("5" + - 2);
console.log("5" - - 2);

let z1 = 1;
let z2 = 1;
// ++ --

console.log(z1++);
console.log(z1);
console.log(++z2);
console.log(z2);



