import { PropTypes } from "prop-types";
const Card = ({ cards, handleCart }) => {
  const { title, image, price } = cards;

  return (
    <div>
      <div className="flex flex-col justify-between items-center bg-white gap-5 m-7 p-5 rounded-lg ">
        {/* card  */}
        <div>
          <img className=" h-40" src={image} alt="" />
        </div>
        <h2 className="text-lg font-bold">{title.slice(0, 14)}</h2>
        <p className="text-xl font-semibold">${price}</p>
        <button
          onClick={() => handleCart(cards)}
          className="bg-red-400 p-4 rounded-md text-white font-bold shadow-lg hover:shadow-red-500 duration-700"
        >
          Add to cart
        </button>
      </div>
    </div>
  );
};
Card.propTypes = {
  cards: PropTypes.object.isRequired,
  handleCart: PropTypes.func,
};
export default Card;
