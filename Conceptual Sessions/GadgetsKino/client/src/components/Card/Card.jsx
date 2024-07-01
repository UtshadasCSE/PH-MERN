import { Link } from "react-router-dom";
import placeholderImg from "../../assets/image/404img.jpg";
import { FaEyeSlash } from "react-icons/fa";

const Card = ({ id, title, imgSrc }) => {
  return (
    <div className="font-poppins">
      <div className="flex flex-col gap-3 p-5 border-2 rounded-xl">
        <div className="p-2 bg-[#7209B7] rounded-lg">
          <img
            src={imgSrc || placeholderImg}
            alt=""
            className="h-36 w-full rounded-lg"
          />
        </div>
        <h2>{title || "Title not found!"}</h2>
        <Link
          to={`/details/${id}`}
          className="btn btn-ghost bg-[#F72585] text-white"
        >
          <FaEyeSlash />
          Details
        </Link>
      </div>
    </div>
  );
};

export default Card;
