import { Link, useLoaderData, useParams } from "react-router-dom";
import Navbar from "../shared/Navbar/Navbar";
import RightSideNav from "../shared/RightSideNav/RightSideNav";
import { FaArrowLeft } from "react-icons/fa6";

const Newsdetails = () => {
  const allNewsData = useLoaderData();
  //   return the current dynamic url id using this
  const { id } = useParams();
  const idInt = parseInt(id);
  //   match the url id to api id
  const selectedNews = allNewsData.find((news) => parseInt(news._id) === idInt);

  return (
    <div>
      <Navbar />
      <div className="py-4">
        <div className="text-2xl font-semibold text-center py-8 bg-slate-200 rounded-2xl">
          <h2>Dragon News</h2>
        </div>
      </div>
      <div className="flex gap-7">
        <div className="flex flex-col items-center gap-10">
          <img
            className=""
            src={
              selectedNews.image_url
                ? selectedNews.image_url
                : "Not Image publish date"
            }
            alt=""
          />
          <p>{selectedNews.details}</p>
          <button className="flex items-center bg-[#D72050] p-4 text-white font-semibold">
            <FaArrowLeft />
            <Link to="/"> All news in this category</Link>
          </button>
        </div>
        <div className="">
          <RightSideNav className="w-full" />
        </div>
      </div>
    </div>
  );
};

export default Newsdetails;
