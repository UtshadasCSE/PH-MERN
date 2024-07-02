import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Testimonial = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
  };
  return (
    <div className="w-9/12 mx-auto py-14">
      <div className="">
        <Slider {...settings} className="flex gap-3">
          {/* child  */}
          <div className="bg-white border-2 p-3 rounded-md ">
            <div className=" p-3 h-24 w-24  rounded-full flex justify-center items-center">
              <img
                src="https://i.ibb.co/DgC68Jy/jugs-64975-1280.jpg"
                alt=""
                className="h-full w-full rounded-full"
              />
            </div>
            <h2 className="text-2xl font-semibold">Name of Canny</h2>
            <p>
              Feel free to customize and expand upon this content to match your
              website’s tone and style. If you need additional details or have
              any other requests, feel free to ask! 😊
            </p>
          </div>
          {/* child  */}
          <div className="bg-white border-2 p-3 rounded-md">
            <div className=" p-3 h-24 w-24 rounded-full">
              <img
                src="https://i.ibb.co/DgC68Jy/jugs-64975-1280.jpg"
                alt=""
                className="h-full w-full rounded-full"
              />
            </div>
            <h2 className="text-2xl font-semibold">Name of Canny</h2>
            <p>
              Feel free to customize and expand upon this content to match your
              website’s tone and style. If you need additional details or have
              any other requests, feel free to ask! 😊
            </p>
          </div>
          {/* child  */}
          <div className="bg-white border-2 p-3  rounded-md">
            <div className=" p-3 h-24 w-24 rounded-full">
              <img
                src="https://i.ibb.co/DgC68Jy/jugs-64975-1280.jpg"
                alt=""
                className="h-full w-full rounded-full"
              />
            </div>
            <h2 className="text-2xl font-semibold">Name of Canny</h2>
            <p>
              Feel free to customize and expand upon this content to match your
              website’s tone and style. If you need additional details or have
              any other requests, feel free to ask! 😊
            </p>
          </div>
          {/* child  */}
          <div className="bg-white border-2 p-3 rounded-md">
            <div className=" p-3 h-24 w-24 rounded-full">
              <img
                src="https://i.ibb.co/DgC68Jy/jugs-64975-1280.jpg"
                alt=""
                className="h-full w-full rounded-full"
              />
            </div>
            <h2 className="text-2xl font-semibold">Name of Canny</h2>
            <p>
              Feel free to customize and expand upon this content to match your
              website’s tone and style. If you need additional details or have
              any other requests, feel free to ask! 😊
            </p>
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default Testimonial;
