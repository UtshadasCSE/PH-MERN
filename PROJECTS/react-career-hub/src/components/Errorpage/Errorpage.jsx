import { Link } from "react-router-dom";
const Errorpage = () => {
  return (
    <div>
      <link
        rel="stylesheet"
        href="https://cdn.materialdesignicons.com/6.5.95/css/materialdesignicons.min.css"
      />

      <div className="flex items-center justify-center min-h-screen bg-white py-48 h-screen ">
        <div className="flex flex-col">
          <span className="text-center font-bold my-10 opacity-30">
            Something wrong😒
            <hr className="my-4" />
          </span>

          <div className="flex flex-col items-center">
            <div className="text-indigo-500 font-bold text-7xl">404</div>

            <div className="font-bold text-3xl xl:text-7xl lg:text-6xl md:text-5xl mt-10">
              This page does not exist
            </div>

            <div className="text-gray-400 font-medium text-sm md:text-xl lg:text-2xl mt-8">
              The page you are looking for could not be found.
            </div>
          </div>
          <div className="flex justify-center items-center my-9">
            <Link
              className="bg-green-300 p-5 rounded-lg text-xl font-semibold text-white hover:shadow-xl hover:shadow-red-400 duration-700"
              to="/"
            >
              Go to Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Errorpage;
