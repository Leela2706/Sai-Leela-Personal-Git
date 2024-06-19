import React, { useState } from "react";

function Sample2() {
    const [userDetails, setUserDetails] = useState({
        email: "",
        Password: "",
    });
    const [allUsers, setAllUsers] = useState([]);

    const handlechenge = (e) => {
        const newUser = { ...userDetails };
        newUser[e.target.name] = e.target.value;
        setUserDetails(newUser);
    };
    const addUser = () => {
        const newAllUsers = [...allUsers];
        newAllUsers.push(userDetails);
        setAllUsers(newAllUsers);
        // clearForm();
    };

    const edituser = (usr) => {
        setUserDetails(usr);
    };

    const deleteUser = (index) => {
        const newAllUsers = allUsers.filter((i) => i !== index);
        setAllUsers(newAllUsers);
    };
    const { email, Password } = userDetails;
    return (
        <div>
            <h1>Assignment_2</h1>
            <div class="container text-center">
                <div class="row">
                    <div class="col">
                        <h1>Form</h1>
                        <form>
                            <div class="mb-3">
                                <label htmlFor="" class="form-label">
                                    Email address
                                </label>
                                <input
                                    type="email"
                                    class="form-control"
                                    onChange={(e) => {
                                        handlechenge(e);
                                    }}
                                    name="email"
                                    value={email}
                                />
                                <div id="emailHelp" class="form-text"></div>
                            </div>
                            <div class="mb-3">
                                <label htmlFor="" class="form-label">
                                    Password
                                </label>
                                <input
                                    type="password"
                                    class="form-control"
                                    onChange={(e) => {
                                        handlechenge(e);
                                    }}
                                    name="Password"
                                    value={Password}
                                />
                            </div>

                            <button
                                type="submit"
                                className="btn btn-primary"
                                onClick={addUser}
                            >
                                Submit
                            </button>
                        </form>
                    </div>
                    <div class="col-6">
                        <h1>Table</h1>
                        <table class="table">
                            <thead>
                                <tr>
                                    <th>email</th>
                                    <th>Password</th>
                                    <th>Edit</th>
                                    <th>Delete</th>
                                </tr>
                            </thead>
                            <tbody>
                                {allUsers.map((usr, index) => {
                                    return (
                                        <tr>
                                            <td>{usr.email}</td>
                                            <td>{usr.Password}</td>
                                            <td>
                                                <button
                                                    className="btn btn-info"
                                                    onClick={() => {
                                                        edituser(usr);
                                                    }}
                                                >
                                                    Edit
                                                </button>
                                            </td>
                                            <td>
                                                <button
                                                    className="btn btn-danger"
                                                    onClick={() => deleteUser(index)}
                                                >
                                                    Delete
                                                </button>
                                            </td>
                                        </tr>
                                    );
                                })}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Sample2;
