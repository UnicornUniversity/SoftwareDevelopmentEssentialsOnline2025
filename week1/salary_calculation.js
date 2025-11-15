// TODO change the constants to Yelling Snake notation
// FIXME
const hourRate = 1000; // CZK
const hourPerDay = 8;
const daysPerWeek = 5;
const weeksPerYear = 52;
const taxRate = 0.15; // 15%

const hoursPerWeek = daysPerWeek * hourPerDay;
const hoursPerYear = hoursPerWeek * weeksPerYear;

// gross means with tax
const grossSalaryPerYear = hoursPerYear * hourRate;
// implicit conversion (mixed string and numbers >>>> string)
console.log("gross salary per year: " + grossSalaryPerYear + " CZK");

const taxToBePaidPerYear = grossSalaryPerYear * taxRate;

const netSalaryPerYear = grossSalaryPerYear - taxToBePaidPerYear;

console.log("net salary per year: " + netSalaryPerYear + " CZK");
console.log("net salary per month: " + netSalaryPerYear / 12 + " CZK");

