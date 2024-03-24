import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Featuredjobs = () => {
  const [jobs, setJobs] = useState([]);
  const [dataLength, setDatalength] = useState(4);
  useEffect(() => {
    fetch("jobs.json")
      .then((res) => res.json())
      .then((data) => setJobs(data));
  }, []);
  console.log(jobs);
  return (
    <div>
      <div className="text-center py-16 flex flex-col gap-4">
        <h2 className="text-4xl font-extrabold text-[#1A1919]">
          Featured Jobs
        </h2>
        <p className="text-[#757575] max-sm:w-3/4 max-sm:mx-auto">
          Explore thousands of job opportunities with all the information you
          need. Its your future
        </p>
      </div>
      {/* grid parent  */}
      <div className="grid grid-cols-2 max-sm:grid-cols-1 max-sm:w-11/12 w-1/2 mx-auto py-6 gap-4">
        {jobs.slice(0, dataLength).map((job) => (
          <div
            key={job.id}
            className="border-2 border-[#E8E8E8] p-8 rounded-lg "
          >
            <div className="flex flex-col items-start gap-4">
              <img src={job.logo} alt="" />
              <h2 className="text-2xl font-bold">{job.job_title}</h2>
              <p className="text-[#757575]">{job.company_name}</p>
              <div className="flex gap-7">
                <button className="btn  border-[#7E90FE] text-[#7E90FE]">
                  {job.remote_or_onsite}
                </button>
                <button className="btn  border-[#7E90FE] text-[#7E90FE]">
                  {job.job_type}
                </button>
              </div>
              <div className="flex justify-between w-full text-[#757575] max-sm:text-sm">
                <div className="flex">
                  <img src="../../../public/assets/icons/Location.png" alt="" />
                  <span>{job.location}</span>
                </div>
                <div className="flex ">
                  <img src="../../../public/assets/icons/money.png" alt="" />
                  <span>Salary : 100K - 150K</span>
                </div>
              </div>
              <Link to={`/job/${job.id}`}>
                <button className="btn text-xl text-white font-semibold bg-[#7E90FE]">
                  View Details
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
      <div className={dataLength === jobs.length && "hidden"}>
        <div className="flex justify-center py-7">
          <button
            onClick={() => setDatalength(jobs.length)}
            className="btn text-xl text-white font-semibold bg-[#7E90FE] hover:bg-[#5356FF] duration-700 hover:shadow-xl hover:shadow-[#7E90FE]"
          >
            See All Jobs
          </button>
        </div>
      </div>
    </div>
  );
};

export default Featuredjobs;
