import "./bottle.css";
const Bottle = ({ bottle, handleBottlesCart }) => {
  const { name, img, price } = bottle;
  return (
    <div className="bottle">
      <img src={img} alt="" />
      <p>Name:{name}</p>
      <p>Price:${price}</p>
      <button onClick={() => handleBottlesCart(bottle)}>Purchase</button>
    </div>
  );
};

export default Bottle;
