import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import app from "../../Utility/firebase";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaEye, FaEyeSlash } from "react-icons/fa6";

const Signin = () => {
  const [signinError, setSigninError] = useState("");
  const [showPass, setShowPass] = useState(false);
  const auth = getAuth(app);
  const handleToastFy = () => {
    toast("Successfully user created");
  };
  const handleSignIn = (e) => {
    e.preventDefault();
    setSigninError("");
    const email = e.target.email.value;
    const password = e.target.password.value;
    const terms = e.target.terms.checked;
    if (password.length < 6) {
      setSigninError("Bsdk Password hack possible!!!");
      return;
    } else if (!/[A-Z]/.test(password)) {
      setSigninError("Your password should be one upperCase");
      return;
    } else if (!terms) {
      setSigninError("Bsdk terms and condition select quickly");
      return;
    }
    // here apply firebase code
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed up
        const user = userCredential.user;
        console.log(user);
        handleToastFy();
      })
      .catch((error) => {
        console.log(error);
        setSigninError(error.message);
      });
  };
  return (
    <div className="flex flex-col h-screen">
      <ToastContainer />
      <h2 className="text-3xl font-bold text-center">Sign In </h2>
      <form
        onSubmit={handleSignIn}
        action=""
        className="flex flex-col justify-center items-center gap-4 h-5/6 "
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
            type="text"
            className="grow"
            name="email"
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
            type={showPass ? "text" : "password"}
            className="grow"
            name="password"
            placeholder="Password"
          />
        </label>
        <span onClick={() => setShowPass(!showPass)}>
          {showPass ? <FaEyeSlash /> : <FaEye />}
        </span>
        <div className="flex  items-center  gap-3">
          <input type="checkbox" name="terms" />
          <label htmlFor="">Accept our terms and conditions</label>
        </div>
        <input
          type="submit"
          value="Submit"
          className="btn btn-active btn-secondary"
        />
      </form>
      <div>{signinError && <p className="text-red-600">{signinError}</p>}</div>
    </div>
  );
};

export default Signin;
