import { useEffect, useState } from "react";

const Categorylist = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    fetch("categories.json")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);
  console.log(categories);
  return (
    <div>
      <div className="text-center py-16 flex flex-col gap-4">
        <h2 className="text-4xl font-extrabold text-[#1A1919]">
          Job Category List
        </h2>
        <p className="text-[#757575] max-sm:w-3/4 max-sm:mx-auto">
          Explore thousands of job opportunities with all the information you
          need. Its your future
        </p>
      </div>
      {/* Category Grid  */}
      <div className="grid grid-cols-4 max-sm:grid-cols-1 max-sm:w-[80%] gap-3 container mx-auto">
        {/* card-01  */}
        {categories.map((categorie) => (
          <div
            key={categorie.id}
            className="flex flex-col justify-center bg-[#9873FF0D] gap-3 p-5 rounded-lg"
          >
            <div className="">
              <img
                className="bg-[#7E90FE1A] p-4 rounded-lg"
                src={categorie.logo}
                alt=""
              />
            </div>
            <h2 className="font-semibold">{categorie.category_name}</h2>
            <p className="text-[#A3A3A3]">{categorie.availability}</p>
          </div>
        ))}
        {/* card-01  */}
      </div>
    </div>
  );
};

export default Categorylist;
