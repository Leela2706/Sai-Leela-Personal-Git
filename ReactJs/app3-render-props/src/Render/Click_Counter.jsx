import React from 'react'

const Click_Counter = ({count,incrementCount}) => {
  return (
    <div>
      <h2>You Clicked{count} times</h2>
      <button onClick={incrementCount}>Click Me </button>
    </div>
  )
}

export default Click_Counter
