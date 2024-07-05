import Title from "../../../components/Title/Title";
import Slider from "../Slider/Slider";
import TabSection from "../TabSection/TabSection";

const Home = () => {
  return (
    <div>
      <div className="bg-white">
        <Slider />
        <Title />
        <TabSection />
      </div>
    </div>
  );
};

export default Home;
