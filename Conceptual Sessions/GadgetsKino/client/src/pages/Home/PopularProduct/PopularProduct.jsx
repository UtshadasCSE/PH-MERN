import Card from "../../../components/Card/Card";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Title from "./../../../components/Title/Title";
import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import { FaLocationArrow } from "react-icons/fa6";

const PopularProduct = () => {
  const axiosSecure = useAxiosSecure();
  const { data: products = [] } = useQuery({
    queryKey: ["products"],
    queryFn: async () => {
      const res = await axiosSecure.get("/products");
      return res.data;
    },
  });
  console.log(products);
  return (
    <div className="w-11/12 mx-auto py-5">
      <div className="py-5">
        <Title
          heading={"our popular products"}
          subHeading={"Buy from here.After you will not find it."}
        />
      </div>
      <div>
        <div className="grid grid-cols-5 max-sm:grid-cols-1 gap-3 py-5">
          {products?.slice(0, 10).map((item) => (
            <Link key={item._id}>
              <Card
                title={item.productName}
                imgSrc={item.imageUrl}
                id={item._id}
              />
            </Link>
          ))}
        </div>
        <div className="flex justify-center">
          <Link className="btn btn-outline border-[#7209B7] text-[#F72585]">
            See all
            <FaLocationArrow />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PopularProduct;
