import React, { useState } from 'react'
import GrandParent from './GrandParent'

const Main = () => {
    const [message,setMessage] = useState("This is Context Api")
  return (
    <div id='mainDiv'>
        <h2>Main</h2>
        <GrandParent message={message}/>
    </div>
  )
}

export default Main
