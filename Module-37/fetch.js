const student = {
  name: "Mj",
  age: 20,
  country: "Bangladesh",
};

console.log(student);

const studentStringify = JSON.stringify(student);
console.log(studentStringify);
const studentObj = JSON.parse(studentStringify);
console.log(studentObj);

// keys and values

const keys = Object.keys(student);
const values = Object.values(student);
console.log(keys);
console.log(values);

// fetch("url")
//   .then((res) => res.json())
//   .then((data) => console.log(data));

const numbers = [20, 30, 20, 30, 40];
numbers.forEach((number) => console.log(number));
