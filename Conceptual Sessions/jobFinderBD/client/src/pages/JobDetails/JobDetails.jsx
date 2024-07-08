import { useLoaderData } from "react-router-dom";
import { FaDollarSign } from "react-icons/fa6";
import { FaCommentAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaCalendar } from "react-icons/fa";

import useAuth from "./../../hooks/useAuth";
import { useState } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import noUserPhoto from "../../assets/images/no_user.jpeg";

const JobDetails = () => {
  const { user } = useAuth();
  const jobData = useLoaderData();
  const [startDate, setStartDate] = useState(new Date());
  const {
    buyerPhoto,
    buyer_email,
    buyer_name,
    _id,
    job_title,
    category,
    deadline,
    description,
    max_price,
    min_price,
  } = jobData;
  console.log(jobData);
  //collect bidData from the user
  const handleFormSubmission = async (e) => {
    e.preventDefault();
    if (buyer_email === user?.email)
      return toast.error("Action not permitted!");

    const form = e.target;
    const jobId = _id;
    const price = form.price.value;
    if (parseFloat(price) < parseFloat(min_price))
      return toast.error("Your bid price is not valid!");
    const email = form.email.value;
    const deadline = startDate;
    const status = "Pending";
    const comment = form.comment.value;
    const bidData = {
      jobId,
      job_title,
      category,
      price,
      email,
      buyer_email,
      buyer_name,
      deadline,
      status,
      comment,
    };
    try {
      const { data } = await axios.post(
        `${import.meta.env.VITE_API_URL}/bids`,
        bidData
      );
      console.log(data);
      toast.success("Bid data stored successfully!");
    } catch (error) {
      toast.error(error);
    }
  };
  return (
    <div className="py-5 bg-white">
      <div className="py-11 px-5 w-11/12 mx-auto border-2 rounded-md font-poppins">
        <div>
          <p className="text-gray-400 text-lg">Deadline:{deadline}</p>
          <h2 className="text-2xl max-sm:text-xl font-semibold py-2">
            {job_title}
          </h2>
          <p>{description}</p>
          <div className="py-4">
            <div>
              <h3 className="text-lg font-bold underline">Buyer Information</h3>
              <div className="flex max-sm:flex-col">
                {/*buyer profile  */}
                <div className="w-1/2 max-sm:w-11/12 py-5">
                  <div className=" flex items-center ">
                    <div className=" relative shadow-xl overflow-hidden hover:shadow-2xl group rounded-xl p-5 transition-all duration-500 transform">
                      <div className="flex items-center gap-4">
                        <img
                          src={buyerPhoto || noUserPhoto}
                          className="w-32 group-hover:w-36 group-hover:h-36 h-32 object-center object-cover rounded-full transition-all duration-500 delay-500 transform"
                        />
                        <div className="w-fit transition-all transform duration-500">
                          <h1 className="text-gray-600 font-bold">
                            {buyer_name || "Not given"}
                          </h1>
                          <p className="text-gray-400">{buyer_email}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="py-7">
                    <h2 className="text-xl font-semibold">
                      Range: ${min_price}-${max_price}
                    </h2>
                  </div>
                </div>
                {/* form  */}
                <form
                  onSubmit={handleFormSubmission}
                  className="w-1/2 max-sm:w-11/12"
                >
                  <h2 className="font-bold text-2xl py-3">Place a bid</h2>
                  <div className="flex max-sm:flex-col gap-2">
                    <label className="input input-bordered flex items-center gap-2">
                      <FaDollarSign />
                      <input
                        name="price"
                        type="number"
                        className="grow"
                        placeholder="Price"
                        required
                      />
                    </label>
                    <label className="input input-bordered flex items-center gap-2">
                      <MdEmail />
                      <input
                        name="email"
                        type="text"
                        className="grow"
                        defaultValue={user?.email}
                        readOnly
                      />
                    </label>
                  </div>
                  <div className="flex max-sm:flex-col gap-2 py-3">
                    <label className="input input-bordered flex items-center gap-2">
                      <FaCommentAlt />
                      <input
                        name="comment"
                        type="text"
                        className="grow"
                        placeholder="Comment"
                        required
                      />
                    </label>
                    <label className="input input-bordered flex items-center gap-2">
                      <FaCalendar />
                      <DatePicker
                        selected={startDate}
                        onChange={(date) => setStartDate(date)}
                      />
                    </label>
                  </div>
                  <button
                    type="submit"
                    className="btn w-full bg-[#E63946] text-[#F1FAEE]"
                  >
                    PLACE BID
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Toaster />
    </div>
  );
};

export default JobDetails;
