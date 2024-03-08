import Actor from "./Actor";
import "./App.css";
import { Todo } from "./Todo";

function App() {
  const actors = ["salman", "sharukh", "ambani", "sid"];
  return (
    <>
      <Device name="Dj" />
      <Actor />
      {actors.map((actor) => {
        <Actor name={actor} />;
      })}
      <Person name="Phone" />

      <Todo task="learn react" isDone={true} />
    </>
  );
}

function Person() {
  const actor = {
    name: "Sharukh Khan",
    age: 60,
    movies: ["jab tak hai jaan", "kabhi khushi khabi gham"],
  };
  return (
    <>
      <div
        style={{
          border: "2px",
          borderRadius: "18px",
          backgroundColor: "red",
          padding: "20px",
          margin: "10px",
        }}
      >
        <h3>Hello {actor.name}</h3>
        <p>I know your favorite movie is {actor.movies[0]}</p>
      </div>
    </>
  );
}
function Device(props) {
  console.log(props);
}
export default App;
