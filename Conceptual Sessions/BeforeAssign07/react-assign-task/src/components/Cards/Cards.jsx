import { useEffect, useState } from "react";
import Card from "../Card/Card";
import { PropTypes } from "prop-types";
const Cards = ({ handleCart }) => {
  const [cards, setCards] = useState([]);
  useEffect(() => {
    fetch("fakeData.json")
      .then((res) => res.json())
      .then((data) => setCards(data));
  }, []);

  return (
    <div className="grid grid-cols-3 max-sm:grid-cols-1 bg-slate-500 p-4 rounded">
      {cards.map((card) => {
        return <Card handleCart={handleCart} key={card.id} cards={card} />;
      })}
    </div>
  );
};
Cards.propTypes = {
  handleCart: PropTypes.func,
};
export default Cards;
