import Slider from "./../Slider/Slider";
import { SlArrowRight } from "react-icons/sl";

const Home = () => {
  return (
    <div>
      <div className="flex justify-around items-center gap-4 w-4/5 mx-auto">
        <div className="font-montserrat flex flex-col items-start gap-6">
          <h2 className="text-6xl font-semibold">Habiogonj</h2>
          <p className="w-2/4">
            Habigonj Bazar is a city, fishing port, tourism centre and district
            headquarters in southeastern Bangladesh. It is famous mostly for its
            long natural sandy beach, and it ...
          </p>
          <button className="btn bg-[#F9A51A]">
            Booking
            <SlArrowRight />
          </button>
        </div>
        <div className="">
          <Slider />
        </div>
      </div>
    </div>
  );
};

export default Home;
