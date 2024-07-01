import FeatureBrand from "../FeaturedBrand/FeatureBrand";
import PopularProduct from "../PopularProduct/PopularProduct";
import Slider from "../Slider/Slider";

const Home = () => {
  return (
    <div>
      <Slider />
      <FeatureBrand />
      <PopularProduct />
    </div>
  );
};

export default Home;
