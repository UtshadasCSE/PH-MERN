let press = document.getElementById("press");
let input = document.getElementById("input");

input.addEventListener("keypress", function (event) {
  console.log(event.target.value);
});
