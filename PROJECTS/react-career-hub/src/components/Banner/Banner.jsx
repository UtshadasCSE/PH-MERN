const Banner = () => {
  return (
    <div className="bg-[#7E90FE0D]">
      <div className="flex  max-sm:flex-col-reverse justify-around items-center container mx-auto  ">
        {/* left section  */}
        <div className="flex flex-col justify-center max-sm:items-center gap-4">
          <h2 className="text-7xl max-sm:text-3xl max-sm:text-center py-9 max-sm:w-2/3 mx-auto font-bold leading-[5rem]">
            One Step Closer To Your{" "}
            <span className="text-[#7E90FE]">Dream Job</span>
          </h2>
          <p className="lg:w-4/6 text-[#757575] max-sm:w-3/4 max-sm:mx-auto max-sm:text-center">
            Explore thousands of job opportunities with all the information you
            need. Its your future. Come find it. Manage all your job application
            from start to finish.
          </p>
          <a className="btn bg-[#7E90FE] text-[#FFFFFF] font-bold w-52 hover:bg-[#5356FF] duration-700 hover:shadow-xl hover:shadow-[#7E90FE]">
            Get Started
          </a>
        </div>
        {/* right section  */}
        <div>
          <img src="../../../public/assets/images/user.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
