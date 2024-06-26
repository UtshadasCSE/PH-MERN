// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "./slider.css";

// import required modules
import { EffectFade, Navigation, Pagination } from "swiper/modules";
import Lottie from "lottie-react";
import headphoneAnim from "../../../../public/headphoneAnim.json";
import radioAnim from "../../../../public/radioAnim.json";
import smartAnim from "../../../../public/watchAnim.json";
import { Link } from "react-router-dom";
import HeroBtn from "../../../components/HeroBtn/HeroBtn";
import { Typewriter } from "react-simple-typewriter";

const Slider = () => {
  return (
    <div className="h-[94vh] w-[90vw] mx-auto py-10 font-poppins ">
      <Swiper
        spaceBetween={30}
        effect={"fade"}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        modules={[EffectFade, Navigation, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide className="bg-slider2 bg-cover bg-center bg-no-repeat  relative rounded-xl">
          <div className="absolute inset-0 bg-black opacity-50 rounded-xl"></div>
          <div className="relative z-10  h-full text-white flex max-sm:flex-col-reverse items-center justify-center lg:px-48 max-sm:px-10">
            <div className="lg:w-1/2 flex flex-col items-start gap-5">
              <h1 className="text-4xl text-[#4CC9F0] font-bold">
                Gadgets{" "}
                <span className="text-[#F72585]">
                  <Typewriter
                    cursor
                    cursorBlinking
                    delaySpeed={1000}
                    deleteSpeed={25}
                    loop={0}
                    typeSpeed={75}
                    words={["Kinooo", "Buy it", "Add it"]}
                  />
                </span>
              </h1>
              <p className="text-gray-200">
                we curate a collection of cutting-edge gadgets that blend
                innovation, style, and functionality. Whether you’re a tech
                enthusiast, a trendsetter, or simply someone who appreciates
                quality, our platform has something for everyone.
              </p>
              <Link>
                <HeroBtn text={"Explore Now"} />
              </Link>
            </div>
            <div className="lg:w-1/2">
              <Lottie animationData={radioAnim} className="" />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="bg-slider1 bg-cover bg-center bg-no-repeat relative  rounded-xl">
          <div className="absolute inset-0 bg-black opacity-50 rounded-xl "></div>
          <div className="relative z-10  h-full text-white flex max-sm:flex-col-reverse items-center justify-center lg:px-48 max-sm:px-10">
            <div className="lg:w-1/2 flex flex-col items-start gap-5">
              <h1 className="text-4xl text-[#4CC9F0] font-bold">
                Gadgets{" "}
                <span className="text-[#F72585]">
                  {" "}
                  <Typewriter
                    cursor
                    cursorBlinking
                    delaySpeed={1000}
                    deleteSpeed={25}
                    loop={0}
                    typeSpeed={75}
                    words={["Kinooo", "Buy it", "Add it"]}
                  />
                </span>
              </h1>
              <p className="text-gray-200">
                we curate a collection of cutting-edge gadgets that blend
                innovation, style, and functionality. Whether you’re a tech
                enthusiast, a trendsetter, or simply someone who appreciates
                quality, our platform has something for everyone.
              </p>
              <Link>
                <HeroBtn text={"Explore Now"} />
              </Link>
            </div>
            <div className="lg:w-1/2">
              <Lottie animationData={headphoneAnim} className="" />
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide className="bg-slider3 bg-cover bg-center bg-no-repeat  relative rounded-xl">
          <div className="absolute inset-0 bg-black opacity-50 rounded-xl "></div>
          <div className="relative z-10  h-full text-white flex max-sm:flex-col-reverse items-center justify-center lg:px-48 max-sm:px-10">
            <div className="lg:w-1/2 flex flex-col items-start gap-5">
              <h1 className="text-4xl text-[#4CC9F0] font-bold">
                Gadgets{" "}
                <span className="text-[#F72585]">
                  {" "}
                  <Typewriter
                    cursor
                    cursorBlinking
                    delaySpeed={1000}
                    deleteSpeed={25}
                    loop={0}
                    typeSpeed={75}
                    words={["Kinooo", "Buy it", "Add it"]}
                  />
                </span>
              </h1>
              <p className="text-gray-200">
                we curate a collection of cutting-edge gadgets that blend
                innovation, style, and functionality. Whether you’re a tech
                enthusiast, a trendsetter, or simply someone who appreciates
                quality, our platform has something for everyone.
              </p>
              <Link>
                <HeroBtn text={"Explore Now"} />
              </Link>
            </div>
            <div className="lg:w-1/2">
              <Lottie animationData={smartAnim} className="" />
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};
export default Slider;
