import React from 'react'
import { useState } from 'react'
import Sample_form from './Sample_form';
import Sample_table from './Sample_table';

const Sample = () => {
 const [user, setUser] = useState({
    DateOfBirth: "",
    email:""
 });
const createUser = () =>{
    axios.post("http://localhost:3000/users",user).then(()=>{
        console.log ("User Added Successfully !!!");
        clearUser();
        getUserFromServer();
    });  
};
const editUser = (usr)=> {
    setUser(usr);
    // setIsEdit(true)
};
const deleteUser= (usr) => {
    axios.delete("http://localhost:3000/users",usr.id).then(()=>{
        getUsersFromServer();
    })
};
const updateUser = ()=>{
    axios.put("http://localhost:3000/users",user.id,user).then(()=>{
        getUserFromServer();
        clearUser();
        // setIsEdit(False)
    })
};
const clearUser = ()=>{
    setUser({
        First: "",
        Last:"",
        DateOfBirth:"",
        Email: "",
        Insurance:""
    });
};
const handleChange = (e) =>{
    const newUser = { ...user };
    newUser[e.target.First] = e.target.value;
    newUser[e.target.Last] = e.target.value;
    setUser(newUser);
};

return(
    <div className="container">
        <div className="row">
            <div className="col-1">
                <Sample_form
                 handleChange={handleChange}
                 user={user}
                 createUser={createUser}
                 isEdit={isEdit}
                 updateUser={updateUser}
                />
            </div>
            <div className="col-8">
                    <Sample_table
                    allUsers={allUsers}
                    editUser={editUser}
                    deleteUser={deleteUser}
                    />
            </div>
        </div>
    </div>
);


};

export default Sample
