// conditions

// == OR === for comparison
// == implicitly converts
if ("5" == 5) {
    // mandatory block
    // what to do if the equation is TRUE
    console.log("5 string is equal to 5 number");
} else if ("6" == 5) {
    // optional
    // another specific condition
} else {
    // optional
    // what to do if the equation is FALSE
}

// it is strict to data types
if ("5" === 5) {
    console.log("5 string is equal to 5 number");
} else {
    console.log("5 string is NOT equal to 5 number");
}

// != !==
if ("5" !== 5) {
    console.log("5 string is NOT equal to 5 number");
} else {
    console.log("5 string is equal to 5 number");
}
