import React, { useState } from "react";

function HOC_count(ClickCounter) {
  console.log(ClickCounter);

  const NewComp = () => {
    const [count, setcount] = useState(0);

    const incrementCount = () => {
      setcount(count + 1);
    };
    const decrementCount = () => {
      setcount(count - 1);
    };
    return (
      <ClickCounter
        count={count}
        incrementCount={incrementCount}
        decrementCount={decrementCount}
      />
    );
  };
  return NewComp;
}

export default HOC_count;
