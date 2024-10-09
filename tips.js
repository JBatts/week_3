// sample inputs
// var is old school but does make it a local var
// let is better, makes it local, and is able to be changed
// const is better still if it will not be changed/modified
let identifier = "value"; // assignment operator like an arrow pointing left <--

let foodCost = 79.25;
let tax = 6.54;
let tip = 12;
// tip = tip.toFixed(2) //include two decimal places
// calculations
let totalDue = foodCost + tax + tip;

// output
// console.log("The total due is " + totalDue);

const first = "Jalen"

console.log(`
My first name is ${first}
Food cost is $${foodCost}
Tax is $${tax}
Tip is $${tip} 
Total Due is $${totalDue}`
);
// console.log("Tip is " + tip);
// console.log("Total Due is " + totalDue)
