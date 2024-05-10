import Swal from "sweetalert2";
import axios from "axios";
const AddCoffe = () => {
  const handleAddCoffe = (event) => {
    event.preventDefault();
    const form = event.target;
    const cName = form.cName.value;
    const cSupplier = form.cSupplier.value;
    const cCategory = form.cCategory.value;
    const cChef = form.cChef.value;
    const cTaste = form.cTaste.value;
    const cDetails = form.cDetails.value;
    const photoUrl = form.pUrl.value;
    const newCoffe = {
      cName,
      cSupplier,
      cCategory,
      cChef,
      cTaste,
      cDetails,
      photoUrl,
    };
    // send data using axios
    axios.post("http://localhost:4000/coffe", newCoffe).then((data) => {
      console.log(data.data);
      if (data.data.insertedId) {
        Swal.fire({
          position: "top-center",
          icon: "success",
          title: "New coffe added!",
          showConfirmButton: false,
          timer: 1500,
        });
      }

      form.reset();
    });

    // send data to the db
    // fetch("http://localhost:4000/coffe", {
    //   method: "POST",
    //   headers: {
    //     "content-type": "application/json",
    //   },
    //   body: JSON.stringify(newCoffe),
    // })
    //   .then((res) => res.json())
    //   .then((data) => {
    //     if (data.insertedId) {
    //       Swal.fire({
    //         position: "top-center",
    //         icon: "success",
    //         title: "New coffe added!",
    //         showConfirmButton: false,
    //         timer: 1500,
    //       });
    //     }
    //     console.log(data);
    //     form.reset();
    //   });
  };
  return (
    <div>
      <div className="bg-[#F4F3F0] w-3/4 max-sm:w-11/12  mx-auto my-12 rounded-lg font-rancho">
        <div className="py-10 text-center">
          {" "}
          <h2 className="font-rancho text-5xl">Add Coffe </h2>
          <p className="w-2/3 mx-auto py-5 text-[#1B1A1AB2] text-xl">
            Our passion for coffee runs deep. From sourcing the finest beans to
            crafting each cup with precision, we’re more than just a coffee
            shop—we’re storytellers.
          </p>
          <p></p>
        </div>
        <div>
          <form
            onSubmit={handleAddCoffe}
            className="w-5/12 max-sm:w-4/5 mx-auto py-7 flex flex-col"
          >
            <div className=" flex max-sm:flex-col justify-between ">
              {/* left  */}
              <div className="flex flex-col gap-3">
                <label className="input input-bordered flex items-center gap-2">
                  Name
                  <input
                    name="cName"
                    type="text"
                    className="grow"
                    placeholder="Enter coffe name"
                  />
                </label>
                <label className="input input-bordered flex items-center gap-2">
                  Supplier
                  <input
                    name="cSupplier"
                    type="text"
                    className="grow"
                    placeholder="Enter supplier"
                  />
                </label>
                <label className="input input-bordered flex items-center gap-2">
                  Category
                  <input
                    name="cCategory"
                    type="text"
                    className="grow"
                    placeholder="Enter category"
                  />
                </label>
              </div>
              {/* right  */}
              <div className="flex flex-col gap-3">
                <label className="input input-bordered flex items-center gap-2">
                  Chef
                  <input
                    name="cChef"
                    type="text"
                    className="grow"
                    placeholder="Enter chef name"
                  />
                </label>
                <label className="input input-bordered flex items-center gap-2">
                  Taste
                  <input
                    name="cTaste"
                    type="text"
                    className="grow"
                    placeholder="Enter taste"
                  />
                </label>
                <label className="input input-bordered flex items-center gap-2">
                  Details
                  <input
                    name="cDetails"
                    type="text"
                    className="grow"
                    placeholder="Enter coffe details"
                  />
                </label>
              </div>
            </div>
            <div className=" py-3">
              <label className="input input-bordered flex items-center gap-2">
                Photo URL
                <input
                  name="pUrl"
                  type="text"
                  className="grow"
                  placeholder="Enter coffe photo url"
                />
              </label>
            </div>
            <div className="w-full ">
              <button
                type="submit"
                className="btn w-full bg-[#AF8260] text-white text-xl"
              >
                {" "}
                Add Coffe
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddCoffe;
