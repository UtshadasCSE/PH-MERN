/* eslint-disable react/no-unknown-property */

const Newsletter = () => {
  return (
    <div className="bg-slate-700 font-poppins">
      <div className="w-10/12 mx-auto flex justify-around items-center">
        <div className="w-1/2">
          <h2 className="font-semibold text-2xl text-[#F72585]">
            Join with us
          </h2>
          <p className="text-gray-300">
            Visit Gadgets Kino today and immerse yourself in the world of
            technology. Whether you’re upgrading your smartphone or exploring
            the latest wearables, we’ve got you covered.
          </p>
        </div>
        <div className="w-1/2">
          <div className="px-10 py-20 ">
            <form>
              <div className="">
                <div className="flex space-x-1 items-center mb-2"></div>
                <div className="flex space-x-4">
                  <div className="flex rounded-md overflow-hidden w-full">
                    <input
                      type="text"
                      className="w-full rounded-md rounded-r-none px-5"
                      placeholder="Enter your email"
                    />
                    <button className="bg-indigo-600 text-white px-6 text-lg font-semibold py-4 rounded-r-md">
                      Subscribe
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
