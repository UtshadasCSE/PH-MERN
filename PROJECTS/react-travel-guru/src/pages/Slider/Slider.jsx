import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";
import "./style.css";
// import required modules
import { EffectCards } from "swiper/modules";

const Slider = () => {
  return (
    <div>
      <Swiper
        effect={"cards"}
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper"
      >
        <SwiperSlide id="slider1">Habigonj</SwiperSlide>
        <SwiperSlide id="slider2">Sundarban</SwiperSlide>
        <SwiperSlide id="slider3">Sajek</SwiperSlide>
        <SwiperSlide id="slider4">Maldip</SwiperSlide>
        <SwiperSlide id="slider5">Italy</SwiperSlide>
        <SwiperSlide id="slider6">Japan</SwiperSlide>
      </Swiper>
    </div>
  );
};
export default Slider;
