const addCart = () => {
  const productName = document.getElementById("productName");
  const productQuantity = document.getElementById("productQuantity");
  const product = productName.value;
  const quantity = productQuantity.value;
  productName.value = "";
  productQuantity.value = "";
  console.log(product, quantity);
  displayData(product, quantity);
  saveLocalStorage(product, quantity);
};

const displayData = (product, quantity) => {
  const showContainer = document.getElementById("showContainer");
  const li = document.createElement("li");
  li.innerText = `${product} : ${quantity}`;
  showContainer.appendChild(li);
};

const getStoredShoppingCart = () => {
  let cart = {};
  const storedCart = localStorage.getItem("cart");
  if (storedCart) {
    cart = JSON.parse(storedCart);
  }
  return cart;
};
const saveLocalStorage = (product, quantity) => {
  const cart = getStoredShoppingCart();
  cart[product] = quantity;
  const cartStringified = JSON.stringify(cart);
  localStorage.setItem("cart", cartStringified);
};

const displayFromLocalStorage = () => {
  const saved = getStoredShoppingCart();
  console.log(saved);
  for (const product in saved) {
    const quantity = saved[product];
    console.log(product, quantity);
    displayData(product, quantity);
  }
};
displayFromLocalStorage();
