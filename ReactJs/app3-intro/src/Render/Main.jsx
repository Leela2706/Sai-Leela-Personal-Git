import React from 'react'
import Counter from './Counter'
import Click_Counter from './Click_Counter'
import Hover_Counter from './Hover_Counter'

const main = () => {
  return (
    <div>
      <Counter render={(count, incrementCount) => <Click_Counter count={count} incrementCount={incrementCount}/>}/>

      <Counter render={(count, incrementCount) => <Hover_Counter count={count} incrementCount={incrementCount}/>}/>
    </div>
  )
}

export default main
