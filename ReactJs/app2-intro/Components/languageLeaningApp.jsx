import { Component } from "react";
import { LanguageLearningAppchildcomponent } from "./LanguageLearningAppchildcomponent";

export class LanguageLearningApp extends Component {
  state = {
    persons: [
      {
        vocabularywords: "aeiou",
        definitions: "60%",
        examplesentences: "6000",
      },
    ],
  };

  render() {
    return (
      <div>
        <h1>LanguageLearningApp-component</h1>
        {this.state.persons.map((persons, i) => {
          return (
            <LanguageLearningAppchildcomponent newperson={persons} key={i} />
          );
        })}
        <hr />
      </div>
    );
  }
}