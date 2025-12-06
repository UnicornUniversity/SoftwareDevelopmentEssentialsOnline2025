const arr = [6, 4, 7, 1, 56];

function incAndPrint(item) {
    console.log(item + 1);
}

// MAP
arr.map(incAndPrint);
const afterMap = arr.map((item) => {
    const newValue = item + 1;
    //console.log(newValue);
    return newValue;
});

// arr stays intact <-- this is important immutability principle
console.log(arr);
console.log("----------------");
//console.log(afterMap);

// (item) => item + 1  <--- this is anonym. function and this is a pure function
const afterMap2 = arr.map((item) => item + 1);
console.log(afterMap2);

const afterMap3 = arr.map((item, index, wholeArr) => {
    console.log("value = " + item);
    console.log("index = " + index);
    console.log("wholeArr = " + wholeArr.length);
    if (index === wholeArr.length - 1) {
        console.log("this is the last element!");
    }
});

console.log("------ for each ----------");
// for each
arr.forEach((item) => console.log(item));

console.log("------ reduce ----------");

let min = arr[0];
for (let i = 0; i < arr.length; i++) {

    min = (min > arr[i]) ? arr[i] : min;

    /*
    if (min > arr[i]) {
        min = arr[i];
    }
    */
}
console.log(min);

const minReduce = arr.reduce((acc, currentValue) => (acc > currentValue) ? currentValue : acc);
console.log(minReduce);

console.log("------ filter ----------");
const arrEven = arr.filter((item) => item % 2 === 0);
console.log(arr);
console.log(arrEven);


