const salary = 25000;
const height = 70;
const isBCS = true;
// if (salary > 20000) {
//   console.log("Well Groom");
// } else {
//   console.log("Not well Groom");
// }
if (salary >= 30000 || height >= 70) {
  console.log("Well Groom");
} else {
  console.log("Not Well Groom");
}

const name = "prince";
const city = "dhaka";
if ((name == "prince" && city == "dhaka") || isBCS == true) {
  console.log("Match");
} else {
  console.log("Fuck");
}
// complex condition

if ((name == "prince" && salary >= 20000) || isBCS == true) {
  console.log("I will marry Purnima Bhadra");
} else {
  console.log("She will never be mine");
}
