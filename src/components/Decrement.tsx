import React, { useContext } from "react";
import { CountContext } from "../state/countContext";

const Decrement = () => {
  const { countDispatch } = useContext(CountContext);
  return (
    <div style={{ marginTop: 3 }}>
      <button onClick={() => countDispatch("dec")}>Decrement</button>
    </div>
  );
};

export default Decrement;
