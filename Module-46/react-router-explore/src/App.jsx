import "./App.css";
import ReuableForm from "./components/ReusableForm/ReuableForm";
// import HookForm from "./components/HookForm/HookForm";
// import Refform from "./components/Refform/Refform";
// import Simpleform from "./components/Simpleform/Simpleform";
// import Stateform from "./components/Stateform/Stateform";

function App() {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <div className="flex gap-4 h-screen justify-center items-center">
        {/* <Simpleform /> */}
        {/* <Stateform /> */}
        {/* <Refform /> */}
        {/* <HookForm /> */}
        <ReuableForm title="SignUp" handleSubmit={handleSubmit} />
        <ReuableForm
          title="Update "
          handleSubmit={handleSubmit}
          btnText="Update"
        />
      </div>
    </>
  );
}

export default App;
