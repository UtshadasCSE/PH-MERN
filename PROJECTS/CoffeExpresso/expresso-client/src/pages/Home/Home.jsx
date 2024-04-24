import { Link, useLoaderData } from "react-router-dom";
import cup from "../../assets/images/icons/1.png";
import { useEffect, useState } from "react";
import { FaEye } from "react-icons/fa6";
import { FaPen } from "react-icons/fa";
import { ImBin } from "react-icons/im";
import Swal from "sweetalert2";

const Home = () => {
  const allCoffe = useLoaderData();
  const [coffees, setCoffes] = useState(allCoffe);
  const [heroData, setHeroData] = useState([]);
  useEffect(() => {
    fetch("../../../public/heroData.json")
      .then((res) => res.json())
      .then((data) => setHeroData(data));
  }, []);
  // for delete an item
  const handleDeleteCoffe = (_id) => {
    console.log(_id);
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
        fetch(`http://localhost:4000/coffe/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });
            }
            const reaminigCoffe = coffees.filter((coffe) => coffe._id !== _id);
            setCoffes(reaminigCoffe);
          });
      }
    });
  };
  return (
    <div>
      <div>
        <div className="bg-headerImg h-[80vh] bg-center bg-cover px-20 flex flex-col justify-center items-center gap-4 font-rancho  text-white">
          <h2 className="text-4xl font-semibold">
            Would you like a Cup of Delicious Coffee?
          </h2>
          <p className="w-1/3 max-sm:w-full text-[#FFF]">
            Its coffee time - Sip & Savor - Relaxation in every sip! Get the
            nostalgia back!! Your companion of every moment!!! Enjoy the
            beautiful moments and make them memorable.
          </p>
          <button className="bg-[#AF8260] p-4 rounded-lg text-xl">
            Learn More
          </button>
        </div>
        <div className="bg-[#ECEAE3]">
          <div className="grid grid-cols-4 max-sm:grid-cols-1 gap-8 w-4/5 mx-auto py-9 ">
            {/* gird child  */}
            {heroData.map((info) => (
              <div key={info.id} className="flex flex-col gap-3">
                <img className="w-16" src={info.image} alt="" />
                <h2 className="text-[#331A15] text-xl font-bold">
                  {info.name}
                </h2>
                <p className="text-[#1B1A1A] text-sm w-3/4">{info.details}</p>
              </div>
            ))}
          </div>
        </div>
        {/* fetaured sec  */}
        <div className="py-28 font-rancho flex flex-col gap-5">
          <div className="w-1/5 mx-auto">
            <div className="divider">Sip & Savor</div>
          </div>
          <h2 className="text-center text-4xl font-semibold">
            Our Popular Products
          </h2>
          <div className="flex justify-center">
            {" "}
            <Link
              to="/addcoffe"
              className=" bg-[#E3B577] py-3 px-8 rounded flex items-center justify-center gap-2 text-white text-xl"
            >
              Add Coffe
              <img className="w-6" src={cup} alt="" />
            </Link>
          </div>

          <div className="w-9/12 max-sm:w-11/12 mx-auto py-6 font-mono">
            <div className="grid max-sm:grid-cols-1 grid-cols-2 gap-7">
              {/* child  */}
              {coffees.map((cof) => (
                <div
                  key={cof.id}
                  className="card card-side bg-[#F5F4F1] shadow-xl max-sm:flex max-sm:flex-col"
                >
                  <figure>
                    <img className="w-2/4" src={cof.photoUrl} alt="Coffe" />
                  </figure>
                  <div className="card-body">
                    <h2 className="card-title font-mono">Name:{cof.cName}</h2>
                    <p>Chef:{cof.cChef}</p>
                    <p>Taste:{cof.cTaste}</p>
                    <div className="card-actions justify-end ">
                      <Link to={`/coffedetails/${cof._id}`}>
                        <button
                          title="Details"
                          className="btn bg-[#D2B48C] text-white font-semibold"
                        >
                          <FaEye />
                        </button>
                      </Link>
                      <Link to={`/updatecoffe/${cof._id}`}>
                        {" "}
                        <button
                          title="Edit"
                          className="btn bg-[#3C393B] text-white font-semibold"
                        >
                          <FaPen />
                        </button>
                      </Link>
                      <button
                        onClick={() => handleDeleteCoffe(cof._id)}
                        title="Delete"
                        className="btn bg-[#EA4744] text-white font-semibold"
                      >
                        <ImBin />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
