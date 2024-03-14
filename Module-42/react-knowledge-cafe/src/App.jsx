import { useState } from "react";
import Blogs from "./components/Blogs/Blogs";
import Bookmarks from "./components/Bookmarks/Bookmarks";
import Header from "./components/Header/Header";
import "./App.css";

function App() {
  const [bookmarks, setBookmarks] = useState([]);
  const [readingtime, setReadingtime] = useState(0);
  const handleBookmarks = (blog) => {
    const newBookmarks = [...bookmarks, blog];
    setBookmarks(newBookmarks);
  };
  const handleReadingTime = (time) => {
    const newReadingTime = readingtime + time;
    setReadingtime(newReadingTime);
  };
  return (
    <>
      <Header />
      <main
        className="md:flex max-w-6xl justify-between
       gap-12  mx-auto my-8 max-sm:flex-col max-sm:w-11/12 max-sm:mx-auto"
      >
        <Blogs
          handleReadingTime={handleReadingTime}
          handleBookmarks={handleBookmarks}
        />
        <Bookmarks readingtime={readingtime} bookmarks={bookmarks} />
      </main>
    </>
  );
}

export default App;
