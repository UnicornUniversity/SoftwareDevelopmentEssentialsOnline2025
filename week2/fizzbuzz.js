// Task: you have values from 1 to 100;
// 1) print each value
// 2) if a value can be divided on 3 with 0 reminder >> print "fizz"
// 3) if a value can be divided on 5 with 0 reminder >> print "buzz"
// 4) if a value can be divided on both 3 and 5 with 0 reminder >> print "fizzbuzz"

// demonstration of visibility scope
let s = "hello";

for (let i = 1; i <= 100; i++) {
    let s = i.toString() + " : ";
    // inline solution
    // % <-- this returns reminder of division
    s = s + (i % 3 === 0 ? "fizz" : "");
    s += i % 5 === 0 ? "buzz" : "";

    console.log(s);
}

console.log("after loop");
console.log(s);
