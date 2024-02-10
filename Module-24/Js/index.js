console.log("HEllo DOM");
console.log(document.body);

let student = {
  name: "DJ",
  ability: function () {
    console.log("Reading");
  },
};

console.log(document.getElementsByTagName("h2"));
let liItem = document.getElementsByTagName("li");
console.log(liItem);
for (const item of liItem) {
  console.log(item);
}

let links = document.getElementsByClassName("links");
console.log(links);
for (const item of links) {
  console.log(item);
}
