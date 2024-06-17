
import React, { Component } from "react";

export default class Table extends Component {
  render() {
    return (
      <div>
        {" "}
        <table border={2}>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr key={index}>
                <td>{item.name}</td>
                <td>{item.email}</td>
              </tr>
            ))}
          </tbody>
        </table>{" "}
      </div>
    );
  }
}
