import React, { useContext } from "react";
import { CountContext } from "../state/countContext";

const Reset = () => {
  const { countDispatch } = useContext(CountContext);
  return (
    <div style={{ marginTop: 3 }}>
      <button onClick={() => countDispatch("reset")}>Reset</button>
    </div>
  );
};

export default Reset;
