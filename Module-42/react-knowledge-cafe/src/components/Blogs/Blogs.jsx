import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import Blog from "../Blog/Blog";
const Blogs = ({ handleBookmarks, handleReadingTime }) => {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    fetch("blogs.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);
  return (
    <div className="w-3/4 ">
      {/* <h3 className="font-bold text-3xl">Blogs: {blogs.length}</h3> */}

      <div>
        {blogs.map((blog) => {
          return (
            <Blog
              handleReadingTime={handleReadingTime}
              handleBookmarks={handleBookmarks}
              key={blog.id}
              blog={blog}
            />
          );
        })}
      </div>
    </div>
  );
};
Blogs.propTypes = {
  handleBookmarks: PropTypes.func,
  handleReadingTime: PropTypes.func,
};
export default Blogs;
