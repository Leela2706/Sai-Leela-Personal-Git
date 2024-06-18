import React, { Component } from "react";
import"./Form.css";
import Table from "./Table";
import Html_Form from "./Html_Form";
class SimpleForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Leela",
      email: "",
      data: [],
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    const { name, email, data } = this.state;
    this.setState({
      data: [...data, { name, email }],
      name: "",
      email: "",
    });
  }

  render() {
    const { name, email, data } = this.state;

    return (
      <div>
        <Html_Form />
        <Table />
      </div>
    );
  }
}

export default SimpleForm;