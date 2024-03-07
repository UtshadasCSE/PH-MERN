localStorage.setItem("name", "DJ");

const addLocal = () => {
  let userId = document.getElementById("userId");
  let userValue = document.getElementById("userValue");

  let id = userId.value;
  let value = userValue.value;
  localStorage.setItem(id, value);
};
