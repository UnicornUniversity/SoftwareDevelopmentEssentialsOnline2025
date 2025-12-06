// static method (not required object to be created)
const dtNow = Date.now();
console.log(dtNow);

// constructor
// monthIndex: number == [0..11]
// 11 - not Nov. it is Dec
const dt1 = new Date(2025, 10, 30);
const dt2 = new Date(2025, 10, 31);

console.log(dt1.toString());
console.log(dt2.toString());

console.log(dt1.toISOString());
console.log(dt2.toISOString());

const dt3 = new Date("2025-11-30");
console.log(dt3.toString());

const dt4 = new Date("2025-11-31");
console.log(dt4.toString());

const dt5 = new Date("2025-03-05");
console.log(dt5.toString());

