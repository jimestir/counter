import React, { useState } from "react";
import "./App.css";

function App() {
  const [value, setValue] = useState(0);

  return (
    <>
      <div className="App">
        {value}
        <button onClick={() => setValue(value + 1)}>+</button>
        <button onClick={() => setValue(value - 1)}>-</button>
        <button onClick={() => setValue(0)}>reset</button>
      </div>
      ;
    </>
  );
}

export default App;
