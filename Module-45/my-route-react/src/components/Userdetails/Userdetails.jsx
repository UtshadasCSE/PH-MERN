import { useLoaderData } from "react-router-dom";

const Userdetails = () => {
  const user = useLoaderData();
  const { name } = user;
  return (
    <div>
      <h2>Name:{name}</h2>
    </div>
  );
};

export default Userdetails;
