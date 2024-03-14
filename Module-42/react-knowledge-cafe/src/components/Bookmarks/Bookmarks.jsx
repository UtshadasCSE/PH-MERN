import { PropTypes } from "prop-types";
import Bookmark from "../Bookmark/Bookmark";
const Bookmarks = ({ bookmarks, readingtime }) => {
  return (
    <div className="bg-gray-400 px-7 py-4 rounded-md w-4/5">
      <div className="flex justify-between items-center max-sm:flex-col">
        <h2 className="mb-5 font-bold text-2xl">
          Bookmarked:{bookmarks.length}
        </h2>
        <h2 className="mb-5 font-bold text-2xl text-purple-800">
          Reading Time:{readingtime}
        </h2>
      </div>

      <div className="bg-white p-6 rounded-lg ">
        {bookmarks.map((bookmark) => {
          return <Bookmark key={bookmark.id} bookmark={bookmark} />;
        })}
      </div>
    </div>
  );
};
Bookmarks.propTypes = {
  bookmarks: PropTypes.array.isRequired,
  readingtime: PropTypes.number,
};
export default Bookmarks;
