import { PropTypes } from "prop-types";
const Link = ({ route }) => {
  return (
    <div>
      <li className="mr-3 hover:bg-red-300 p-3 hover:rounded-lg duration-700">
        <a href={route.path}>{route.name}</a>
      </li>
    </div>
  );
};
Link.propTypes = {
  route: PropTypes.array,
};
export default Link;
