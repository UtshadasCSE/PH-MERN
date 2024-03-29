import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import Categorylist from "../Categorylist/Categorylist";
import Featuredjobs from "../Featuredjobs/Featuredjobs";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Career Hub | Home</title>
      </Helmet>
      <Banner />
      <Categorylist />
      <Featuredjobs />
    </div>
  );
};

export default Home;
