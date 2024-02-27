function loadPost() {
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((res) => res.json())
    .then((data) => displayLoadPost(data));
}

function displayLoadPost(data) {
  const postDiv = document.getElementById("postDiv");
  for (const post of data) {
    console.log(post);
    const div = document.createElement("div");
    div.innerHTML = `
    <h1>${post.id}</h1>
    <h3>${post.title}</h3>
    <p>${post.body}</p>
    `;
    postDiv.appendChild(div);
  }
}
