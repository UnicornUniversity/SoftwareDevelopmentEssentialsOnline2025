// JSON = JS notation

// NOTE: serialization/deserialization

// key-value pair
// key : value
const student1 = {
    "name": "John",
    "surname": "Smith",
    age: 27,
    // use quotas
    //clothes-size: XXL

    "42something" : "42",

    // nested
    "address": {
        "city": "Prague",
        "street": "Manesova"
    }
};

console.log(student1);
// dot-notation
console.log(student1.name);
console.log(student1.age);
console.log(student1["age"]);
console.log(student1["42something"]);
console.log(student1.address);
console.log(student1.address.city);
console.log(student1["address"]);
console.log(student1["address"]["city"]);

// useful
const colName = "address";
console.log(student1[colName]);

const student2 = {
    "name": "Mary",
    age: 35,
};

const student3 = {
    "name": "Greg",
    age: 21,
};

const students = [student1, student2, student3];

const youngestStudent = students.reduce((youngestSt, currentStudent) => (youngestSt.age > currentStudent["age"]) ? currentStudent : youngestSt);
console.log(youngestStudent);
