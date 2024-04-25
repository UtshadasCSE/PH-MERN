import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import coffeDrink from "../../assets/images/icons/coffeecup.png";
import Swal from "sweetalert2";

const Register = () => {
  const { setUser, createUser } = useContext(AuthContext);
  const handleFormUser = (event) => {
    event.preventDefault();
    const form = event.target;
    const FirstName = form.fName.value;
    const LastName = form.lName.value;
    const email = form.email.value;
    const password = form.password.value;
    if (password.length < 6) {
      alert("Password length should be at least 10");
      return;
    }
    createUser(email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        const createAt = user.metadata.creationTime;
        setUser(user);
        console.log(user);
        Swal.fire({
          position: "top-center",
          icon: "success",
          title: "Account created successfully!",
          showConfirmButton: false,
          timer: 1500,
        });
        const users = { FirstName, LastName, email, createAt };
        fetch("http://localhost:4000/users", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(users),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
          });
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
        // ..
      });
  };
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
              <form
                onSubmit={handleFormUser}
                className="w-full md:w-1/2 py-10 px-5 md:px-10"
              >
                <div className="text-center mb-10">
                  <h1 className="font-bold text-3xl text-gray-900">REGISTER</h1>
                  <p>Enter your information to register</p>
                </div>
                <div>
                  <div className="flex -mx-3">
                    <div className="w-1/2 px-3 mb-5">
                      <label htmlFor="" className="text-xs font-semibold px-1">
                        First name
                      </label>
                      <div className="flex">
                        <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                          <i className="mdi mdi-account-outline text-gray-400 text-lg"></i>
                        </div>
                        <input
                          name="fName"
                          type="text"
                          className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                          placeholder="John"
                        />
                      </div>
                    </div>
                    <div className="w-1/2 px-3 mb-5">
                      <label htmlFor="" className="text-xs font-semibold px-1">
                        Last name
                      </label>
                      <div className="flex">
                        <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                          <i className="mdi mdi-account-outline text-gray-400 text-lg"></i>
                        </div>
                        <input
                          name="lName"
                          type="text"
                          className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                          placeholder="Smith"
                        />
                      </div>
                    </div>
                  </div>
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
                  <div>
                    <p className="flex gap-2 pb-3">
                      <input type="checkbox" name="termsBox" id="" />
                      <span>Accept our T&C</span>
                    </p>
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

export default Register;
