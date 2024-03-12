import "./App.css";
import Watch from "./components/Watch/Watch";
function App() {
  const watches = [
    {
      id: 1,
      brand: "Apple",
      model: "Apple Watch Series 7",
      color: "Midnight",
      price: 399,
      features: ["Always-On Retina display", "ECG app", "Blood Oxygen app"],
      image: "https://example.com/apple_watch_series_7.jpg",
    },
    {
      id: 2,
      brand: "Samsung",
      model: "Galaxy Watch 4",
      color: "Black",
      price: 349,
      features: ["BioActive Sensor", "Samsung Health app", "Built-in GPS"],
      image: "https://example.com/galaxy_watch_4.jpg",
    },
    {
      id: 3,
      brand: "Fitbit",
      model: "Fitbit Sense",
      color: "Carbon/Graphite",
      price: 299,
      features: ["ECG app", "Built-in GPS", "Stress Management Score"],
      image: "https://example.com/fitbit_sense.jpg",
    },
  ];

  return (
    <>
      <h1>Online Shop</h1>
      {watches.map((watch) => {
        console.log()
        <Watch watch={watch} />;
      })}
    </>
  );
}

export default App;
