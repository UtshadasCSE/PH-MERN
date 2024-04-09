import { FaGoogle } from "react-icons/fa6";
import { FaGithub, FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import qZone1 from "../../../assets/qZone1.png";
import qZone2 from "../../../assets/qZone2.png";
import qZone3 from "../../../assets/qZone3.png";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import auth from "../../../firebase/firebase.comfig";

const RightSideNav = () => {
  const googleProvider = new GoogleAuthProvider();
  const handleGooglesignIn = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div>
      {/* 1  */}
      <div className="flex flex-col gap-3">
        <h2 className="font-semibold text-xl">Login With</h2>
        <div className=" flex flex-col items-center gap-2">
          <button
            onClick={handleGooglesignIn}
            className="flex items-center gap-2 border-2 px-9 py-2 rounded-lg text-[#4285F4]"
          >
            <FaGoogle className="text-[#4285F4]" />
            Login with Google
          </button>
          <button className="flex items-center gap-2 border-2 px-9 py-2 rounded-lg">
            <FaGithub />
            Login with Github
          </button>
        </div>
      </div>
      {/* 2  */}
      <div className="flex flex-col gap-3 pt-5">
        <h2 className="font-semibold text-xl">Find Us On</h2>
        <div className=" flex flex-col items-center gap-2">
          <button className="flex items-center  gap-2 border-2 px-9 py-2 rounded-lg text-[#4285F4] w-full">
            <FaFacebook className="text-[#4267B2]" />
            Facebook
          </button>

          <button className="flex items-center gap-2 border-2 px-9 py-2 rounded-lg w-full text-[#1DA1F2]">
            <FaTwitter />
            Twitter
          </button>
          <button className="flex items-center gap-2 border-2 px-9 py-2 rounded-lg w-full text-[#FD1D1D]">
            <FaInstagram />
            Instagram
          </button>
        </div>
      </div>
      {/* 3  */}
      <div className="flex flex-col gap-3 pt-5">
        <div className="bg-[#F3F3F3] p-2 rounded-lg">
          <h2 className="font-semibold text-xl">Q-Zone</h2>
          <img src={qZone1} alt="" />
          <img src={qZone2} alt="" />
          <img src={qZone3} alt="" />
        </div>
      </div>
      {/* 4 */}
      <div className="bg-rightBluBg bg-cover bg-center flex flex-col items-center justify-center gap-5 p-5 text-center">
        <h2 className="text-2xl text-[#FFFFFF] font-bold">
          Create an Amazing Newspaper
        </h2>
        <p className="text-[#FFFFFF] font-light">
          Discover thousands of options, easy to customize layouts, one-click to
          import demo and much more.
        </p>
        <button className="btn text-white font-bold bg-[#D72050]">
          Learn More
        </button>
      </div>
    </div>
  );
};

export default RightSideNav;
