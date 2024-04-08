import Header from "../shared/Header/Header";
import Navbar from "../shared/Navbar/Navbar";
import RightSideNav from "../shared/RightSideNav/RightSideNav";
import LeftSideNav from "./../shared/LeftSideNav/LeftSideNav";
import BreakingNews from "./BreakingNews";
import { useLoaderData } from "react-router-dom";

const Home = () => {
  const newsData = useLoaderData();

  return (
    <div>
      <Header />
      <BreakingNews />
      <Navbar />

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        <div className="border p-3 rounded-lg">
          <LeftSideNav />
        </div>
        <div className="col-span-2 border p-3 rounded-lg">
          <h1 className="font-semibold text-xl">Dragon News Home</h1>
          {/* here we apear news home data  */}
          <div></div>
        </div>
        <div className="border p-3  rounded-lg">
          <RightSideNav />
        </div>
      </div>
    </div>
  );
};

export default Home;
