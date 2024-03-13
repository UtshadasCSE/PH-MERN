import Bottle from "../Bottle/Bottle";
import { useState, useEffect } from "react";
import "./bottles.css";
const Bottles = () => {
  const [bottles, setBottles] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch("bottles.json")
      .then((res) => res.json())
      .then((data) => setBottles(data));
  }, []);

  const handleBottlesCart = (bottle) => {
    console.log(bottle);
    const newCart = [...cart, bottle];
    setCart(newCart);
  };
  return (
    <div>
      <h2>Available Bottles :{bottles.length}</h2>
      <h3>Cart: {cart.length}</h3>
      <div className="bottles">
        {bottles.map((bottle) => {
          return (
            <Bottle
              key={bottle.id}
              bottle={bottle}
              handleBottlesCart={handleBottlesCart}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Bottles;
