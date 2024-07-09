import React from "react";
import HOC_count from "./HOC_Counter";


function ClickCounter(props) {
  const { count, incrementCount, decrementCount } = props;

  return (
    <div>
      <h1 id="Context_API">Higher Order Component</h1>

      <h1>You clicked {count} times !!!</h1>
      <button
        className="btn btn-primary"
        type="button"
        onClick={incrementCount}
      >
        incrementCount
      </button>
      <button className="btn btn-danger" onClick={decrementCount}>
        decrementCount
      </button>
      <hr />
    </div>
  );
}

export default HOC_count(ClickCounter);
