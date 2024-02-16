import "./App.css";
import { useState } from "react";

function App() {
  //const [firstItem, functionToUpdateFirstItem] = useState()  //! This is the Example
  const [show, setShow] = useState(false);

  return (
    <div className="App">
      <button
        onClick={() => {
          setShow(!show);
        }}
      >
        {show ? "hide" : "show"}
      </button>{" "}
      {/* This is a ternary, {variable ? true response ? false response}  */}
      {show && <h1>Revealed compoenent</h1>}
    </div>
  );
}

export default App;
