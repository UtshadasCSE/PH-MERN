import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { CiCalendar } from "react-icons/ci";

const LeftSideNav = () => {
  const [catagoris, setCatagoris] = useState([]);
  const [showCase, setShowCase] = useState([]);
  const [showmore, setShowmore] = useState(4);
  // handle showmore btn
  const handleShowmore = () => {
    setShowmore(catagoris.length);
  };
  // load catagoris
  useEffect(() => {
    fetch("../../../../public/data/categories.json")
      .then((res) => res.json())
      .then((data) => setCatagoris(data));
  }, []);
  // load showcase news
  useEffect(() => {
    fetch("../../../../public/data/leftNews.json")
      .then((res) => res.json())
      .then((data) => setShowCase(data));
  }, []);
  return (
    <div>
      <div>
        <h2 className="font-semibold text-xl">All Caterogy</h2>
        <div className="grid grid-cols-1 gap-3 py-4">
          {catagoris.map((catagori) => (
            <Link
              className="flex hover:border-2 hover:p-2 hover:rounded-lg hover:font-semibold duration-150"
              to={`/catagori/${catagori.id}`}
              key={catagori.id}
            >
              <p
                className={
                  parseInt(catagori.id) === 0
                    ? "bg-[#E7E7E7] w-full py-2 px-1 rounded-sm"
                    : "text-[#9F9F9F]"
                }
              >
                {catagori.name}
              </p>
            </Link>
          ))}
        </div>
        {/* leftside news shows  */}
        <div>
          <div>
            {showCase.slice(0, showmore).map((showData) => (
              <div key={showData.id} className="flex flex-col gap-3 py-3">
                <img className="rounded-xl" src={showData.image} alt="" />
                <h2 className="text-base font-semibold">{showData.title}</h2>
                <div className="flex justify-between">
                  <p className="text-[#403F3F]">{showData.category}</p>
                  <p className="flex items-center text-[#9F9F9F]">
                    <CiCalendar />
                    {showData.publish_date}
                  </p>
                </div>
              </div>
            ))}
            <div className={showmore === catagoris.length && "hidden"}>
              <div className="flex justify-center py-4">
                <button
                  onClick={handleShowmore}
                  className="btn btn-outline bg-[#D72050] text-white"
                >
                  Show More
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftSideNav;
