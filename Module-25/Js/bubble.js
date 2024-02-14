let items = document.getElementsByClassName("item");
let addBtn = document.getElementById("addBtn");
for (const item of items) {
  item.addEventListener("click", function (event) {
    event.target.parentNode.removeChild(event.target);
  });
}
addBtn.addEventListener("click", function () {
  let container = document.getElementById("ul-parent");
  let li = document.createElement("li");
  li.classLgiist.add("item");
  li.innerText = "IND Added";
  container.appendChild(li);
});
