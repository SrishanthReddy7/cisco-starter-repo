import "./App.css";
import Banner from "./components/Banner";
import Exhibit from "./components/Exhibit";

function App() {
  return (
    <div className="App">
      <Banner />

      <Exhibit title="Public IP">
        <p>Loading...</p>
      </Exhibit>

      <Exhibit title="Latency">
        <p>Loading...</p>
      </Exhibit>
    </div>
  );
}

export default App;