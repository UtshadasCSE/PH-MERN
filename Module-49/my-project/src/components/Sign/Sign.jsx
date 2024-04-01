import { FaGoogle, FaGithub } from "react-icons/fa";
import {
  GoogleAuthProvider,
  GithubAuthProvider,
  getAuth,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import app from "../../firebase/firebase.init";
import { useState } from "react";

const Sign = () => {
  const [user, setUser] = useState(null);
  const auth = getAuth(app);
  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();
  const handleGoogleSignIn = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const user = result.user;
        setUser(user);
      })
      .catch((error) => {
        console.log("Error: ", error.message);
      });
  };
  const handleGithubSignIn = () => {
    signInWithPopup(auth, githubProvider)
      .then((result) => {
        const user = result.user;
        setUser(user);
        console.log(user);
      })
      .catch((error) => console.log(error));
  };
  const handleGoogleSignOut = () => {
    signOut(auth, googleProvider)
      .then((result) => {
        console.log(result);
        setUser(null);
      })
      .catch((error) => console.log(error));
  };
  return (
    <div className="flex flex-col justify-center items-center h-[80vh] gap-6">
      <div>
        <h2 className="text-xl font-bold ">Sign In </h2>
      </div>
      {user ? (
        <div>
          <button
            onClick={handleGoogleSignOut}
            className="btn btn-active bg-[#DB4437] text-white"
          >
            <FaGoogle />
            Sign Out
          </button>
        </div>
      ) : (
        <div className="flex flex-col gap-3">
          <div>
            <button
              onClick={handleGoogleSignIn}
              className="btn btn-active bg-[#DB4437] text-white"
            >
              <FaGoogle />
              Sign In with Google
            </button>
          </div>
          <div>
            <button
              onClick={handleGithubSignIn}
              className="btn btn-active bg-[#000000] text-white"
            >
              <FaGithub />
              Sign In with Github
            </button>
          </div>
        </div>
      )}

      {user && (
        <div>
          <h2>{user.displayName}</h2>
          <p>{user.email}</p>
        </div>
      )}
    </div>
  );
};

export default Sign;
