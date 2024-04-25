import { Link, useLoaderData } from "react-router-dom";
import cup from "../../assets/images/icons/1.png";
import { useEffect, useState } from "react";
import { FaEye } from "react-icons/fa6";
import { FaPen } from "react-icons/fa";
import { ImBin } from "react-icons/im";
import Swal from "sweetalert2";
import card1 from "../../assets/images/cups/Rectangle 10.png";
import card2 from "../../assets/images/cups/Rectangle 11.png";
import card3 from "../../assets/images/cups/Rectangle 12.png";
import card4 from "../../assets/images/cups/Rectangle 13.png";
import card5 from "../../assets/images/cups/Rectangle 14.png";
import card6 from "../../assets/images/cups/Rectangle 15.png";

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
          <Link to="/register">
            {" "}
            <button className="bg-[#AF8260] font-mono font-bold p-4 rounded-lg text-xl hover:bg-[#331A15] hover:shadow-lg hover:shadow-yellow-900 duration-700 cursor-pointer">
              Register Now
            </button>
          </Link>
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
              className=" bg-[#E3B577] py-3 px-8 rounded flex items-center justify-center gap-2 text-white text-xl hover:bg-[#331A15] hover:shadow-lg hover:shadow-yellow-900 duration-700 cursor-pointer"
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
          {/* images grid  */}
          <div>
            {/* parent  */}
            <div>
              {/* child  */}

              <section className="bg-white  py-24 px-4 lg:px-16">
                <div className="container mx-auto px-[12px] md:px-24 xl:px-12 max-w-[1300px] nanum2">
                  <h1 className="text-center text-5xl pb-12 text-[#331A15]">
                    Follow on Instagram
                  </h1>
                  <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-x-4 gap-y-28 lg:gap-y-16">
                    <div className="relative group h-48 flex   flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
                      <a href="#" className="block">
                        <div className="h-28">
                          <div className="absolute -top-20 lg:top-[-10%] left-[5%] z-40  group-hover:top-[-40%] group-hover:opacity-[0.9]   duration-300 w-[90%] h-48 bg-[#331A15] rounded-xl justify-items-center align-middle">
                            <img
                              src={card1}
                              className="w-full h-full   mt-6 m-auto"
                              alt="Automotive"
                              title="Automotive"
                              loading="lazy"
                              width="200"
                              height="200"
                            />
                          </div>
                        </div>
                        <div className="p-6   z-10 w-full   ">
                          <p className="mb-2 inline-block text-tg text-center w-full  text-xl  font-sans  font-semibold leading-snug tracking-normal   antialiased">
                            Expresso Zen
                          </p>
                        </div>
                      </a>
                    </div>

                    <div className="relative group h-48 flex   flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
                      <a href="#" className="block">
                        <div className="h-28">
                          <div className="absolute -top-20 lg:top-[-10%] left-[5%] z-40  group-hover:top-[-40%] group-hover:opacity-[0.9]   duration-300 w-[90%] h-48 bg-[#331A15] rounded-xl justify-items-center align-middle">
                            <img
                              src={card2}
                              className="w-full h-full   mt-6 m-auto"
                              alt="Toys and Baby Products"
                              title="Toys and Baby Products"
                              loading="lazy"
                              width="200"
                              height="200"
                            />
                          </div>
                        </div>
                        <div className="p-6   z-10 w-full   ">
                          <p className="mb-2 inline-block text-tg text-center w-full  text-xl  font-sans  font-semibold leading-snug tracking-normal   antialiased">
                            Mahito Expresso
                          </p>
                        </div>
                      </a>
                    </div>

                    <div className="relative group h-48 flex   flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
                      <a href="#" className="block">
                        <div className="h-28">
                          <div className="absolute -top-20 lg:top-[-10%] left-[5%] z-40  group-hover:top-[-40%] group-hover:opacity-[0.9]   duration-300 w-[90%] h-48 bg-[#331A15] rounded-xl justify-items-center align-middle">
                            <img
                              src={card3}
                              className="w-full h-full   mt-6 m-auto"
                              alt="Medical"
                              title="Medical"
                              loading="lazy"
                              width="200"
                              height="200"
                            />
                          </div>
                        </div>
                        <div className="p-6   z-10 w-full   ">
                          <p className="mb-2 inline-block text-tg text-center w-full  text-xl  font-sans  font-semibold leading-snug tracking-normal   antialiased">
                            Capachino Expresso
                          </p>
                        </div>
                      </a>
                    </div>

                    <div className="relative group h-48 flex   flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
                      <a href="#" className="block">
                        <div className="h-28">
                          <div className="absolute -top-20 lg:top-[-10%] left-[5%] z-40  group-hover:top-[-40%] group-hover:opacity-[0.9]   duration-300 w-[90%] h-48 bg-[#331A15] rounded-xl justify-items-center align-middle">
                            <img
                              src={card4}
                              className="w-full h-full   mt-6 m-auto"
                              alt="Glass"
                              title="Glass"
                              loading="lazy"
                              width="200"
                              height="200"
                            />
                          </div>
                        </div>
                        <div className="p-6   z-10 w-full   ">
                          <p className="mb-2 inline-block text-tg text-center w-full  text-xl  font-sans  font-semibold leading-snug tracking-normal   antialiased">
                            Alpha Expresso
                          </p>
                        </div>
                      </a>
                    </div>

                    <div className="relative group h-48 flex   flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
                      <a href="#" className="block">
                        <div className="h-28">
                          <div className="absolute -top-20 lg:top-[-10%] left-[5%] z-40  group-hover:top-[-40%] group-hover:opacity-[0.9]   duration-300 w-[90%] h-48 bg-[#331A15]rounded-xl justify-items-center align-middle">
                            <img
                              src={card5}
                              className="w-full h-full   mt-6 m-auto"
                              alt="Jewelry Coins and Medallions"
                              title="Jewelry Coins and Medallions"
                              loading="lazy"
                              width="200"
                              height="200"
                            />
                          </div>
                        </div>
                        <div className="p-6   z-10 w-full   ">
                          <p className="mb-2 inline-block text-tg text-center w-full  text-xl  font-sans  font-semibold leading-snug tracking-normal   antialiased">
                            Laren Coffee
                          </p>
                        </div>
                      </a>
                    </div>

                    <div className="relative group h-48 flex   flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
                      <a href="#" className="block">
                        <div className="h-28">
                          <div className="absolute -top-20 lg:top-[-10%] left-[5%] z-40  group-hover:top-[-40%] group-hover:opacity-[0.9]   duration-300 w-[90%] h-48 bg-[#331A15] rounded-xl justify-items-center align-middle">
                            <img
                              src={card6}
                              className="w-full h-full   mt-6 m-auto"
                              alt="Electric"
                              title="Electric"
                              loading="lazy"
                              width="200"
                              height="200"
                            />
                          </div>
                        </div>
                        <div className="p-6   z-10 w-full   ">
                          <p className="mb-2 inline-block text-tg text-center w-full  text-xl  font-sans  font-semibold leading-snug tracking-normal   antialiased">
                            Electric Expresso
                          </p>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
