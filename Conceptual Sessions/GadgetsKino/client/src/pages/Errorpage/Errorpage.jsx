import Footer from "../shared/Footer/Footer";
import Navbar from "../shared/Navbar/Navbar";

const Errorpage = () => {
  return (
    <div>
      <Navbar />
      <div className="flex justify-center items-center gap-2 h-screen font-poppins">
        <h2 className="text-4xl">404 |</h2>
        <p className="text-xl">Page not found</p>
      </div>
      <Footer />
    </div>
  );
};

export default Errorpage;
