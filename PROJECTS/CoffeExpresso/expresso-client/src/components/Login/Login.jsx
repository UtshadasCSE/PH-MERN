import { Link } from "react-router-dom";
import coffeDrink from "../../assets/images/icons/coffeecup.png";
const Login = () => {
  return (
    <div>
      <div>
        <script
          src="https://cdn.jsdelivr.net/gh/alpinejs/alpine@v2.x.x/dist/alpine.js"
          defer
        ></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/zxcvbn/4.4.2/zxcvbn.js"></script>

        <div className="w-8/12 max-sm:w-10/12 mx-auto min-h-screen  flex items-center justify-center px-5 py-5">
          <div className="bg-gray-100 text-gray-500 rounded-3xl shadow-xl w-full overflow-hidden">
            <div className="md:flex w-full">
              <div className="hidden md:block w-1/2 bg-[#331A15] py-10 px-10">
                <img src={coffeDrink} alt="" />
              </div>
              <form className="w-full md:w-1/2 py-10 px-5 md:px-10">
                <div className="text-center mb-10">
                  <h1 className="font-bold text-3xl text-gray-900">
                    Login Now
                  </h1>
                  <p>Enter your information to Login</p>
                </div>
                <div>
                  <div className="flex -mx-3"></div>
                  <div className="flex -mx-3">
                    <div className="w-full px-3 mb-5">
                      <label htmlFor="" className="text-xs font-semibold px-1">
                        Email
                      </label>
                      <div className="flex">
                        <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                          <i className="mdi mdi-email-outline text-gray-400 text-lg"></i>
                        </div>
                        <input
                          name="email"
                          type="email"
                          className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                          placeholder="johnsmith@example.com"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="flex -mx-3">
                    <div className="w-full px-3 mb-3">
                      <label htmlFor="" className="text-xs font-semibold px-1">
                        Password
                      </label>
                      <div className="flex">
                        <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                          <i className="mdi mdi-lock-outline text-gray-400 text-lg"></i>
                        </div>
                        <input
                          name="password"
                          type="password"
                          className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                          placeholder="************"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="flex -mx-3">
                    <div className="w-full px-3 mb-5">
                      <button
                        type="submit"
                        className="block w-full max-w-xs mx-auto bg-[#D2B48C] hover:bg-[#331A15] focus:bg-[#331A15] text-white rounded-lg px-3 py-3 font-semibold"
                      >
                        REGISTER NOW
                      </button>
                    </div>
                  </div>
                  <div className="flex justify-center">
                    <p>
                      Dont have an account?{" "}
                      <Link
                        to="/register"
                        className="text-[#D2B48C] font-semibold hover:underline cursor-pointer"
                      >
                        Register now
                      </Link>
                    </p>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>

        <div className="flex items-end justify-end fixed bottom-0 right-0 mb-4 mr-4 z-10">
          <div>
            <a
              title="Buy me a beer"
              href="https://www.buymeacoffee.com/scottwindon"
              target="_blank"
              className="block w-16 h-16 rounded-full transition-all shadow hover:shadow-lg transform hover:scale-110 hover:rotate-12"
            >
              <img
                className="object-cover object-center w-full h-full rounded-full"
                src="https://i.pinimg.com/originals/60/fd/e8/60fde811b6be57094e0abc69d9c2622a.jpg"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
