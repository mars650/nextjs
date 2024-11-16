import { useState } from "react";
import BasicAdding from "../components/BasicAdding";
// import AdvancedForm from "./components/AdvancedForm";
import "./App.css";

function App() {
  const [view, setView] = useState("basic");
  return (
    <div className="App">
      {/* <nav>
        <h3
          onClick={() => setView("basic")}
          style={{ color: view === "basic" ? "#fff" : "" }}
        >
          Basic
        </h3>
        <h3
          onClick={() => setView("advanced")}
          style={{ color: view === "advanced" ? "#fff" : "" }}
        >
          Advanced
        </h3>
      </nav> */}
      {<BasicAdding />}
      {/* {view === "basic" ? <BasicForm /> : <AdvancedForm />} */}
    </div>
  );
}

export default App;