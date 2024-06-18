import { Component } from "react";
import { BlogPostManager1 } from "./BlogPostManager1";

export class BlogPostManager extends Component {
  state = {
    persons: [
      {
        titile: "exam",
        Author: "Chethan",
        name: "Bhagath",
        mail: "Bhagath99@gmail.com",
      },
    ],
  };

  render() {
    return (
      <div>
        <h1>BlogPostManager-component</h1>
        {this.state.persons.map((persons, i) => {
          return <BlogPostManager1 newperson={persons} key={i} />;
        })}
        <hr />
      </div>
    );
  }
}
