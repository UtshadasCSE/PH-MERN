let handleBtn = document.getElementById("handle-btn");
let update = document.getElementById("update");
handleBtn.addEventListener("click", textChange);
update.addEventListener("click", nameShow);

function textChange() {
  let handleText = document.getElementById("handle");
  handleText.innerHTML = "OKay";
}
function nameShow() {
  let inF = document.getElementById("nameIn");
  let inputBox = document.getElementById("nameIn").value;
  let yname = document.getElementById("yname");
  yname.innerText = inputBox;
  inF.value = "";
}
