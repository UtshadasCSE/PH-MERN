import "./App.css";
import Linechart from "./components/Linechart/Linechart";
import Nav from "./components/Nav/Nav";
import Phones from "./components/Phones/Phones";
import Pichart from "./components/Pichart/Pichart";
import PriceOptions from "./components/PriceOptions/PriceOptions";
// import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <>
      {/* <Navbar /> */}
      <Nav />
      <PriceOptions />
      <div className="flex flex-col justify-center items-center gap-4">
        <Linechart />
        <Pichart />
        <Phones />
      </div>
    </>
  );
}

export default App;
