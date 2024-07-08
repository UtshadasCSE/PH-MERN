import { Link } from "react-router-dom";

const JobCard = ({ job }) => {
  const {
    _id,
    job_title,
    category,
    deadline,
    description,
    max_price,
    min_price,
  } = job;
  return (
    <div className="py-3">
      {/* parent  */}
      <Link
        to={`/jobs/${_id}`}
        className="font-poppins flex flex-col gap-2 w-96 py-5 border-2 px-6 rounded-xl"
      >
        <div className="flex justify-between">
          <p className="text-gray-600">Deadline: {deadline}</p>
          <p className="bg-[#E63946] text-[#F1FAEE] font-semibold px-3 rounded-full">
            {category}
          </p>
        </div>
        <h2 className="text-xl font-bold">{job_title}</h2>
        <p title={description} className="text-justify">
          {description.slice(0, 80)}......
        </p>
        <h2 className="font-semibold text-lg">
          Range:${min_price} - ${max_price}
        </h2>
      </Link>
    </div>
  );
};

export default JobCard;
