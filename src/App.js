import React from "react";
import "./App.css";
import useCounter from "./hooks/useCounter";

function App() {
  const counterA = useCounter(0);
  const counterB = useCounter(0);

  return (
    <>
      <div className="App">
        <section className="App__counterA">
          {counterA.counter}
          <div className="App__counterA__buttons">
            <button onClick={counterA.increase}>+</button>
            <button onClick={counterA.decrease}>-</button>
            <button onClick={counterA.reset}>reset</button>
          </div>
        </section>

        <section className="App__counterB">
          {counterB.counter}
          <div className="App__counterB__buttons">
            <button onClick={counterB.increase}>+</button>
            <button onClick={counterB.decrease}>-</button>
            <button onClick={counterB.reset}>reset</button>
          </div>
        </section>
      </div>
      ;
    </>
  );
}

export default App;
