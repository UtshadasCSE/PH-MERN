import { Outlet } from "react-router-dom";
import Header from "../pages/shared/Header/Header";

const Root = () => {
  return (
    <div className="max-w-6xl mx-auto font-poppins">
      <Header />
      <Outlet />
    </div>
  );
};

export default Root;
