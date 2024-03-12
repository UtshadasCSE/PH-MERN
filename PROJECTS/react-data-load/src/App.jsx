import "./App.css";
import Watch from "./components/Watch/Watch";
import { useEffect, useState } from "react";
function App() {
  const [watches, setWatches] = useState([]);
  useEffect(() => {
    fetch("watches.json")
      .then((res) => res.json())
      .then((data) => setWatches(data));
  }, []);
  return (
    <>
      <h1>Online Shop</h1>
      {watches.map((watch) => {
        return <Watch key={watch.id} watch={watch} />;
      })}
    </>
  );
}

export default App;
