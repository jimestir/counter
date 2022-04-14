import { useState } from "react";

function useCounter(value) {
  const [counter, setCounter] = useState(value);

  const increase = () => setCounter(counter + 1);
  const decrease = () => setCounter(counter - 1);
  const reset = () => setCounter(0);

  return {
    counter,
    increase,
    decrease,
    reset,
  };
}

export default useCounter;
