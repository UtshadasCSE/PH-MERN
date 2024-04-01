import { useLoaderData } from "react-router-dom";

const Home = () => {
  const featuresProducts = useLoaderData();
  console.log(featuresProducts);
  return (
    <div>
      <div className="py-9 ">
        <div
          className="hero h-[70vh] w-4/5 mx-auto "
          style={{
            backgroundImage: "url(../../../public/images/stbg.jpg)",
            backgroundPosition: "center",
            borderRadius: "16px",
          }}
        >
          <div className="hero-overlay bg-opacity-60  rounded-2xl"></div>
          <div className="hero-content text-center text-neutral-content">
            <div className="max-w-md">
              <h1 className="mb-5 text-5xl font-bold w-full text-[#FEFBF6]">
                Step into a world elegance with UM Cloting
              </h1>
              <p className="mb-5 text-lg">
                Welcome to U <span className="text-[#4942E4]">M</span> Clothing,
                where style meets comfort! Explore our exclusive collection of
                trendy and chic clothing pieces designed to elevate your
                wardrobe.
              </p>
              <button className="btn btn-outline text-white font-bold border-[#11009E] hover:bg-[#378CE7] hover:shadow-lg hover:shadow-red-500 duration-700">
                Buy Now
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* Features product  */}
      <div>
        {/* grid parent  */}
        <div className="grid grid-cols-4 gap-5 w-3/4 mx-auto py-12">
          {/* grid child  */}
          {featuresProducts.slice(0, 4).map((fproduct) => (
            <div
              key={fproduct.productId}
              className=" flex flex-col  items-center justify-center gap-6 border-2 border-[#67C6E3] rounded-lg p-6"
            >
              <img className="w-48 p-5 h-52 " src={fproduct.image} alt="" />
              <h2 className="text-2xl text-center font-semibold">
                {fproduct.name}
              </h2>
              <p className="font-bold text-lg">${fproduct.discountPrice}</p>
              <div className="flex items-center justify-between w-3/4">
                <button className="btn btn-active bg-[#5356FF] text-white">
                  Buy Now
                </button>
                <p className="font-bold">
                  {fproduct.imported ? "Imported" : "Desi"}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
