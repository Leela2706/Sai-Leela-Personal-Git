import React, { Component } from 'react'

export default class Html_Form extends Component {
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label>
              Name:
              <input type="text" name="name" value={Name} onChange={this.handleChange} />
            </label>
          </div>
          <div>
            <label>
              Email:
              <input type="email" name="email" value={email} onChange={this.handleChange} />
            </label>
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    )
  }
}
