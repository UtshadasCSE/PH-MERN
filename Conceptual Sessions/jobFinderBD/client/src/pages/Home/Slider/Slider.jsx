// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "./slide.css";
// import required modules
import { Navigation } from "swiper/modules";
import { MdArrowOutward } from "react-icons/md";
import { useTypewriter } from "react-simple-typewriter";
import { Link } from "react-router-dom";

const Slider = () => {
  // react type writer
  const [text] = useTypewriter({
    words: ["BD", "Now"],
    loop: 3,
    onLoopDone: () => console.log(`loop completed after 3 runs.`),
  });
  return (
    <>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide>
          <div className="py-5 w-full font-poppins">
            <div className="relative h-[70vh] max-sm:h-screen w-full py-3 bg-slide1 bg-center bg-cover">
              <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
              <div className="relative z-20 flex flex-col items-center justify-center gap-5 h-full text-white">
                <h1 className="text-4xl text-[#F1FAEE] font-bold">
                  Job Finder{text}
                </h1>
                <p className="lg:w-3/5 mx-auto">
                  Are you ready to take the next step in your career?
                  JobFinderBD connects you with a wide range of job
                  opportunities across various industries.
                </p>
                <div className="flex gap-3">
                  <Link
                    to={"/all-jobs"}
                    className="btn btn-active bg-[#F1FAEE] text-[#E63946]"
                  >
                    Find Jobs
                    <MdArrowOutward />
                  </Link>
                  <button className="btn btn-outline border-[#E63946] text-[#F1FAEE] hover:bg-[#E63946] hover:border-none">
                    Explore Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <div className="py-5 w-full font-poppins">
            <div className="relative h-[70vh] max-sm:h-screen w-full py-3 bg-slide2 bg-center bg-cover">
              <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
              <div className="relative z-20 flex flex-col items-center justify-center gap-5 h-full text-white">
                <h1 className="text-4xl text-[#F1FAEE] font-bold">
                  Job Finder{text}
                </h1>
                <p className="lg:w-3/5 mx-auto">
                  Are you ready to take the next step in your career?
                  JobFinderBD connects you with a wide range of job
                  opportunities across various industries.
                </p>
                <div className="flex gap-3">
                  <button className="btn btn-active bg-[#F1FAEE] text-[#E63946]">
                    Find Jobs
                    <MdArrowOutward />
                  </button>
                  <button className="btn btn-outline border-[#E63946] text-[#F1FAEE] hover:bg-[#E63946] hover:border-none">
                    Explore Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <div className="py-5 w-full font-poppins">
            <div className="relative h-[70vh] max-sm:h-screen w-full py-3 bg-slide3 bg-center bg-cover">
              <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
              <div className="relative z-20 flex flex-col items-center justify-center gap-5 h-full text-white">
                <h1 className="text-4xl text-[#F1FAEE] font-bold">
                  Job Finder{text}
                </h1>
                <p className="lg:w-3/5 mx-auto">
                  Are you ready to take the next step in your career?
                  JobFinderBD connects you with a wide range of job
                  opportunities across various industries.
                </p>
                <div className="flex gap-3">
                  <button className="btn btn-active bg-[#F1FAEE] text-[#E63946]">
                    Find Jobs
                    <MdArrowOutward />
                  </button>
                  <button className="btn btn-outline border-[#E63946] text-[#F1FAEE] hover:bg-[#E63946] hover:border-none">
                    Explore Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Slider;
