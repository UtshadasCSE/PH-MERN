import { useState } from "react";
const Stateform = () => {
  const [name, setName] = useState(null);
  const [password, setPassword] = useState(null);
  const [error, setError] = useState(null);
  const handleForm = (e) => {
    e.preventDefault();
    if (password.length < 6) {
      setError("Password must be more than 6 character");
    } else {
      setError("");
    }
  };
  const handleName = (e) => {
    setName(e.target.value);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };
  console.log(name);
  return (
    <div>
      <h2>Statefull Form</h2>
      <div>
        <form
          onSubmit={handleForm}
          className="flex flex-col justify-center items-center gap-4"
        >
          <input
            onChange={handleName}
            type="text"
            name="name"
            className="p-3"
          />
          <input type="email" name="email" className="p-3" />
          <input type="number" name="phone" className="p-3" />
          <input
            onChange={handlePassword}
            type="password"
            name="password"
            className="p-3"
          />
          <input
            type="submit"
            value="Submit"
            className="bg-red-400 p-5 rounded-md text-black"
          />
        </form>
        {password && <p>{error}</p>}
      </div>
    </div>
  );
};

export default Stateform;
