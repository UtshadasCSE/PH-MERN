let products = [
  { id: 1, name: "Lenevo Laptop", price: 80000 },
  { id: 2, name: "Lenevo Phone", price: 30000 },
  { id: 3, name: "Lenevo Tablet", price: 50000 },
  { id: 4, name: "Nokia Phone", price: 20000 },
  { id: 5, name: "Samsung Phone", price: 70000 },
  { id: 6, name: "Samsung Laptop", price: 100000 },
  { id: 7, name: "Samsung Ac", price: 180000 },
  { id: 8, name: "Iphone", price: 90000 },
];

function searchProduct(products, search) {
  let find = [];
  for (const product of products) {
    if (product.name.includes(search)) {
      find.push(product);
    }
  }
  return find;
}

console.log(searchProduct(products, "Samsung"));
