import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import Navbar from "../shared/Navbar/Navbar";

const Bookmarks = () => {
  const [storeData, setStoreData] = useState([]);
  const allnewsData = useLoaderData();
  const localData = localStorage.getItem("bookmark-news");
  const parseLocalData = JSON.parse(localData);

  useEffect(() => {
    setStoreData(
      allnewsData.filter((news) => parseLocalData.includes(news._id))
    );
  }, []);
  return (
    <div>
      <Navbar />
      <div className="py-4">
        <div className="text-2xl font-semibold text-center py-8 bg-slate-200 rounded-2xl">
          <h2>Bookmarks News</h2>
        </div>
        <div className="grid grid-cols-3 gap-3 py-3">
          {storeData.map((store) => (
            <div
              key={store._id}
              className="max-w-xs p-6 rounded-md shadow-md dark:bg-gray-50 dark:text-gray-900"
            >
              <img
                src={store.image_url}
                alt=""
                className="object-cover object-center w-full rounded-md h-72 dark:bg-gray-500"
              />
              <div className="mt-6 mb-2">
                <span className="block text-xs font-medium tracking-widest uppercase dark:text-violet-600">
                  {store.author.name}
                </span>
                <h2 className="text-xl font-semibold tracking-wide">
                  {store.title}
                </h2>
              </div>
              <p className="dark:text-gray-800">
                {store.details.slice(0, 200)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Bookmarks;
