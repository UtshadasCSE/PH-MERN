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
      <Linechart />
      <Pichart />
      <Phones />
    </>
  );
}

export default App;
