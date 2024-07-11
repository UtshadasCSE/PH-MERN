import Title from "../../../components/Title/Title";
import Services from "../Services/Services";
import Slider from "../Slider/Slider";
import TabSection from "../TabSection/TabSection";

const Home = () => {
  return (
    <div>
      <div className="bg-white">
        <Slider />
        <Title
          heading={" Browse jobs by categories"}
          subHeading={
            "Applying is a breeze! Create your profile, upload your resume, and submit applications directly through our platform."
          }
        />
        <TabSection />
        <Services />
      </div>
    </div>
  );
};

export default Home;
