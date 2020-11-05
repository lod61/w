import { useState } from "react";
import "./App.css";
import j from "./data/data.json";
import HeaderC from "./components/HeaderC";
import MasonryC from "./components/MasonryC";

function App() {
  const [d, setD] = useState(null);
  const onChange = (type) => {
    type ? setD(j) : setD(j.slice(0, 10));
  };
  return (
    <div className="App">
      <HeaderC data={j} onChange={onChange} />
      <div className="img-container">
        <MasonryC data={d ? d : j} />
      </div>
    </div>
  );
}

export default App;
