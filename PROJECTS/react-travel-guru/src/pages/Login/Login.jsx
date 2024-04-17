import { FaFacebook } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div>
      <div>
        {/* upper container  */}
        <div className="">
          <form
            action=""
            className="w-2/5 mx-auto flex flex-col gap-4 p-14 border border-[#ABABAB] rounded-lg"
          >
            <h2 className="text-2xl font-semibold">Login</h2>
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
              <input type="email" className="grow" placeholder="Email" />
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
              <input type="password" className="grow" placeholder="Password" />
            </label>
            <div className="flex justify-between">
              <div className="flex items-center gap-2">
                <input type="checkbox" name="" id="" />
                <p>Remember Me</p>
              </div>
              <div>
                <p className="text-[#F9A51A] hover:underline cursor-pointer">
                  Forgot password?
                </p>
              </div>
            </div>
            <button type="submit" className="bg-[#F9A51A] p-4 rounded-md">
              Login
            </button>
            <div>
              <p>
                Don’t have an account?
                <span className="text-[#F9A51A] hover:underline cursor-pointer ">
                  {" "}
                  <Link to="/register"> Create an account</Link>
                </span>
              </p>
            </div>
          </form>
        </div>
        {/* lower container  */}
        <div className="w-1/4 mx-auto py-10">
          <div className="divider">OR</div>
        </div>
        <div className="flex flex-col items-center gap-6 w-1/3 mx-auto">
          <button className="btn border border-[#C7C7C7] text-black font-semibold px-7 w-full rounded-full">
            <FaFacebook className="text-[#0165E1] text-2xl" />
            Continue with Facebook
          </button>
          <button className="btn  border border-[#C7C7C7] text-black font-semibold px-7 w-full rounded-full">
            <FcGoogle className="text-2xl" />
            Continue with Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
