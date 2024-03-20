import { Outlet } from "react-router-dom";
import Header from "../Header/Header";

const Home = () => {
  return (
    <div>
      <Header />
      <h2>I am Home </h2>
      <Outlet />
    </div>
  );
};

export default Home;
