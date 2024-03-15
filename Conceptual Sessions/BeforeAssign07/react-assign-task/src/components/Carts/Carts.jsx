import { PropTypes } from "prop-types";
const Carts = ({ cart }) => {
  const [title, price] = cart;
  console.log(title, price);
  return (
    <div>
      <div className="bg-green-200 py-7 px-3 rounded-md ">
        <p className="font-medium text-xl">Your Items</p>
        <div>
          <div className="flex justify-between  py-8 px-3 rounded-md ">
            <p className="underline text-purple-600 font-bold">name</p>
            <p className="underline text-purple-600 font-bold">price</p>
          </div>
          <div className=" px-3 my-2 text-white font-semibold   py-3 rounded">
            {cart.map((cart) => {
              return (
                <div className="flex justify-between mt-3 py-3 px-2 rounded-md bg-emerald-500">
                  <p>{cart.title.slice(0, 8)}</p>
                  <p>{cart.price}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
Carts.propTypes = {
  cart: PropTypes.object,
};
export default Carts;
