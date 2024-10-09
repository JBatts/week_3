
let hours = 20;
let ot_hours = 0;
let hours_worked = hours + ot_hours;
let payByhour = 12.5;
let pay = (hours * payByhour);
let money = pay

if (ot_hours > 0) {
    money += (ot_hours *(payByhour * 1.5)) // money += adds this overtime amount to the current value of money, which already contains the regular pay.//
}

console.log(`
If you worked ${hours_worked} that is ${hours} hours and ${ot_hours} hours of overtime over the last week you will be paid $${money} for the week
`)