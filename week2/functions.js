// zero-arguments function
// a function with side effect

var a = 100;

function sayHello(personName) {
    // body
    console.log("Hello, " + personName); // <-- side effect
    a = 200; // <-- side effect (bad practice)
}

// run or call or execute a function
sayHello("Eugene");

const names = ["John", "Mary", "Greg"];
for (let i = 0; i < names.length; i++) {
    sayHello(names[i]);
}

// pure functions
// depends on its arguments only
function sum(a, b) {
    return a + b;
}

function canSellAlcohol(yob) {
    const age = 2025 - yob;
    if (age >= 18) {
        return "yes";
    } else {
        return "no";
    }
}

console.log(canSellAlcohol(1970));
console.log(canSellAlcohol(2013));

// pure function
function canSellAlcoholBool(yob) {
    const age = 2025 - yob;
    return age >= 18;
}

// not a pure function because of side effect
function printSellAlcoholStatus(personName, yob) {
    console.log(personName + " is allowed " + (canSellAlcoholBool(yob) ? "yes" : "no"));
}

function printSellAlcoholStatusCorrectImplementation(personName, yob) {
    return personName + " is allowed " + (canSellAlcoholBool(yob) ? "yes" : "no");
}

printSellAlcoholStatus("John", 1970);
printSellAlcoholStatus("Mary", 2014);

