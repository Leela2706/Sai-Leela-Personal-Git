import React from 'react'
import GrandChild from './GrandChild'

const Parent = ({message}) => {
  return (
    <div id='parent'>
        <h2>Parent</h2>
        <GrandChild message={message}/>
    </div>
  )
}

export default Parent
