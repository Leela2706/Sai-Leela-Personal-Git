import React from 'react'

const Sample_table = ({ allUser,edirUser,deleteUser}) => {
  return (
    <div>
        <table>
            <thead>
                <tr>
                    <th>First</th>
                    <th>Last</th>
                    <th>Date of Birth</th>
                    <th>Email</th>
                    <th>Insurance</th>
                </tr>
            </thead>
            <tbody>
                {alluser.map((usr,i)=>{
                    return <tr key={i}>
                        <td>{usr.First}</td>
                        <td>{usr.Last}</td>
                        <td>{usr.dateOfBirth}</td>
                        <td>{usr.Email}</td>
                        <td>
                            <button onClick={()=>{edirUser(usr)}}>Edit</button>
                        </td>
                        <td>
                            <button onClick={()=>{deleteUser(usr)}}>Delete</button>
                        </td>
                    </tr>
                })}
            </tbody>
        </table>
    </div>
  )
}


export default Sample_table
