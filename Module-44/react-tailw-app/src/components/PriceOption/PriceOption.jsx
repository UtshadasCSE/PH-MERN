import { PropTypes } from "prop-types";
import Feature from "../Feature/Feature";
const PriceOption = ({ option }) => {
  const { name, price, features } = option;
  return (
    <div>
      <div className="flex flex-col my-3 gap-4  bg-slate-600 p-5 text-white rounded-md justify-center items-center ">
        <h2 className="text-2xl">{name}</h2>
        <p className="font-semibold">{price}</p>
        <div className="flex-grow">
          {features.slice(0, 3).map((feature, index) => (
            <Feature key={index} feature={feature} />
          ))}
        </div>
        <button className="bg-lime-400 p-4 rounded-md text-red-400 font-semibold">
          Buy Now
        </button>
      </div>
    </div>
  );
};
PriceOption.propTypes = {
  option: PropTypes.object,
};
export default PriceOption;
