import { useState } from "react";
import { Link, Outlet, useLoaderData, useNavigation } from "react-router-dom";
import Loader from "../components/Loader";
import { FaRegUser } from "react-icons/fa";
import { MdBookmarkAdded } from "react-icons/md";
import { saveBlogs } from "../utility/localStorage";

const Blogdetails = () => {
  const blog = useLoaderData();
  const navigation = useNavigation();
  const [tabIndex, setTabIndex] = useState(0);
  const {
    title,
    comments_count,
    published_at,

    public_reactions_count,
    reading_time_minutes,
  } = blog;
  if (navigation.state == "loading") {
    return <Loader />;
  }
  //handle bookmark
  const handleBookMark = (blog) => {
    saveBlogs(blog);
  };
  return (
    <div>
      <div className="max-w-3xl px-6 py-16 mx-auto space-y-12">
        <article className="space-y-8  text-gray-600">
          <div className="space-y-6">
            <h1 className="text-4xl font-bold md:tracking-tight md:text-5xl">
              {title}
            </h1>
            <div className="flex flex-col items-start justify-between w-full md:flex-row md:items-center text-gray-400">
              <div className="flex items-center md:space-x-2">
                <p className="text-sm">
                  {reading_time_minutes} min read •{" "}
                  {new Date(published_at).toLocaleDateString()}
                </p>
              </div>
              <p className="flex-shrink-0 mt-3 text-sm md:mt-0">
                {comments_count} comments • {public_reactions_count} views
              </p>
            </div>
          </div>
          {/* tabs  */}
          <div className="flex items-center -mx-4 overflow-x-auto overflow-y-hidden sm:justify-start flex-nowrap w-full">
            <Link
              to={""}
              onClick={() => setTabIndex(0)}
              rel="noopener noreferrer"
              className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2 ${
                tabIndex === 0 ? "border border-b-0" : "border-b"
              } rounded-t-lg dark:border-gray-600 dark:text-gray-900`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-4 h-4 text-slate-600"
              >
                <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
                <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
              </svg>

              <span className="text-slate-600 font-semibold">Content</span>
            </Link>
            <Link
              to={`author`}
              onClick={() => setTabIndex(1)}
              rel="noopener noreferrer"
              className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2 ${
                tabIndex === 1 ? "border border-b-0" : "border-b"
              } rounded-t-lg dark:border-gray-600 dark:text-gray-900`}
            >
              <FaRegUser />
              <span className="text-slate-600 font-semibold">Author</span>
            </Link>
            {/* bookmark  */}
            <div
              onClick={() => handleBookMark(blog)}
              className=" bg-primary hover:bg-red-300 rounded-full p-2 duration-700 ml-3"
            >
              {" "}
              <MdBookmarkAdded className="text-2xl text-white font-bold  cursor-pointer " />
            </div>
          </div>
          <Outlet />
        </article>
        <div></div>
      </div>
    </div>
  );
};

export default Blogdetails;
