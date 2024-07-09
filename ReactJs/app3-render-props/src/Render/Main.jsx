import React from "react";
import Click_Counter from "./Click_Counter";
import Hover_Counter from "./Hover_Counter";
import Counter from "./Counter";
const Main =()=>{
    return (
    <div>
        <Counter render ={(count,incrementCount) => <Click_Counter count={count} incrementCount={incrementCount}/>}/>

      <Counter render={(count, incrementCount) => <Hover_Counter count={count} incrementCount={incrementCount}/>}/>
     </div>
        
    )
}
export default Main