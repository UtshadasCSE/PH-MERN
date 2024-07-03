import axios from "axios";

const instance = axios.create({
  baseURL: "https://gadgetskinooo.vercel.app",
});

const useAxiosSecure = () => {
  return instance;
};

export default useAxiosSecure;
