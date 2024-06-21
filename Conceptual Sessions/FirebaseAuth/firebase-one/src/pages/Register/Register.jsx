const Register = () => {
  const handleFormRegister = (event) => {
    event.preventDefault();
    const form = event.target;
    const userName = form.userName.value;
    const email = form.email.value;
    const password = form.password.value;
    const cPassword = form.cPassword.value;
    const userInfo = { userName, email, password, cPassword };
    console.log(userInfo);
    form.reset();
  };
  return (
    <div className="w-2/4 mx-auto h-screen flex items-center justify-center">
      <form onSubmit={handleFormRegister} className="flex flex-col gap-3">
        <label className="input input-bordered flex items-center gap-2">
          Name
          <input
            name="userName"
            type="text"
            className="grow"
            placeholder="Name"
          />
        </label>
        <label className="input input-bordered flex items-center gap-2">
          Email
          <input
            name="email"
            type="email"
            className="grow"
            placeholder="example@gmail.com"
          />
        </label>
        <label className="input input-bordered flex items-center gap-2">
          Photo URL
          <input
            name="photoURL"
            type="text"
            className="grow"
            placeholder="Photo URL"
          />
        </label>
        <label className="input input-bordered flex items-center gap-2">
          Password
          <input
            name="password"
            type="password"
            className="grow"
            placeholder="Password"
          />
        </label>
        <label className="input input-bordered flex items-center gap-2">
          Confirm Password
          <input
            name="cPassword"
            type="password"
            className="grow"
            placeholder="Confirm Password"
          />
        </label>
        <button type="submit" className="btn btn-outline btn-secondary">
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;
