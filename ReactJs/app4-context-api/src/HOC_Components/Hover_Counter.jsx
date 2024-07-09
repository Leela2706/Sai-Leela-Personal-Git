import React from "react";
import HOC_count from "./HOC_Counter";


function HoverCounter(props) {
  const { count, incrementCount, decrementCount } = props;
  return (
    <div>
      {" "}
      <h1>You clicked {count} times !!!</h1>
      <button
        className="btn btn-primary"
        type="button"
        onMouseOver={incrementCount}
      >
        incrementCount
      </button>
      <button className="btn btn-danger" onMouseOver={decrementCount}>
        decrementCount
      </button>
    </div>
  );
}

export default HOC_count(HoverCounter);
