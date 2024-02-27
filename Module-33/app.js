function loadD() {
  const url = "https://jsonplaceholder.typicode.com/users";
  fetch(url)
    .then((response) => response.json())
    .then((data) => displaData(data));
}

function displaData(data) {
  let ul = document.getElementById("user-list");
  console.log(data);
  for (const user of data) {
    console.log(user.username);
    const li = document.createElement("li");
    li.innerText = user.username;
    ul.appendChild(li);
  }
}
