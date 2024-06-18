import React, { Component } from 'react'

export default class Html_Form extends Component {
  render() {
    const { name, email, handleChange, handleSubmit } = this.props;
    return (
      <div>
        <form onSubmit={handleSubmit}>
          <div>
            <label>
              Name:
              <input type="text" name="name" value={name} onChange={handleChange} />
            </label>
          </div>
          <div>
            <label>
              Email:
              <input type="email" name="email" value={email} onChange={handleChange} />
            </label>
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    )
  }
}
