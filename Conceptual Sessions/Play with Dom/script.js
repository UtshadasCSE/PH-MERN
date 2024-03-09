const ulCon = document.getElementById("ul");

console.log(ulCon.childNodes);

let liAll = document.querySelectorAll("li");
for (const li of liAll) {
  console.log(li.textContent);
}
