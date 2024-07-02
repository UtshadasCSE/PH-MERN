import Testimonial from "../../../components/Testimonial/Testimonial";
import FeatureBrand from "../FeaturedBrand/FeatureBrand";
import Newsletter from "../Newsletter/Newsletter";
import PopularProduct from "../PopularProduct/PopularProduct";
import Slider from "../Slider/Slider";
import WhyUs from "../whyUs/WhyUs";

const Home = () => {
  return (
    <div>
      <Slider />
      <FeatureBrand />
      <PopularProduct />
      <WhyUs />
      <Testimonial />
      <Newsletter />
    </div>
  );
};

export default Home;
