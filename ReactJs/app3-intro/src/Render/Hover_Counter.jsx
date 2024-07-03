import React from 'react'

const Hover_Counter = ({count, incrementCount}) => {
  return (
    <div>
      <button onMouseOver={incrementCount}>Hover on Me</button>
      <h2>You Hovered{count} Times</h2>
    </div>
  )
}

export default Hover_Counter
