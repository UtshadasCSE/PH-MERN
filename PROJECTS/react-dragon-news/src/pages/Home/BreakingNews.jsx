import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const BreakingNews = () => {
  return (
    <div className="bg-[#F3F3F3] p-2 flex items-center">
      <button className="btn bg-[#D72050] text-white rounded">
        Breaking News
      </button>
      <Marquee pauseOnHover={true}>
        <Link to="/home">
          {" "}
          IPL 2024 results: Rajasthan Royals Jos Buttler hits century to deny
          Virat Kohlis RCB
        </Link>
      </Marquee>
    </div>
  );
};

export default BreakingNews;
