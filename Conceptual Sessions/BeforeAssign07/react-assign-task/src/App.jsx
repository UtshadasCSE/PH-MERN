import { useState } from "react";
import "./App.css";
import Cards from "./components/Cards/Cards";
import Carts from "./components/Carts/Carts";

function App() {
  const [cart, setCart] = useState([]);
  const handleCart = (p) => {
    const isExist = cart.find((pd) => pd.id == p.id);
    if (!isExist) {
      setCart([...cart, p]);
    } else {
      alert("Already in the cart ");
    }
    console.log(p);
  };
  return (
    <>
      <div className="main-container flex max-sm:flex-col max-sm:w-11/12 justify-center gap-11 container mx-auto my-9">
        <div className="cards-container lg:w-9/12 ">
          <Cards handleCart={handleCart} />
        </div>
        <div className="cart-container lg:w-1/3">
          <Carts key={cart.id} cart={cart} />
        </div>
      </div>
    </>
  );
}

export default App;
