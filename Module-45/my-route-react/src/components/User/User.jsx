import { PropTypes } from "prop-types";
import { Link } from "react-router-dom";
const User = ({ user }) => {
  const { name, phone, email, website, id } = user;
  return (
    <div className="border-2 border-[#FF204E] p-4 rounded-lg flex flex-col">
      <h3 className="text-xl font-semibold">{name}</h3>
      <p>{phone}</p>
      <p>{email}</p>
      <p>{website}</p>
      <Link
        to={`/user/${id}`}
        className="btn bg-[#FF204E] px-4 py-2 text-white rounded-xl mt-3 font-semibold"
      >
        Show Details
      </Link>
    </div>
  );
};
User.propTypes = {
  user: PropTypes.object,
};
export default User;
