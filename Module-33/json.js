const student = { id: 109, name: "Utsha", city: "Cumilla" };
console.log(student);
const strFy = JSON.stringify(student);
console.log(strFy);

const shop = {
  owner: "DJ",
  name: "DJ Store",
  address: {
    location: "Homna,Dhaka",
    city: "Bangladesh",
  },
  item: ["mac", "iphone", "android", "monitro"],
  isOpen: true,
  isNew: false,
};
console.log(shop);
const shopJson = JSON.stringify(shop);
console.log(JSON.parse(shopJson));
console.log(typeof shopJson);
