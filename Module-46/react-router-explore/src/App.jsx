import "./App.css";
import HookForm from "./components/HookForm/HookForm";
// import Refform from "./components/Refform/Refform";
// import Simpleform from "./components/Simpleform/Simpleform";
// import Stateform from "./components/Stateform/Stateform";

function App() {
  return (
    <>
      <div className="flex gap-4 h-screen justify-center items-center">
        {/* <Simpleform /> */}
        {/* <Stateform /> */}
        {/* <Refform /> */}
        <HookForm />
      </div>
    </>
  );
}

export default App;
