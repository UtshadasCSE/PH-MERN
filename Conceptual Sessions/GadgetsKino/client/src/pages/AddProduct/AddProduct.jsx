import { FaCirclePlus } from "react-icons/fa6";
import { useForm } from "react-hook-form";
import { FaUser } from "react-icons/fa";
import { TiCamera } from "react-icons/ti";
import { HiCurrencyDollar } from "react-icons/hi2";
import { MdOutlineStar } from "react-icons/md";
import { useContext } from "react";
import { AuthContext } from "./../../providers/AuthProvider";
import toast, { Toaster } from "react-hot-toast";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const AddProduct = () => {
  const { user } = useContext(AuthContext);
  const axiosSecure = useAxiosSecure();
  const {
    reset,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const newProduct = {
      email: user.email,
      productName: data.productName,
      imageUrl: data.imageUrl,
      category: data.category,
      rating: data.rating,
      price: data.price,
      description: data.description,
    };
    axiosSecure
      .post("/products", newProduct)
      .then((res) => {
        if (res.data.insertedId) {
          toast.success("Product added successfully.");
        }
      })
      .catch((err) => {
        toast.error("Product not added! Please try again later");
        console.log(err);
      });
    console.log(data);
    reset();
  };
  return (
    <div className="font-poppins shadow-xl p-14 my-11 w-2/4 max-sm:w-4/5 mx-auto rounded-md">
      <div className="flex justify-center items-center gap-2 py-6">
        <FaCirclePlus className="text-4xl text-[#7209B7]" />
        <h2 className="text-4xl">Add product</h2>
      </div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-2 justify-center items-center w-full"
      >
        <div className="flex max-sm:flex-col gap-4 w-full">
          <label className="input input-bordered flex items-center gap-2 lg:w-1/2">
            <FaUser />
            <input
              {...register("productName", { required: true })}
              type="text"
              className="grow"
              placeholder="Product Name"
            />
          </label>
          <label className="input input-bordered flex items-center gap-2 lg:w-1/2">
            <TiCamera />
            <input
              {...register("imageUrl", { required: true })}
              type="text"
              className="grow"
              placeholder="Product image URL"
            />
          </label>
        </div>
        <div className="flex max-sm:flex-col gap-4 w-full">
          <label className="input input-bordered flex items-center gap-2 lg:w-1/2">
            <MdOutlineStar />
            <input
              {...register("rating", { required: true })}
              type="number"
              className="grow"
              placeholder="Rating"
            />
          </label>
          <label className="input input-bordered flex items-center gap-2 lg:w-1/2">
            <HiCurrencyDollar />
            <input
              {...register("price", { required: true })}
              type="number"
              className="grow"
              placeholder="Price"
            />
          </label>
        </div>
        {errors.rating && (
          <span className="text-error">This field is required!</span>
        )}
        {errors.price && (
          <span className="text-error">This field is required!</span>
        )}
        <div className="flex max-sm:flex-col gap-4 w-full">
          <select
            {...register("category", { required: true })}
            className="select select-bordered w-full lg:w-1/2"
          >
            <option value={"headphone"}>Headphone</option>
            <option value={"earphone"}>Earphone</option>
            <option value={"buds"}>Buds</option>
            <option value={"Speaker"}>Speaker</option>
            <option value={"Charger"}>Charger</option>
            <option value={"powerbank"}>Power Bank</option>
            <option value={"smartwatch"}>Smart Watch</option>
          </select>
          <select
            {...register("brand", { required: true })}
            className="select select-bordered w-full lg:w-1/2"
          >
            <option value={"nokia"}>Nokia</option>
            <option value={"samsung"}>Samsung</option>
            <option value={"apple"}>Apple</option>
            <option value={"sony"}>Sony</option>
            <option value={"jbl"}>JBL</option>
            <option value={"awei"}>awei</option>
            <option value={"mi"}>MI</option>
            <option value={"vivo"}>Vivo</option>
          </select>
        </div>
        {errors.category && (
          <span className="text-error">This field is required!</span>
        )}
        {errors.brand && (
          <span className="text-error">This field is required!</span>
        )}
        <div className="flex max-sm:flex-col gap-4 w-full">
          <textarea
            {...register("description", { required: true })}
            className="textarea textarea-bordered w-full"
            placeholder="Enter product description"
          ></textarea>
        </div>
        {errors.description && (
          <span className="text-error">This field is required!</span>
        )}
        <div className="w-full">
          <button
            type="submit"
            className="btn btn-outline  w-full border-[#F72585] text-[#7209B7]"
          >
            Add Product
          </button>
        </div>
      </form>
      <Toaster />
    </div>
  );
};

export default AddProduct;
