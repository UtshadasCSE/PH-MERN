const colors = {
  red: "#ff0000",
  green: "#00ff00",
  blue: "#0000ff",
  "golden rod": "#daa520",
};

console.log(colors["golden rod"]);

const car = {
  make: "Toyota",
  model: "Corolla",
  year: 2020,
  "passenger capacity": 5,
};

const student = {
  name: "Hamim Sakep",
  id: 5421,
  physics: {
    subject: "HSC Physics",
    author: "Shahjahan Tapan",
    marks: 30,
  },
};
console.log(student.physics);

let student2 = {
  name: "Ariana Grande",
  age: 21,
  city: "Gaibandha",
  isStudent: true,
};
let keySt2 = Object.keys(student2);
console.log(keySt2.length);

let myObject = {
  name: "John Doe",
  age: 25,
  city: "Example City",
  isStudent: true,
};

for (const key in myObject) {
  console.log(key, ":", myObject[key], typeof myObject[key]);
}
