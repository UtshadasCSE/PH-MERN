import { RiHome2Fill } from "react-icons/ri";
import { Link } from "react-router-dom";

const Errorpage = () => {
  return (
    <div>
      <div className="h-screen justify-center items-center font-poppins py-80">
        <div className="flex justify-center items-center gap-2 py-5">
          <h2 className="font-bold text-4xl">404|</h2>
          <p className="text-lg">Page not found</p>
        </div>
        <div className="flex justify-center">
          <Link to={"/"} className="btn w-max bg-[#E63946] text-[#F1FAEE]">
            <RiHome2Fill />
            Back to home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Errorpage;
