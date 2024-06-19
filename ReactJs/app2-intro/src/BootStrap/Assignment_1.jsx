import React, { useState } from "react";

const User = () => {
    const [userDetails, setUserDetails] = useState({
        email: "",
        password: "",
        number: "",
        adress: "",
    });
    const [allUsers, setAllUsers] = useState([]);

    const handleChange = (e) => {
        const newUser = { ...userDetails };
        newUser[e.target.name] = e.target.value;
        setUserDetails(newUser);
    };

    const addUser = () => {
        const newAllUsers = [...allUsers];
        newAllUsers.push(userDetails);
        setAllUsers(newAllUsers);
        clearForm();
    };

    const editUser = (usr) => {
        setUserDetails(usr);
    };

    const deleteUser = (index) => {
        const newAllUsers = allUsers.filter((i) => i !== index);
        setAllUsers(newAllUsers);
    };

    // const updateUser = () => {};

    const clearForm = () => {
        setUserDetails({
            email: "",
            password: "",
            number: "",
            adress: "",
        });
    };

    const { email, password, number, adress } = userDetails;

    return (
        <div>
            <nav className="" data-bs-theme="dark">
                <h1> Form and Tables</h1>
            </nav>
            <div className="container ">
                <div className="row ">
                    <div className="col-3 ">
                        <form>
                            <div className="mb-3">
                                <label htmlFor="exampleInputEmail1" className="form-label">
                                    Email address
                                </label>
                                <input
                                    type="email"
                                    className="form-control"
                                    name="email"
                                    value={email}
                                    onChange={(e) => {
                                        handleChange(e);
                                    }}
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputPassword1" className="form-label">
                                    Password
                                </label>
                                <input
                                    type="password"
                                    className="form-control"
                                    onChange={(e) => {
                                        handleChange(e);
                                    }}
                                    name="password"
                                    value={password}
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputPassword1" className="form-label">
                                    number
                                </label>
                                <input
                                    type="number"
                                    className="form-control"
                                    onChange={(e) => {
                                        handleChange(e);
                                    }}
                                    name="number"
                                    value={number}
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputPassword1" className="form-label">
                                    Adress
                                </label>
                                <input
                                    type="adress"
                                    className="form-control"
                                    onChange={(e) => {
                                        handleChange(e);
                                    }}
                                    name="adress"
                                    value={adress}
                                />
                            </div>
                            <button
                                type="button"
                                className="btn btn-primary"
                                onClick={addUser}
                            >
                                Submit
                            </button>
                        </form>
                    </div>
                    <div className="col-9">
                        <table className="table table-striped table-hover">
                            <thead>
                                <tr>
                                    <th>Email</th>
                                    <th>Password</th>
                                    <th>number</th>
                                    <th>adress</th>
                                    <th>Edit</th>
                                    <th>Delete</th>
                                </tr>
                            </thead>
                            <tbody>
                                {allUsers.map((usr, index) => {
                                    return (
                                        <tr key={index}>
                                            <td>{usr.email}</td>
                                            <td>{usr.password}</td>
                                            <td>{usr.number}</td>
                                            <td>{usr.adress}</td>
                                            <td>
                                                <button
                                                    className="btn btn-warning"
                                                    onClick={() => {
                                                        editUser(usr);
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
};

export default User;
