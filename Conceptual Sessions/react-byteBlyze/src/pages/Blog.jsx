import { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import placeholderImg from "../../src/assets/images/404.jpg";
import { useNavigation } from "react-router-dom";
import Loader from "../components/Loader";

const Blog = () => {
  const blogs = useLoaderData();
  const navigation = useNavigation();
  const [showMore, setShowMore] = useState(9);
  const handleShowMoreBtn = () => {
    const blogLen = blogs.length;
    setShowMore(blogLen);
  };
  if (navigation.state == "loading") {
    return <Loader />;
  }
  return (
    <div>
      <div>
        <section className=" text-gray-100">
          <div className="container max-w-6xl p-6 mx-auto space-y-6 sm:space-y-12">
            <Link
              rel="noopener noreferrer"
              to={`/blog/${blogs[0].id}`}
              className="block max-w-sm gap-3 mx-auto sm:max-w-full group hover:no-underline focus:no-underline lg:grid lg:grid-cols-12 bg-gray-900 hover:border-2"
            >
              <img
                src={blogs[0].cover_image || placeholderImg}
                alt=""
                className="object-cover w-full h-64 rounded sm:h-96 lg:col-span-7 bg-gray-500"
              />
              <div className="p-6 space-y-2 lg:col-span-5">
                <h3 className="text-2xl font-semibold sm:text-4xl group-hover:underline group-focus:underline">
                  {blogs[0].title}
                </h3>
                <span className="text-xs text-gray-400">
                  {new Date(blogs[0].published_at).toLocaleDateString()}
                </span>
                <p>{blogs[0].description}</p>
              </div>
            </Link>
            <div className="grid justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {/* card 1  */}
              {blogs.slice(0, showMore).map((blog) => (
                <Link
                  to={`/blog/${blog.id}`}
                  key={blog.id}
                  rel="noopener noreferrer"
                  className="max-w-sm mx-auto group hover:no-underline focus:no-underline bg-gray-900 hover:border-2"
                >
                  <img
                    role="presentation"
                    className="object-cover w-full rounded h-44 bg-gray-500"
                    src={blog.cover_image || placeholderImg}
                  />
                  <div className="p-6 space-y-2">
                    <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">
                      {blog.title}
                    </h3>
                    <span className="text-xs text-gray-400">
                      {new Date(blog.published_at).toLocaleDateString()}
                    </span>
                    <p>{blog.description}</p>
                  </div>
                </Link>
              ))}
            </div>
            <div
              className={
                showMore == blogs.length ? "hidden" : `flex justify-center`
              }
            >
              <button
                onClick={handleShowMoreBtn}
                type="button"
                className="px-6 py-3 text-sm rounded-md hover:underline bg-gray-900 text-gray-400"
              >
                Load more posts...
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Blog;
