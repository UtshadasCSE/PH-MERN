import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import useAuth from "./../../hooks/useAuth";
import Swal from "sweetalert2";
import toast, { Toaster } from "react-hot-toast";

const Signup = () => {
  const { createUser, updateUserInfo, googleLogin } = useAuth();
  const navigate = useNavigate();
  const {
    reset,
    register,
    handleSubmit,

    formState: { errors },
  } = useForm();
  //   get form data using react form hook
  const onSubmit = (data) => {
    const userData = {
      email: data.email,
      username: data.username,
      imageURL: data.imageURL,
      password: data.password,
    };
    createUser(data.email, data.password)
      .then((userCredential) => {
        // Signed up
        const user = userCredential.user;
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: `Hello ${user.displayName}, Your account created successfully!`,
          showConfirmButton: false,
          timer: 1500,
        });
        updateUserInfo(data.username, data.imageURL)
          .then(() => {
            // Profile updated!
          })
          .catch((error) => {
            console.log(error);
          });
        reset();
        navigate("/");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
        toast.error(errorCode, errorMessage);
      });
    console.log(userData);
  };
  // social login using google
  const handlegoogleLogin = () => {
    googleLogin()
      .then((result) => {
        const user = result.user;
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: `Welcome back ${user.displayName}`,
          showConfirmButton: false,
          timer: 1500,
        });
        navigate("/");
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        toast.error(errorCode, errorMessage);
      });
  };
  // sign up background image
  const backgroundImageStyle = {
    backgroundImage: "url('https://i.ibb.co/KwDZxk4/register.png')",
  };
  return (
    <div className="py-20 font-poppins">
      <div className="flex w-full max-w-sm mx-auto overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800 lg:max-w-4xl ">
        <div
          className="hidden bg-cover lg:block lg:w-1/2"
          style={backgroundImageStyle}
        ></div>

        <div className="w-full px-6 py-8 md:px-8 lg:w-1/2">
          <div className="flex justify-center mx-auto">
            <img
              className="w-auto h-7 sm:h-14"
              src="https://i.ibb.co/9VdmNg8/joblogo.png"
              alt=""
            />
          </div>

          <p className="mt-3 text-xl text-center text-gray-600 dark:text-gray-200">
            Welcome back!
          </p>

          <a
            onClick={handlegoogleLogin}
            className="cursor-pointer flex items-center justify-center mt-4 text-gray-600 transition-colors duration-300 transform border rounded-lg dark:border-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600"
          >
            <div className="px-4 py-2">
              <svg className="w-6 h-6" viewBox="0 0 40 40">
                <path
                  d="M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.045 27.2142 24.3525 30 20 30C14.4775 30 10 25.5225 10 20C10 14.4775 14.4775 9.99999 20 9.99999C22.5492 9.99999 24.8683 10.9617 26.6342 12.5325L31.3483 7.81833C28.3717 5.04416 24.39 3.33333 20 3.33333C10.7958 3.33333 3.33335 10.7958 3.33335 20C3.33335 29.2042 10.7958 36.6667 20 36.6667C29.2042 36.6667 36.6667 29.2042 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z"
                  fill="#FFC107"
                />
                <path
                  d="M5.25497 12.2425L10.7308 16.2583C12.2125 12.59 15.8008 9.99999 20 9.99999C22.5491 9.99999 24.8683 10.9617 26.6341 12.5325L31.3483 7.81833C28.3716 5.04416 24.39 3.33333 20 3.33333C13.5983 3.33333 8.04663 6.94749 5.25497 12.2425Z"
                  fill="#FF3D00"
                />
                <path
                  d="M20 36.6667C24.305 36.6667 28.2167 35.0192 31.1742 32.34L26.0159 27.975C24.3425 29.2425 22.2625 30 20 30C15.665 30 11.9842 27.2359 10.5975 23.3784L5.16254 27.5659C7.92087 32.9634 13.5225 36.6667 20 36.6667Z"
                  fill="#4CAF50"
                />
                <path
                  d="M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.7592 25.1975 27.56 26.805 26.0133 27.9758C26.0142 27.975 26.015 27.975 26.0158 27.9742L31.1742 32.3392C30.8092 32.6708 36.6667 28.3333 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z"
                  fill="#1976D2"
                />
              </svg>
            </div>

            <span className="w-5/6 px-4 py-3 font-bold text-center">
              Continue with Google
            </span>
          </a>

          <div className="flex items-center justify-between mt-4">
            <span className="w-1/5 border-b dark:border-gray-600 lg:w-1/4"></span>

            <a
              href="#"
              className="text-xs text-center text-gray-500 uppercase dark:text-gray-400 hover:underline"
            >
              or Sign up with email
            </a>

            <span className="w-1/5 border-b dark:border-gray-400 lg:w-1/4"></span>
          </div>
          <form onSubmit={handleSubmit(onSubmit)}>
            {" "}
            <div className="mt-4">
              <label
                className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200"
                htmlFor="LoggingEmailAddress"
              >
                User Name
              </label>
              <input
                {...register("username", { required: true })}
                name="username"
                type="text"
                placeholder="Enter you name"
                className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300"
              />
            </div>
            {errors.username && (
              <span className="text-error">This field is required!</span>
            )}
            <div className="mt-4">
              <label
                className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200"
                htmlFor="LoggingEmailAddress"
              >
                Image URL
              </label>
              <input
                {...register("imageURL", { required: true })}
                name="imageURL"
                type="text"
                placeholder="Enter your profile image URL"
                className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300"
              />
            </div>
            {errors.imageURL && (
              <span className="text-error">This field is required!</span>
            )}
            <div className="mt-4">
              <label
                className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200"
                htmlFor="LoggingEmailAddress"
              >
                Email Address
              </label>
              <input
                {...register("email", { required: true })}
                name="email"
                type="email"
                placeholder="Enter your email"
                className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300"
              />
            </div>
            {errors.email && (
              <span className="text-error">This field is required!</span>
            )}
            <div className="mt-4">
              <div className="flex justify-between">
                <label
                  className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200"
                  htmlFor="loggingPassword"
                >
                  Password
                </label>
              </div>

              <input
                {...register("password", {
                  required: true,
                  minLength: 8,
                  maxLength: 20,
                  pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/,
                })}
                name="password"
                type="password"
                placeholder="*******"
                className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300"
              />
            </div>
            {errors.password?.type === "required" && (
              <span className="text-error">This field is required!</span>
            )}
            {errors.password?.type === "minLength" && (
              <span className="text-error">
                Password length should be 8 characters
              </span>
            )}
            {errors.password?.type === "maxLength" && (
              <span className="text-error">Password length is too long</span>
            )}
            {errors.password?.type === "pattern" && (
              <span className="text-error">
                Please use a uppercase,lowercase,number and special characters
              </span>
            )}
            <div className="pt-2 flex items-center gap-2">
              <input
                {...register("tandc", { required: true })}
                name="tandc"
                type="checkbox"
              />
              <p className="text-gray-300">
                Accept our{" "}
                <span className="hover:underline cursor-pointer">T&C</span>
              </p>
            </div>
            {errors.tandc && (
              <span className="text-error">
                Please accept our terms and condition
              </span>
            )}
            <div className="mt-6">
              <button
                type="submit"
                className="w-full px-6 py-3 text-sm font-medium tracking-wide text-[#E63946] capitalize transition-colors duration-300 transform bg-[#F1FAEE] rounded-lg hover:bg-gray-700 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-50"
              >
                Sign Up
              </button>
            </div>
          </form>

          <div className="flex items-center justify-between mt-4">
            <span className="w-1/5 border-b dark:border-gray-600 md:w-1/4"></span>

            <Link
              to={"/signin"}
              className="text-xs text-gray-500 uppercase dark:text-gray-400 hover:underline"
            >
              or sign in
            </Link>

            <span className="w-1/5 border-b dark:border-gray-600 md:w-1/4"></span>
          </div>
        </div>
      </div>
      <Toaster />
    </div>
  );
};

export default Signup;