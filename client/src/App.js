import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <h1>Exam SEM 3</h1>
        <form>
          <input type="text" placeholder="Subject" />
          <input type="text" placeholder="Start time" />
          <input type="text" placeholder="Date" />
          <input type="text" placeholder="Duration" />
          <input type="text" placeholder="Room" />
          <input type="text" placeholder="Faculty" />
        </form>
        <button>Submit</button>
      </div>
    </div>
  );
}

export default App;
