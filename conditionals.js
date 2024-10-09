
// Computer values are 0 and 1, AKA off and on
// Logic true or flase, 0 is usually false and non-zero is usually true

// Bool - Boolean (True/False) Data Type - Reasone/Philosophy into math?

// Inputs
hasCar = true
hasLicense = true
console.log(hasLicense)

const meetsAllCirteria = hasLicense && hasCar

// Decision
if(meetsAllCirteria) {
    console.log("Zoom Zoom!");
} else if (hasCar) {
    console.log("Get your license!")
} else {
    console.log("Broke with no license or car")
}

