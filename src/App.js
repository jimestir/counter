import React from "react";
import "./App.css";
import useCounter from "./hooks/useCounter";

function App() {
  const counterA = useCounter();
  const counterB = useCounter();

  return (
    <>
      <div className="App">
        <section className="App__counterA">
          {counterA.counter}
          <button onClick={counterA.increase}>+</button>
          <button onClick={counterA.decrease}>-</button>
          <button onClick={counterA.reset}>reset</button>
        </section>

        <section className="App__counterB">
          {counterB.counter}
          <button onClick={counterB.increase}>+</button>
          <button onClick={counterB.decrease}>-</button>
          <button onClick={counterB.reset}>reset</button>
        </section>
      </div>
      ;
    </>
  );
}

export default App;
