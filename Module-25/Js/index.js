let yellow = document.getElementById("yellow");
let purple = document.getElementById("purple");
purple.addEventListener("click", makePurple);

function makePurple() {
  document.body.style.backgroundColor = "purple";
}
yellow.onclick = makeYellow;

function makeYellow() {
  document.body.style.backgroundColor = "yellow";
}
function makeRed() {
  document.body.style.backgroundColor = "red";
}
