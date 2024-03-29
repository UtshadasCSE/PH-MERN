/* eslint-disable react/no-unknown-property */
import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredJobApplication } from "../Utility/localStorage";
import { TiArrowSortedDown } from "react-icons/ti";
import { Helmet } from "react-helmet-async";

const Appliedjobs = () => {
  const jobs = useLoaderData();
  const [appliedJobs, setAppliedJobs] = useState([]);
  const [displayJobs, setDisplayJobs] = useState([]);
  const handleJobsFilter = (filter) => {
    if (filter == "Onsite") {
      const onsiteJobs = appliedJobs.filter(
        (job) => job.remote_or_onsite === "Onsite"
      );
      setDisplayJobs(onsiteJobs);
    } else if (filter === "Remote") {
      const remoteJobs = appliedJobs.filter(
        (job) => (job.remote_or_onsite = "Remote")
      );
      setDisplayJobs(remoteJobs);
    }
  };
  useEffect(() => {
    const storedJobsIds = getStoredJobApplication();
    if (jobs.length > 0) {
      const jobsApplied = [];
      for (const id of storedJobsIds) {
        const job = jobs.find((job) => job.id == id);
        if (job) {
          jobsApplied.push(job);
        }
      }
      setAppliedJobs(jobsApplied);
      setDisplayJobs(jobsApplied);
    }
  }, [jobs]);
  return (
    <>
      <div>
        <Helmet>
          <title>Career Hub | Applied Jobs </title>
        </Helmet>
        <div className="bg-[#7E90FE0D] relative py-40">
          <h2 className="text-3xl font-bold text-[#1A1919] text-center ">
            Applied Jobs
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
      </div>
      <div className="w-3/5 mx-auto py-10 flex  justify-end">
        <div className="dropdown dropdown-end">
          <div tabIndex={0} role="button" className="btn m-1">
            Filter By
            <TiArrowSortedDown />
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li onClick={() => handleJobsFilter("Onsite")}>
              <a>Onsite </a>
            </li>
            <li onClick={() => handleJobsFilter("Remote")}>
              <a>Remote</a>
            </li>
          </ul>
        </div>
      </div>
      {/* grid parent  */}
      <div className="grid grid-cols-1 gap-8 py-8">
        {displayJobs.map((appliedJob) => (
          // {/* grid child -01  */}
          <div
            key={appliedJob.id}
            className="w-[65%] mx-auto flex max-sm:flex-col justify-between items-center border-2 norder-[#E8E8E8] p-8 rounded-xl "
          >
            <div className="flex max-sm:flex-col justify-center items-center gap-7">
              <div className="bg-[#F4F4F4] px-5 py-9  rounded-lg">
                <img className="" src={appliedJob.logo} alt="" />
              </div>
              <div className="flex flex-col gap-2">
                <h2 className="text-xl font-semibold">
                  {appliedJob.job_title}
                </h2>
                <p className="text-[#757575]">{appliedJob.company_name}</p>
                <div className="flex gap-6">
                  <button className="btn text-[#7E90FE] border-[#7E90FE]">
                    {appliedJob.remote_or_onsite}
                  </button>
                  <button className="btn text-[#7E90FE] border-[#7E90FE]">
                    {appliedJob.job_type}
                  </button>
                </div>
                <div className="flex max-sm:flex-col gap-4 text-[#757575]">
                  <div className="flex  items-center">
                    <img
                      src="../../../public/assets/icons/Location.png"
                      alt=""
                    />
                    <span>{appliedJob.contact_information.address}</span>
                  </div>
                  <div className="flex items-center">
                    <img src="../../../public/assets/icons/money.png" alt="" />
                    <span>{appliedJob.salary}</span>
                  </div>
                </div>
              </div>
            </div>
            {/* {button}  */}
            <div>
              <button className="btn text-xl text-white font-semibold bg-[#7E90FE]">
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Appliedjobs;
