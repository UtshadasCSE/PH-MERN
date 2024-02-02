// condition ? do something when its true : do something when its false

const age = 12;

age >= 18 ? console.log("you can vote") : console.log("You can't vote");

let price = 500;
const isLeader = false;

price = isLeader == true ? (price = 0) : (price += 200);

console.log(price);
