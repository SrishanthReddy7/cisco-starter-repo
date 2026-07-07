import "./App.css";
import Banner from "./components/Banner";
import Exhibit from "./components/Exhibit";
import PublicIP from "./components/PublicIP";
import Latency from "./components/Latency";

function App() {
  return (
    <div className="App">
      <Banner />

      <Exhibit title="Public IPv4">
        <PublicIP version="v4" />
      </Exhibit>

      <Exhibit title="Public IPv6">
        <PublicIP version="v6" />
      </Exhibit>

      <Exhibit title="Latency">
        <Latency />
      </Exhibit>
    </div>
  );
}

export default App;