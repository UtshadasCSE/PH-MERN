import { PropTypes } from "prop-types";
import { FaCircleCheck } from "react-icons/fa6";
const Feature = ({ feature }) => {
  return (
    <div>
      <div className="flex  items-center gap-2">
        <p>
          <FaCircleCheck className="text-lime-500" />
        </p>
        <p>{feature}</p>
      </div>
    </div>
  );
};
Feature.propTypes = {
  feature: PropTypes.string,
};
export default Feature;
