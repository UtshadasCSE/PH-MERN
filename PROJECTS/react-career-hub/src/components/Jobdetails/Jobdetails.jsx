import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Jobdetails = () => {
  const jobs = useLoaderData();
  const { id } = useParams();
  const idInt = parseInt(id);
  const job = jobs.find((job) => job.id === idInt);
  console.log(job);
  const handleApplied = () => {
    toast("Your applied successfully!");
  };
  return (
    <div>
      <div className="bg-[#7E90FE0D] relative py-40">
        <h2 className="text-3xl font-bold text-[#1A1919] text-center ">
          Job Details
        </h2>
        <img
          className=" bottom-0 absolute"
          src="../../../public/assets/images/bg1.png"
          alt=""
        />
        <img
          className=" top-0 right-0 absolute"
          src="../../../public/assets/images/bg2.png"
          alt=""
        />
      </div>
      <div className="flex max-sm:flex-col justify-around w-9/12 mx-auto py-32">
        {/* left section  */}
        <div className="w-2/4 max-sm:w-11/12 max-sm:pb-10 flex flex-col gap-4 text-[#1A1919]">
          <p>
            <span className="text-[#1A1919] font-semibold text-lg">
              Job Description:
            </span>
            {job.job_description}
          </p>
          <p>
            <span className="text-[#1A1919] font-semibold text-lg">
              Job Description:
            </span>
            {job.job_responsibility}
          </p>
          <p>
            <span className="text-[#1A1919] font-semibold text-lg">
              Job Description:
            </span>
            {job.educational_requirements}
          </p>
          <p>
            <span className="text-[#1A1919] font-semibold text-lg">
              Job Description:
            </span>
            {job.experiences}
          </p>
        </div>
        {/* right section  */}
        <div>
          <div className="bg-[#7E90FE1A] p-9 rounded-lg">
            <div>
              <h2 className="text-xl font-bold">Job Details</h2>
              <div className="divider"></div>
            </div>
            <div className="flex items-center gap-2">
              <img src="../../../public/assets/icons/money.png" alt="" />
              <p>
                <span className="font-semibold text-lg">Salary:</span>
                {job.salary} (Per Month)
              </p>
            </div>
            <div className="flex items-center gap-2">
              <img src="../../../public/assets/icons/calendar.png" alt="" />
              <p>
                <span className="font-semibold text-lg">Job Title:</span>
                {job.job_title}
              </p>
            </div>
            <div>
              <h2 className="text-xl font-bold pt-6">Contact Information</h2>
              <div className="divider"></div>
            </div>
            <div className="flex items-center gap-2">
              <img src="../../../public/assets/icons/phone.png" alt="" />
              <p>
                <span className="font-semibold text-lg">Phone:</span>
                {job.contact_information.phone}
              </p>
            </div>
            <div className="flex items-center gap-2">
              <img src="../../../public/assets/icons/email.png" alt="" />
              <p>
                <span className="font-semibold text-lg">Email:</span>{" "}
                {job.contact_information.email}
              </p>
            </div>
            <div className="flex items-center gap-2">
              <img src="../../../public/assets/icons/location2.png" alt="" />
              <p>
                <span className="font-semibold text-lg">Address:</span>{" "}
                {job.contact_information.address}
              </p>
            </div>
          </div>
          <div className="flex justify-center py-6 items-center">
            <button
              onClick={handleApplied}
              className="btn text-xl text-white font-semibold bg-[#7E90FE]"
            >
              Apply Now
            </button>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Jobdetails;
