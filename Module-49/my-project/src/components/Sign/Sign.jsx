import { FaGoogle } from "react-icons/fa";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import app from "../../firebase/firebase.init";

const Sign = () => {
  const auth = getAuth(app);
  const provider = new GoogleAuthProvider();
  const hhandleGoogleSignIn = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((error) => {
        console.log("Error: ", error.message);
      });
  };
  return (
    <div className="flex flex-col justify-center items-center h-screen gap-6">
      <div>
        <h2>Sign In </h2>
      </div>
      <div>
        <button
          onClick={hhandleGoogleSignIn}
          className="btn btn-active bg-[#8B93FF]"
        >
          <FaGoogle />
          Sign In with Google
        </button>
      </div>
    </div>
  );
};

export default Sign;
