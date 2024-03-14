import { PropTypes } from "prop-types";
const Bookmark = ({ bookmark }) => {
  const { title } = bookmark;
  return (
    <div className="bg-slate-400 p-4 rounded-md mt-4">
      <h2 className="font-semibold text-xl">{title}</h2>
    </div>
  );
};
Bookmark.propTypes = {
  bookmark: PropTypes.object,
};
export default Bookmark;
