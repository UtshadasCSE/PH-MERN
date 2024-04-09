import { Link } from "react-router-dom";
import Navbar from "../shared/Navbar/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";

const Login = () => {
  const { logIn } = useContext(AuthContext);
  const handleLogin = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const email = form.get("email");
    const password = form.get("password");
    logIn(email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        alert("Login Successfully");
        // ...
      })
      .catch((error) => {
        console.log(error);
      });
  };
  // login function

  return (
    <div>
      <Navbar />
      <div className="text-2xl font-semibold text-center py-8 bg-slate-200 rounded-2xl">
        <h2>Log In</h2>
      </div>
      {/* //login form  */}
      <form
        onSubmit={handleLogin}
        action=""
        className="flex flex-col w-2/4 mx-auto gap-3 p-12 bg-[#E7E7E7] my-6 rounded-2xl "
      >
        <label className="input input-bordered flex items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="w-4 h-4 opacity-70"
          >
            <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
            <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
          </svg>
          <input
            name="email"
            type="email"
            className="grow"
            placeholder="Email"
          />
        </label>

        <label className="input input-bordered flex items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="w-4 h-4 opacity-70"
          >
            <path
              fillRule="evenodd"
              d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
              clipRule="evenodd"
            />
          </svg>
          <input
            name="password"
            type="password"
            className="grow"
            placeholder="Password"
          />
        </label>
        <div className="flex justify-between">
          <div>
            <p className="hover:underline cursor-pointer">Forget Password?</p>
          </div>
          <div>
            <p>
              New to website?{" "}
              <span className="hover:underline cursor-pointer text-red-400">
                <Link to="/register"> Register Here</Link>
              </span>{" "}
            </p>
          </div>
        </div>
        <div className="flex justify-center w-full">
          <button
            type="submit"
            className="btn bg-[#240A34] text-white font-semibold w-full"
          >
            Login{" "}
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
