// Description: This script tests various numeric
// conversion techniques
// Author: Jalen B. Newprogrammer

var a = " 101.1 ";
var b = "55";
var c = "402 Stevens";
var d = "Number 5 ";
var e = true

// a = parseInt(a)
// b = parseInt(b)
// c = parseInt(c)
// d = parseInt(d)

// a = parseFloat(a)
// b = parseFloat(b)
// c = parseFloat(c)
// d = parseFloat(d)

// var a = Number(" 101.1 ");
// var b = Number("55");
// var c = Number("402 Stevens");
// var d = Number("Number 5 ");

a = +a
b = +b
c = +c
d = +d
e = +e

console.log(`
A is ${a} 
B is ${b} 
C is ${c} 
D is ${d}
E is ${e}
`)