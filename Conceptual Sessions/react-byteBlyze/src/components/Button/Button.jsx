import "./Button.css";
import { PropTypes } from "prop-types";
const Button = ({ text }) => {
  return (
    <div>
      <button className="button">{text}</button>
    </div>
  );
};
Button.propTypes = {
  text: PropTypes.text,
};
export default Button;
