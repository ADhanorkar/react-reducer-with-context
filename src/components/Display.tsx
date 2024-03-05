import React, { useContext } from "react";
import { CountContext } from "../state/countContext";

const Display = () => {
  const { countState } = useContext(CountContext);
  return <div style={{ marginTop: 3 }}>Current Count: {countState}</div>;
};

export default Display;
