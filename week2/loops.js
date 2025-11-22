// a loop with predefined number of iterations

// "while" i < 5
// i++ <-- action needs to be done after each iteration

let i = 1000;
let total = 2000;

for (let i = 0; i < 5; i++) {
    console.log(i);
    console.log(total);
}

console.log("---------------------");

for (let i = 4; i >= 0; i--) {
    console.log(i);
}

console.log("---------------------");

// what to do if we don't know the number of iterations
let k = 0;
while (k < 5) {
    console.log(k);
    k++;
}

console.log("-- do while ---------------------");

let j = 100;
do {
    console.log(j);
    j++;
} while (j < 5);

console.log("---------------------");

const s = "hello world";
for (const letter of s) {
    console.log(letter);
}