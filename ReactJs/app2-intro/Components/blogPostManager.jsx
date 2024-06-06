import { Component } from "react";
import { BlogPostManager1 } from "./BlogPostManager1";

export class BlogPostManager extends Component {
  state = {
    persons: [
      {
        titile: "exam",
        Author: "ram",
        name: "vijayram",
        mail: "vijayram@143",
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
