import { Link } from "react-router-dom";
import Button from "../components/Button/Button";
import waveSvg from "../assets/images/wave.svg";
const Home = () => {
  return (
    <div>
      <div>
        <div className="relative hero min-h-[calc(100vh-64px)] ">
          <div className="hero-content text-center">
            <div className="max-w-md">
              <h2 className="text-4xl font-black">
                Welcome to{" "}
                <span className="bg-gradient-to-r bg-300% from-orange-700 via-blue-500 to-green-400 text-transparent bg-clip-text animate-gradient text-4xl font-bold">
                  Byte Blyze
                </span>
              </h2>
              <p className="py-6">
                Provident cupiditate voluptatem et in. Quaerat fugiat ut
                assumenda excepturi exercitationem quasi. In deleniti eaque aut
                repudiandae et a id nisi.
              </p>
              <div className="flex gap-4 justify-center">
                <Link to={"/blogs"}>
                  <Button text={"Read Blogs"} />
                </Link>
                <Link to={"/bookmarks"}>
                  <Button text={"Bookmarks"} />
                </Link>
              </div>
            </div>
          </div>
        </div>
        <img src={waveSvg} alt="" className="w-full absolute bottom-0" />
      </div>
    </div>
  );
};

export default Home;
