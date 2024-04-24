import { Link, useLoaderData, useParams } from "react-router-dom";
import { FaLongArrowAltLeft } from "react-icons/fa";

const CoffeDetails = () => {
  const allCoffe = useLoaderData();
  const { id } = useParams();
  const idInt = parseInt(id);
  const matchCoffe = allCoffe.find((coffe) => parseInt(coffe._id) === idInt);
  console.log(matchCoffe);

  return (
    <div>
      <div className="py-11">
        <div className="w-5/6 mx-auto py-20">
          <Link to="/" className="flex items-center text-2xl font-semibold">
            <FaLongArrowAltLeft />
            Back to Home
          </Link>
        </div>
        <div className="w-2/4 mx-auto p-10 bg-[#F4F3F0] flex items-center justify-around font-monorounded-lg">
          {/* left  */}
          <div>
            <img src={matchCoffe.photoUrl} alt="" />
          </div>
          {/* right  */}
          <div className="flex flex-col gap-2">
            <h2 className="font-sans font-semibold text-3xl">
              {matchCoffe.cName}
            </h2>
            <p className="text-lg">Chef:{matchCoffe.cChef}</p>
            <p className="text-lg">Supplier:{matchCoffe.cSupplier}</p>
            <p className="text-lg">Taste:{matchCoffe.cTaste}</p>
            <p className="text-lg">Details:{matchCoffe.cDetails}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoffeDetails;
