import { useEffect, useState } from "react";
import { getBlogs } from "../utility/localStorage";
import placeholderImg from "../../src/assets/images/404.jpg";
import { Link } from "react-router-dom";

const Bookmark = () => {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    const storedBlogs = getBlogs();
    setBlogs(storedBlogs);
  }, []);
  return (
    <div className="h-[70vh]">
      <div className="grid justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 w-3/5 mx-auto py-10 ">
        {blogs.map((blogs) => (
          <Link
            to={`/blog/${blogs.id}`}
            key={blogs.id}
            rel="noopener noreferrer"
            className="max-w-sm mx-auto group hover:no-underline focus:no-underline bg-gray-900 hover:border-2"
          >
            <img
              role="presentation"
              className="object-cover w-full rounded h-44 bg-gray-500"
              src={blogs.cover_image || placeholderImg}
            />
            <div className="p-6 space-y-2">
              <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">
                {blogs.title}
              </h3>
              <span className="text-xs text-gray-400">
                {new Date(blogs.published_at).toLocaleDateString()}
              </span>
              <p>{blogs.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Bookmark;
