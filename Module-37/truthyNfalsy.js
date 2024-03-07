let assign = 10;
if (assign) {
  console.log(assign * 3);
} else {
  assign = 0;
  console.log(assign);
}

let smallIt = assign ? assign * 3 : (assign = 0);
console.log(smallIt);

let name = "";
const nameStatus = !name ? "Chitiya tera name nahi hai" : "Good Name";
console.log(nameStatus);

const isActive = true;
const showUser = () => console.log("Display");
const hideUser = () => console.log("Hide");
isActive ? showUser() : hideUser();
