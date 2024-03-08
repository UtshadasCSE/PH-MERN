import "./App.css";

function App() {
  function handleBtn() {
    alert("Button Click");
  }
  const addNum = (num) => {
    alert(num + 3);
  };
  return (
    <>
      <button onClick={handleBtn}>Click Me</button>
      <button
        onClick={() => {
          alert("Pressed Me Close you eyes");
        }}
      >
        Press Me
      </button>
      <button onClick={() => addNum(4)}>Number Add</button>
    </>
  );
}

export default App;
