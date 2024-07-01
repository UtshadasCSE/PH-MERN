import { useLoaderData } from "react-router-dom";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";

const Cart = () => {
  const itemData = useLoaderData();
  const { data } = itemData;
  console.log(data);
  return (
    <div>
      <div className="container mx-auto mt-10 font-poppins">
        <div className="sm:flex shadow-md my-10">
          <div className="  w-full  sm:w-3/4 bg-white px-10 py-10">
            <div className="flex justify-between border-b pb-8">
              <h2 className="text-3xl font-bold">Product Details</h2>
            </div>
            <div className="md:flex items-strech py-8 md:py-10 lg:py-8 border-t border-gray-50">
              <div className="md:w-4/12 2xl:w-1/4 w-full">
                <img
                  src={data.imageUrl}
                  alt="Black Leather Purse"
                  className="h-full object-center object-cover md:block hidden"
                />
              </div>
              <div className="md:pl-3 md:w-8/12 2xl:w-3/4 flex flex-col justify-center">
                <div className="flex items-center justify-between w-full">
                  <p className="text-base font-black leading-none text-gray-800">
                    Luxe card holder
                  </p>
                </div>

                <div className="flex items-center justify-between pt-5">
                  <div className="flex itemms-center">
                    <p className="text-xs leading-3 underline text-red-500  cursor-pointer">
                      Remove
                    </p>
                  </div>
                  <p className="text-base font-black leading-none text-gray-800">
                    $100.00 BDT
                  </p>
                </div>
              </div>
            </div>

            <a
              href="#"
              className="flex font-semibold text-indigo-600 text-sm mt-10"
            >
              <svg
                className="fill-current mr-2 text-indigo-600 w-4"
                viewBox="0 0 448 512"
              >
                <path d="M134.059 296H436c6.627 0 12-5.373 12-12v-56c0-6.627-5.373-12-12-12H134.059v-46.059c0-21.382-25.851-32.09-40.971-16.971L7.029 239.029c-9.373 9.373-9.373 24.569 0 33.941l86.059 86.059c15.119 15.119 40.971 4.411 40.971-16.971V296z" />
              </svg>
              Continue Shopping
            </a>
          </div>
          <div id="summary" className=" w-full sm:w-1/4 md:w-1/2 px-8 py-10 ">
            <div className="flex flex-col gap-4">
              <p className="">{data.description}</p>
              <h4 className="border-2 border-[#F72585] p-3 w-max rounded-md font-black">
                # {data.category}
              </h4>
              <p>
                <Rating
                  style={{ maxWidth: 180 }}
                  value={data.rating}
                  readOnly
                />
              </p>
            </div>
            <div className="border-t mt-8">
              <button className="bg-[#7209B7] font-semibold hover:bg-[#F72585] py-3 text-sm text-white uppercase w-full">
                Add to cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
