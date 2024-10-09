console.log("TUESDAY") // prints the string inside the ""
// single line comment
/* slash-star starts a multiline
wraps a multi line comment
you can have as many stars as you want
star-slash ends a multiline comment */

n = 12; // less formal
let x = 123; // more formal

i = 123 // integer (whole numbers)
f = 99.999 // fraction, float (floating point decimal)

num = 1.1 // just numbers

text = "123.45 a words" // 14 bytes? string of characters - data type string
number = parseFloat(text) // 2 bytes? this makes the data type into numbers
double = number * 2 // now we can do math!
console.log(double) // expecting 246.9


d = new Date() // create a new date/time object (today)
console.log(d)
t = d.getTime()
console.log(t) // ms since 1/1/1970 00:00:00 (Midnight)
// or //
console.log(d.getTime())
// F5 Run/ Debug/ Execute //

counter = 0
counter++ //increment - bump up by one (1)
counter++ // (2)
console.log(counter)
counter-- //decrement - minus one (1)
console.log(counter)

let level = 0
level +=5 // (5)
level +=5 // (10)
level +=5 // (15)
console.log(level) 
level -=5 // (10)
console.log(level) 

console.log(3 + 5) // Plus
console.log(3 - 5) // Minus
console.log(3 * 5) // Multiply
console.log(3 / 5) // Divide