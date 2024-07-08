import React from 'react'
import Parent from './Parent'

const GrandParent = ({message}) => {
  return (
    <div id='grandParent'>
        <h2>Grand-Parent</h2>
      <Parent message={message}/>
    </div>
  )
}

export default GrandParent
