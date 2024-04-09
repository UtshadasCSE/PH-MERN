import Navbar from "../shared/Navbar/Navbar";
import RightSideNav from "../shared/RightSideNav/RightSideNav";
import LeftSideNav from "./../shared/LeftSideNav/LeftSideNav";
import BreakingNews from "./BreakingNews";
import { Link, useLoaderData } from "react-router-dom";
import { CiBookmark, CiShare2 } from "react-icons/ci";
import { FaEye } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Home = () => {
  const newsData = useLoaderData();

  const handleBookmark = (id) => {
    const localStorgeData = localStorage.getItem("bookmark-news");
    if (localStorgeData) {
      const localData = JSON.parse(localStorgeData);
      if (localData.includes(id)) {
        toast.error("Already exist!");
      } else {
        toast("New Bookmarked successfully added");
        //adding new data
        localStorage.setItem(
          "bookmark-news",
          JSON.stringify([...localData, id])
        );
      }
    } else {
      localStorage.setItem("bookmark-news", JSON.stringify([id]));
    }
  };
  return (
    <div>
      <ToastContainer />
      <BreakingNews />
      <Navbar />

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        <div className="border p-3 rounded-lg">
          <LeftSideNav />
        </div>
        <div className="col-span-2 border p-3 rounded-lg">
          <h1 className="font-semibold text-xl pb-3">Dragon News Home</h1>
          {/* here we apear news home data  */}
          {/* parent  */}
          <div className="grid grid-cols-1 gap-3">
            {newsData.map((news) => (
              <div key={news.title} className="border p-3 rounded-lg">
                <div className="flex justify-between items-center bg-[#F3F3F3] p-3 rounded-lg">
                  <div className="flex items-center gap-2">
                    <img
                      className="w-16 rounded-full"
                      src={news.author.img}
                      alt=""
                    />
                    <div className="">
                      <p className="text-[#403F3F] font-semibold">
                        {news.author.name}
                      </p>
                      <p className="text-[#706F6F]">
                        {news.author.published_date}
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-2 font-semibold text-2xl cursor-pointer">
                    <CiBookmark onClick={() => handleBookmark(news._id)} />
                    <CiShare2 />
                  </div>
                </div>
                <div className="py-3">
                  <p
                    className="text-[#403F3F] font-bold
             text-xl"
                  >
                    {news.title}
                  </p>
                  <img
                    className="rounded-lg my-2"
                    src={news.image_url}
                    alt=""
                  />
                  <p className="text-[#706F6F]">
                    {news.details.slice(0, 270)}
                    <Link to={`/article/${news._id}`}>
                      {" "}
                      <span className="text-orange-400 font-semibold cursor-pointer">
                        Read More
                      </span>
                    </Link>
                  </p>
                  <div className="divider"></div>
                  <div>
                    <div className="flex justify-between text-[#706F6F]">
                      <div className="rating">
                        <input
                          type="radio"
                          name="rating-2"
                          className="mask mask-star-2 bg-orange-400"
                        />
                        <input
                          type="radio"
                          name="rating-2"
                          className="mask mask-star-2 bg-orange-400"
                        />
                        <input
                          type="radio"
                          name="rating-2"
                          className="mask mask-star-2 bg-orange-400"
                        />
                        <input
                          type="radio"
                          name="rating-2"
                          className="mask mask-star-2 bg-orange-400"
                          checked
                        />
                        <input
                          type="radio"
                          name="rating-2"
                          className="mask mask-star-2 bg-orange-400"
                        />
                        <p>{news.rating.number}</p>
                      </div>
                      <div className="flex items-center ">
                        <FaEye />
                        <p>{news.total_view}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="border p-3  rounded-lg">
          <RightSideNav />
        </div>
      </div>
    </div>
  );
};

export default Home;
