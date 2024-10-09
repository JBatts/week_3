// Logical Operators
// && (And) All must be true
// || (Or) Either is true
// == (Comparison) Are they same
// === (Strict Comparison) Compares both value and datatype
// != (Not Equal)
// !== (Strict Not Equal)
// >= (Greater than or equal to)
// <= (less than or equal to)
// > (Great than)
// < (Less than) 

// Inputs
let height = 200
let minimum = 55

// Precalcualating the boolean expression into variable
let canRide = height >= minimum

console.log("START")

if(canRide) {
    console.log("Time to ride the ride!");
} else {
    console.log("Too short Pee-Wee. You are only " + height + "inches tall shorty");
}

console.log("END")