import React from "react";
import "./App.css";
import useCounter from "./hooks/useCounter";

function App() {
  const { counter, increase, decrease, reset } = useCounter();

  return (
    <>
      <div className="App">
        {counter}
        <button onClick={increase}>+</button>
        <button onClick={decrease}>-</button>
        <button onClick={reset}>reset</button>
      </div>
      ;
    </>
  );
}

export default App;
