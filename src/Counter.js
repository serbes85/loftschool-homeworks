import React, { useState } from "react";

export const Counter = () => {
  const [count, setCount] = useState(0);
  const increment = () => {
    setCount((count) => count + 1);
  };

  const decrement = () => {
    setCount((count) => count - 1);
  };

  return (
    <>
      <div>{count}</div>
      <button className="btn-increment" onClick={increment}>
        Increment
      </button>
      <button className="btn-decrement" onClick={decrement}>
        Decrement
      </button>
    </>
  );
};
