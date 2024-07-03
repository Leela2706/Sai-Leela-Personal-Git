import React, { useState } from 'react'

const Counter = (props) => {
    const [count,setCount] =useState(0)
    
    const handleIncrement = () =>{
        setCount(count + 1)
    }
  return (
    <div>
        {props.render(count,handleIncrement)}
    </div>
  )
}

export default Counter
