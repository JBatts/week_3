let a = 1000
let b = 90
let c = 300

if (a > b && a > c) {
    console.log(`
    A is the biggest number at ${a}
    `)
} else if (b > a && b > c) {
    console.log(`
        B is the biggest number at ${b}
        `)
} else {
    console.log(`
        C is the biggest number at ${c}
        `)
}