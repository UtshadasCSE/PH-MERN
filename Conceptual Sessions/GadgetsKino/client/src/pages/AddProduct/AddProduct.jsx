import { FaCirclePlus } from "react-icons/fa6";
import { useForm } from "react-hook-form";
import { FaUser } from "react-icons/fa";
import { TiCamera } from "react-icons/ti";
import { HiCurrencyDollar } from "react-icons/hi2";

const AddProduct = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <div className="font-poppins shadow-xl p-14 my-11 w-2/4 max-sm:w-4/5 mx-auto rounded-md">
      <div className="flex justify-center items-center gap-2 py-6">
        <FaCirclePlus className="text-4xl text-[#7209B7]" />
        <h2 className="text-4xl">Add Item</h2>
      </div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-2 justify-center items-center w-full"
      >
        <div className="flex max-sm:flex-col gap-4 w-full">
          <label className="input input-bordered flex items-center gap-2 lg:w-1/2">
            <FaUser />
            <input
              {...register("userName", { required: true })}
              type="text"
              className="grow"
              placeholder="Your Name"
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
        {errors.userName && (
          <span className="text-error">This field is required!</span>
        )}
        {errors.imageUrl && (
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

          <label className="input input-bordered flex items-center gap-2 lg:w-1/2">
            <HiCurrencyDollar />
            <input type="number" className="grow" placeholder="Price" />
          </label>
        </div>
        {errors.category && (
          <span className="text-error">This field is required!</span>
        )}{" "}
        3
        <div className="w-full">
          <button
            type="submit"
            className="btn btn-outline  w-full border-[#F72585] text-[#7209B7]"
          >
            Add Product
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddProduct;
