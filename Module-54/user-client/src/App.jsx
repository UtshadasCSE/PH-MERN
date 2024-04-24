import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const user = { name, email };
    fetch("http://localhost:5000/users", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        const newUser = [...users, data];
        setUsers(newUser);
        form.reset();
      });
  };
  return (
    <>
      <div>
        <h2>User Management System</h2>
        <div>
          <form onSubmit={handleSubmit}>
            <input type="text" name="name" />
            <br />
            <br />
            <input type="email" name="email" />
            <br />
            <br />
            <button type="submit">Store</button>
          </form>
        </div>
        <p>Total Users:{users.length}</p>
        <div>
          {users.map((user) => (
            <p key={user.id}>{user.name}</p>
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
