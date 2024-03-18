import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Registration = () => {
  const [name, setName] = useState("");
  const [email, setEmal] = useState("");
  const [password, setPassword] = useState("");
  const [country, setCountry] = useState("");
  const [isSubmit, setIsSubmit] = useState(false);
  const [isChecked, setIsChecked] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!isChecked) {
      return;
    }
    const user = {
      name: name,
      email: email,
      password: password,
      country: country,
    };
    setIsSubmit(true);
    toast("Form successfully submitted");
  };
  return (
    <div>
      <ToastContainer />
      <div className="w-full mx-auto flex flex-col gap-5 justify-center items-center">
        <form
          onSubmit={(event) => handleSubmit(event)}
          action=""
          className="flex flex-col justify-center gap-3"
        >
          <label className="input input-bordered flex items-center gap-2">
            Name
            <input
              onChange={(e) => setName(e.target.value)}
              type="text"
              className="grow"
              placeholder="Your name"
              required
            />
          </label>
          <label className="input input-bordered flex items-center gap-2">
            Email
            <input
              onChange={(e) => setEmal(e.target.value)}
              type="email"
              className="grow"
              placeholder="youremail@gmail.com"
              required
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
                fill-rule="evenodd"
                d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                clip-rule="evenodd"
              />
            </svg>
            <input
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              className="grow"
              placeholder="Your password"
              required
            />
          </label>
          <select
            onChange={(e) => setCountry(e.target.value)}
            className="select select-success w-full max-w-xs"
          >
            <option disabled selected>
              Where are you from?
            </option>
            <option>Bangladesh</option>
            <option>India</option>
            <option>Pakistan</option>
            <option>China</option>
            <option>Canada</option>
            <option>Japan</option>
            <option>South korea</option>
          </select>
          <div className="form-control">
            <label className="cursor-pointer label">
              <span className="label-text font-medium text-[#DFF5FF]">
                Agree with our term and conditions
              </span>
              <input
                onChange={(e) => {
                  setIsChecked(e.target.checked);
                }}
                type="checkbox"
                className="checkbox checkbox-warning"
              />
            </label>
          </div>
          <button className="btn btn-active text-white btn-accent bg-[#67C6E3]">
            Sign Up
          </button>
        </form>
        {/* modal section  */}
        {isSubmit && (
          <div className="bg-[#DFF5FF] fixed max-sm:h-[50%] h-[50%] w-[50%] max-sm:w-[70%] flex justify-center rounded-lg p-5">
            <div className="flex flex-col justify-center gap-4">
              <h3 className="font-bold text-xl text-center">
                Your information
              </h3>
              <div>
                <p className="underline font-medium mt-1 text-[#5356FF]">
                  Name:{name}
                </p>
                <p className="underline font-medium mt-1 text-[#5356FF]">
                  Email:{email}
                </p>
                <p className="underline font-medium mt-1 text-[#5356FF]">
                  password:{password}
                </p>
                <p className="underline font-medium mt-1 text-[#5356FF]">
                  Country:{country}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Registration;
