const Home = () => {
  return (
    <div>
      <div className="py-9 ">
        <div
          className="hero h-[70vh] w-4/5 mx-auto "
          style={{
            backgroundImage: "url(../../../public/images/stbg.jpg)",
            borderRadius: "16px",
          }}
        >
          <div className="hero-overlay bg-opacity-60  rounded-2xl"></div>
          <div className="hero-content text-center text-neutral-content">
            <div className="max-w-md">
              <h1 className="mb-5 text-5xl font-bold w-full">
                Step into a world elegance with UM Cloting
              </h1>
              <p className="mb-5 text-lg">
                Welcome to U <span className="text-[#4942E4]">M</span> Clothing,
                where style meets comfort! Explore our exclusive collection of
                trendy and chic clothing pieces designed to elevate your
                wardrobe.
              </p>
              <button className="btn btn-outline text-white font-bold border-[#11009E]">
                Buy Now
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* Features product  */}
      <div></div>
    </div>
  );
};

export default Home;
