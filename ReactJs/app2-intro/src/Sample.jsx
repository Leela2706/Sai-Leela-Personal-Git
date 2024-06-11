import { Component } from "react";

export class Sample1 extends Component {
  state = {
    userdetails: {
      fname: "",
      lname: "",
      email: "",
    },
    allUser: [],
  };

  handleChenge = (e) => {
    const inputName = e.target.name;
    console.log(inputName);

    const newState = { ...this.state };
    newState.userdetails[inputName] = e.target.value;
    this.setState(newState);
  };
  addUser = () => {
    const newState = { ...this.state };
    newState.allUser.push({ ...this.state.userdetails });
    this.setState(newState);
    this.clearForm();
  };
  clearForm = () => {
    const newState = { ...this.state };
    newState.userdetails = {
      fname: "",
      lname: "",
      email: "",
    };
    this.setState(newState);
  };
  deleteUser = (i) => {
    const newState = { ...this.state };
    newState.allUser.splice(i, 1);
    this.setState(newState);
  };
  render() {
    return (
      <div>
        <h2>Welcome ReactJs Forms</h2>;
       
        <form>
          <label htmlFor="">First Name</label>
          <input
            type="text"
            name="fname"
            value={this.state.userdetails.fname}
            onChange={this.handleChenge}
          />
          {""}
          <br />
          <label htmlFor="">Last Name</label>
          <input
            type="text"
            name="lname"
            value={this.state.userdetails.lname}
            onChange={this.handleChenge}
          />
          {""}
          <br />
          <label htmlFor="">email</label>
          <input
            type="text"
            name="email"
            value={this.state.userdetails.email}
            onChange={this.handleChenge}
          />
          {""}
          <br />
          <br />
          <button type="button" onClick={this.addUser}>
            Add User
          </button>
        </form>
        <br />
        <table border={1}>
          <thead>
            <tr>
              <td>First Name</td>
              <td>Last Name</td>
              <td>Email</td>
              <td>Delete</td>
            </tr>
          </thead>
          <tbody>
            {this.state.allUser.map((obj, i) => {
              return (
                <tr>
                  <td>{obj.fname}</td>
                  <td>{obj.lname}</td>
                  <td>{obj.email}</td>
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
    );
  }
}
