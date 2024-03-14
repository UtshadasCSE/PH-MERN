import PropTypes from "prop-types";
import { IoBookmarks } from "react-icons/io5";
const Blog = ({ blog, handleBookmarks, handleReadingTime }) => {
  const { title, image, author, publish_date, reading_time_minutes, hashtags } =
    blog;
  console.log(blog);
  return (
    <div className="mb-20">
      <img
        className="w-full rounded-xl"
        src={image}
        alt={`Cover picture of ${title}`}
      />
      <div className="flex justify-between">
        <div className="flex my-4">
          <div>
            <img className="w-14" src={author.image} alt="" />
          </div>
          <div className="ml-4">
            <h3 className="text-2xl font-semibold">{author.name}</h3>
            <p>{publish_date}</p>
          </div>
        </div>
        <div
          className="flex justify-between
        items-center"
        >
          <span className="text-gray-600 font-bold">
            {reading_time_minutes} min read
          </span>
          <button
            onClick={() => handleBookmarks(blog)}
            className="ml-3 text-xl"
          >
            <IoBookmarks />
          </button>
        </div>
      </div>
      <h2 className="text-4xl font-bold">{title}</h2>
      <div>
        <p>
          {hashtags.map((hashtag, idx) => {
            return (
              <span key={idx} className="ml-3 my-3 font-medium text-gray-400">
                <a href="">#{hashtag}</a>
              </span>
            );
          })}
        </p>
        <button
          onClick={() => handleReadingTime(reading_time_minutes)}
          className="text-purple-900 font-bold underline my-3"
        >
          Mark as read
        </button>
      </div>
    </div>
  );
};
Blog.propTypes = {
  blog: PropTypes.object.isRequired,
  handleBookmarks: PropTypes.func,
  handleReadingTime: PropTypes.func,
};
export default Blog;
