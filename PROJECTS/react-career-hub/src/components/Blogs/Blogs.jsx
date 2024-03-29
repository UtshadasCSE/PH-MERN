import { useLoaderData } from "react-router-dom";
import { CiCalendar } from "react-icons/ci";
import { useState } from "react";
import { Helmet } from "react-helmet-async";

const Blogs = () => {
  const blogs = useLoaderData();
  const [showall, setShowall] = useState(8);
  const handleShowAll = () => {
    setShowall(blogs.length);
  };
  return (
    <div>
      <Helmet>
        <title>Career Hub | Blogs</title>
      </Helmet>
      <div className="bg-[#7E90FE0D] relative py-40">
        <h2 className="text-3xl font-bold text-[#1A1919] text-center ">
          Our Blogs
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
      {/* Blogs  */}
      <div>
        {/* blogs parent grid  */}
        <div className="bg-gray-100 py-14">
          <div className=" w-4/5 mx-auto  grid grid-cols-4 gap-8">
            {blogs.slice(0, showall).map((blog) => (
              <div key={blog.id} className="mx-auto px-5">
                <div className="max-w-xs cursor-pointer rounded-lg bg-white p-2 shadow duration-150 hover:scale-105 hover:shadow-md">
                  <img
                    className="w-full rounded-lg object-cover object-center"
                    src={blog.image}
                    alt="product"
                  />
                  <p className="my-4 pl-4 font-bold text-gray-500">
                    {blog.title}
                  </p>
                  <p className="flex items-center mb-4 ml-4 text-xl font-semibold text-gray-800">
                    <CiCalendar />

                    {blog.published_date
                      ? blog.published_date
                      : "No publish date"}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className={showall == blogs.length && "hidden"}>
            <div className="flex justify-center py-5">
              <button
                onClick={handleShowAll}
                className="btn btn-outline btn-secondary"
              >
                Show All
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
