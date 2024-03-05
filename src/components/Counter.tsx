import React from "react";
import Display from "./Display";
import Increment from "./Increment";
import Decrement from "./Decrement";
import Reset from "./Reset";

const Counter = () => {
  return (
    <div>
      Counter Component
      <Display />
      <Increment />
      <Decrement />
      <Reset />
    </div>
  );
};

export default Counter;
