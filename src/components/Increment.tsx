import React, { useContext } from "react";
import { CountContext } from "../state/countContext";

const Increment = () => {
  const { countDispatch } = useContext(CountContext);
  return (
    <div style={{ marginTop: 3 }}>
      <button onClick={() => countDispatch("inc")}>Increment</button>
    </div>
  );
};

export default Increment;
