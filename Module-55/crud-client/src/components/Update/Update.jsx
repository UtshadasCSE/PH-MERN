import { useLoaderData } from "react-router-dom";

const Update = () => {
  const loadedUser = useLoaderData();
  const handleUpdateBtn = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const updateUser = { name, email };
    fetch(`http://localhost:3000/users/${loadedUser._id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updateUser),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          alert("OK");
        }
        console.log(data);
      });
  };
  return (
    <div className="h-screen flex flex-col justify-center items-center bg-slate-400">
      <h2>Updated:{loadedUser.name}</h2>
      <div>
        <form onSubmit={handleUpdateBtn}>
          <input type="text" defaultValue={loadedUser?.name} name="name" />
          <br />
          <br />
          <input type="email" name="email" defaultValue={loadedUser?.email} />
          <br />
          <br />
          <input
            className="btn bg-slate-900 text-white p-4 rounded-xl cursor-pointer"
            type="submit"
            value="Updated"
          />
        </form>
      </div>
    </div>
  );
};

export default Update;
