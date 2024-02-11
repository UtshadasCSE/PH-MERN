let comment_value = document.getElementById("cmtValue");
let post = document.getElementById("post");

post.addEventListener("click", updateComment);

function updateComment() {
  let valueIn = comment_value.value;
  let div = document.getElementById("container");
  let p = document.createElement("p");
  p.innerText = valueIn;
  div.appendChild(p);
  comment_value.value = "";
}

let mouse = document
  .getElementById("mouse")
  .addEventListener("mousemove", function () {
    console.log("mouse trigered");
  });
