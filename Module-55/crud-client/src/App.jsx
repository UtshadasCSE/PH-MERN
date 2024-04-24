function App() {
  const handleFormSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const user = { name, email };
    // Make a POST request using the Fetch API
    fetch("http://localhost:3000/users", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          alert("Data stored");
          form.reset();
        }
      });
  };
  return (
    <>
      <div className="h-screen flex flex-col items-center justify-center bg-slate-500">
        <h2>Simple Crudd</h2>
        <form onSubmit={handleFormSubmit} className="flex flex-col gap-2">
          <input type="text" name="name" />
          <input type="email" name="email" />
          <button type="submit" className="btn bg-red-300 p-3 rounded-md">
            Add User
          </button>
        </form>
      </div>
    </>
  );
}

export default App;
