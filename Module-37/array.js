const products = [
  { name: "iphone 13", brand: "apple", price: 200000 },
  { name: "galaxy s20", brand: "samsung", price: 130000 },
  { name: "poco", brand: "xiaomi", price: 50000 },
  { name: "oneplus 9", brand: "oneplus", price: 100000 },
  { name: "redmi x9", brand: "xiaomi", price: 30000 },
  { name: "infinix 10", brand: "itel", price: 10000 },
];
// how to add new product but ok previous one
const newProduct = { name: "alpha", brand: "tesla", price: 500000 };
const addDoneProduct = [...products, newProduct];
console.log(addDoneProduct);
const remNewProduct = addDoneProduct.filter((check) => check.name !== "alpha");
console.log(remNewProduct);
// how to find something for array of objects
const brands = products.map((products) => products.brand);
console.log(brands);
const price = products.map((products) => products.price);
let sum = 0;
for (let i = 0; i < price.length; i++) {
  sum += price[i];
}
console.log(sum);

products.forEach((product) => console.log(product));
products.forEach((product) => console.log(product.name));

// filter
const lowPrice = products.filter((products) => products.price < 100000);
console.log(lowPrice);
const nPhone = products.find((products) => products.name.includes("9"));
console.log(nPhone);
