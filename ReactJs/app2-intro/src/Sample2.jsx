import { Component } from "react";
import "./Sample2.css"

export class Sample2 extends Component {
    state = {
        userDetails: {
            Name: "",
            Email: "",
            Number: "",
            WebSite: "",
            Message: ''
        },
        allUser: [],
        showUpdatebtn: false,
    }
    handleChange = (e) => {
        const inputName = e.target.name;
        console.log(inputName);

        const newState = { ...this.state };
        newState.userDetails[inputName] = e.target.value;
        this.setState(newState);
    };
    addUser = () => {
        const newState = { ...this.state };
        newState.allUser.push({ ...this.state.userDetails });
        this.setState(newState);
        this.clearForm();
    };

    clearForm = () => {
        const newState = { ...this.state };
        newState.userDetails = {
            Name: "",
            Email: "",
            Number: "",
            WebSite: "",
            Message: ''
        };
        this.setState(newState);
    };
    deleteUser = (i) => {
        const newState = { ...this.state };
        newState.allUser.splice(i, 1);
        this.setState(newState);
    };

    edituser = (obj) => {
        const newState = { ...this.state.userDetails }
        newState.userDetails = obj
        newState.showUpdatebtn=true;
        this.setState(newState)
    }

    render() {
        return <div>
            <h1>Quick Contact</h1>
            <h4>Contact us today,and get reply with in 24 hours!</h4>
            <form>
                <input type="text" name="Name" id="" placeholder="Your Name" value={this.state.userDetails.Name} onChange={this.handleChange} />
                <br />
                <input type="text" name="Email" id="" placeholder="Your Email Address" value={this.state.userDetails.Email} onChange={this.handleChange} />
                <br />
                <input type="text" name="Number" id="" placeholder="Your Phone Number" value={this.state.userDetails.Number} onChange={this.handleChange} />
                <br />
                <input type="text" name="WebSite" id="" placeholder="Your Web Site Starts with http://" className="http" value={this.state.userDetails.WebSite} onChange={this.handleChange} />
                <br />
                <input type="text" name="Message" id="" placeholder="Type Your Message Here" className="message" value={this.state.userDetails.Message} onChange={this.handleChange} />
                <br />

                {this.state.showUpdatebtn ? (
                    <button type="button" onClick={this.addUser}>updateuser</button>
                ) : (
                    <button type="button" onClick={this.addUser}>add user</button>
                )}



            </form>
            <br />
            <table border={2}>
                <thead>
                    <tr>
                        <td>Name</td>
                        <td>Email</td>
                        <td>Number</td>
                        <td>Web Site</td>
                        <td>Message</td>
                        <td>edit</td>
                        <td>delete</td>
                    </tr>
                </thead>
                <tbody>
                    {this.state.allUser.map((obj, i) => {
                        return (
                            <tr>
                                <td>{obj.Name}</td>
                                <td>{obj.Email}</td>
                                <td>{obj.Number}</td>
                                <td>{obj.WebSite}</td>
                                <td>{obj.Message}</td>
                                <td>
                                    <button
                                        type="button"
                                        onClick={() => {
                                            this.edituser(obj);
                                        }}
                                    >
                                        edituser
                                    </button>
                                </td>

                                <td>
                                    <button
                                        type="button"
                                        onClick={() => {
                                            this.deleteUser(i);
                                        }}
                                    >
                                        deleteUser
                                    </button>
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    }
}
