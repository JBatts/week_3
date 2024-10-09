
let hours = 20;
let ot_hours = hours - 40;
let hours_worked = hours + ot_hours;
let payByhour = 12.5;
let pay = (hours * payByhour);
let money = pay

if (ot_hours > 0) {
    money += (ot_hours *(payByhour * 1.5)) // money += adds this overtime amount to the current value of money, which already contains the regular pay.//
} else {
    ot_hours = 0
}



console.log(`
If you worked ${hours} that is ${ot_hours} hours of overtime over the last week you will be paid $${money} for the week
`)