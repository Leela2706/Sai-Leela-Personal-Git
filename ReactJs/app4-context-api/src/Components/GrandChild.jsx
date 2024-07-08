import React from 'react'
import Child from './Child'

const GrandChild = ({message}) => {
  return (
    <div id='grandChild'>
        <h2>Grand-Child</h2>
        <Child message={message}/>
    </div>
  )
}

export default GrandChild
