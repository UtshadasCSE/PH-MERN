const Title = ({ heading, subHeading }) => {
  return (
    <div className="bg-white py-5 font-poppins">
      <div className="flex flex-col items-center justify-center gap-3 lg:w-4/5 lg:mx-auto">
        <h2 className="font-semibold text-4xl max-sm:text-xl text-center ">
          {heading}
        </h2>
        <p className="text-center max-sm:w-11/12 mx-auto">{subHeading}</p>
      </div>
    </div>
  );
};

export default Title;
