import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useAuth from "../../hooks/useAuth";
import { AiFillProduct } from "react-icons/ai";
import { MdDeleteForever } from "react-icons/md";
import { GrDocumentUpdate } from "react-icons/gr";
import Swal from "sweetalert2";
import { useState } from "react";
import { Link } from "react-router-dom";

const MyProduct = () => {
  const axiosSecure = useAxiosSecure();

  const { data: myproduct = [] } = useQuery({
    queryKey: ["myproduct"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/myproducts/${user?.email}`);
      return res.data;
    },
  });
  const handleDeleteProduct = (id) => {
    console.log(id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/products/${id}`).then((res) => {
          if (res.data.deletedCount > 0) {
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
            });
          }
        });
      }
    });
  };
  return (
    <div className="font-poppins">
      <div className="relative h-[50vh] bg-myCart bg-cover bg-center bg-no-repeat py-8">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-20 text-white flex justify-center items-center h-full">
          <div className="bg-[#7209B7] p-10 rounded-lg flex gap-2 items-center">
            <AiFillProduct className="text-4xl text-[#F72585] " />
            <h2 className="text-4xl text-[#F72585]">My Product</h2>
          </div>
        </div>
      </div>
      <div className="py-9 bg-white">
        <div className="w-4/5 mx-auto">
          <h2 className="py-5 text-4xl max-sm:text-xl text-[#F72585] font-semibold border-b-4 border-b-[#7209B7] my-6 w-max">
            Your added product
          </h2>
          <div className="grid grid-cols-3 max-sm:grid-cols-1 gap-4 ">
            {/* child 1  */}
            {myproduct.map((item) => (
              <div
                key={item._id}
                className="card card-compact bg-base-100  shadow-xl"
              >
                <figure>
                  <img src={item.imageUrl} alt="item" className="h-60 w-full" />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">{item.productName}</h2>
                  <p>{item.description}</p>
                  <div className="card-actions justify-end">
                    <Link
                      to={`/update/${item._id}`}
                      className="btn btn-primary text-white"
                    >
                      <GrDocumentUpdate />
                      Update
                    </Link>
                    <button
                      onClick={() => handleDeleteProduct(item._id)}
                      className="btn  bg-error text-white"
                    >
                      <MdDeleteForever />
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProduct;
