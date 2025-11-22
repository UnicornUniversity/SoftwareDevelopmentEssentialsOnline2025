// list, collection, array, vector

// just for demo -- array with values of mixed types
const thisIsArray = [45, 67, 1, 100, "hello"]; // []; <-- empty array

console.log("size = " + thisIsArray.length);

// for ex. Java >> IndexOutOfBound error
for (let i = 0; i < 30; i++) {
    console.log(i.toString() + " : " + thisIsArray[i]);
}

thisIsArray[1] = 200;
console.log(thisIsArray);

thisIsArray[5] = "world";
console.log(thisIsArray);
console.log(thisIsArray[5]);

// for ex. Java >> IndexOutOfBound error
thisIsArray[-1] = 300;
console.log(thisIsArray);
console.log(thisIsArray[-1]);

thisIsArray["some_key"] = 500;
console.log(thisIsArray);
console.log(thisIsArray["some_key"]);

// adds at the end of array
thisIsArray.push("!");
console.log(thisIsArray);
const latestIndexInArray = thisIsArray.length - 1;
console.log(thisIsArray[latestIndexInArray]);

console.log(thisIsArray.pop());
console.log(thisIsArray);

delete thisIsArray["-1"];
console.log(thisIsArray);

console.log("some_key = " + thisIsArray.some_key);

delete thisIsArray.some_key;
console.log(thisIsArray);

for (let i = 0; i < thisIsArray.length; i++) {
    console.log(i.toString() + " : " + thisIsArray[i]);
}

console.log("--------------------------");
// it has no sense but in JS is possible and this is a source of errors
for (let i = 0; i < thisIsArray; i++) {
    console.log(i.toString() + " : " + thisIsArray[i]);
}

// adds at the beginning of array
console.log("-----------------------------");
console.log(thisIsArray.shift());
console.log(thisIsArray);

// spread operator
// unary operator

const words = ["a", "b", "c"];
// adds the array as the whole
//thisIsArray.push(words);

/* trivial implementation
for (const word of words) {
    thisIsArray.push(word);
}
*/

const newArray = [...words, ...thisIsArray]
console.log(newArray);


/*
let x = new Uint8Array(3);
x[5] = 100;   // does NOT throw. (silent no-op)
x.set([1], 2); // throws RangeError

console.log(x.length);
console.log(x);

*/