import React from 'react'

const Sample_form = ({handldeChange, user, createUser, isEdit, updateuser}) => {
  return (
    <div className="mb-3">
       <form action="">
       <h1>Wellness Center Membership Registration Form</h1>
        <br />
      <label>Name:</label>
      <br />
      <input type="text" name="name" id=""  onChange={handldeChange} placeholder='First' />
      <input type="text" name="name" id=""  placeholder='Last' />
      <br />
      <br />
      <label>Birth Date:</label>
      <input type="number"  id="" onChange={handldeChange} placeholder='MM/DD/YY' />
      <br />
      <br />
      <label>Email Address:</label>
      <input type="email" name="" id="" onChange={handldeChange} placeholder='Enter Your Email'/>
      <br />
      <label>Insurance</label>
      <input type="text" name="" id="" />
      <br />
      <label>Terms Of Service</label>
      --
      <br />
      <button type="button">Submit Form</button>
       </form>

    </div>
   
  )
}

export default Sample_form
