let count = 0;
let addToCart = document.getElementsByClassName("btn");
for (const btn of addToCart) {
  btn.addEventListener("click", function () {
    console.log("Ok");
    let cartNumber = document.getElementById("cartNumber");
    let itemShow = document.getElementById("itemShow");
    count = count + 1;
    cartNumber.innerText = count;
    itemShow.innerHTML = `${count} Items`;
  });
}
