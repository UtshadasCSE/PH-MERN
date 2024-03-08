import { useEffect, useState } from "react";

export default function User() {
  const [users, setUser] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUser(data));
  }, []);

  return (
    <>
      <h3>{users.length}</h3>
    </>
  );
}
