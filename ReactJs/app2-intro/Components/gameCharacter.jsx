import { Component } from "react";
import { GameCharacterchildcomponent } from "./GameCharacterchildcomponent";

export class GameCharacter extends Component {
  state = {
    persons: [
      {
        name: "Ram",
        level: "200",
        healthpoints: "10%",
      },
    ],
  };

  render() {
    return (
      <div>
        <h1>GameCharacter-component</h1>
        {this.state.persons.map((persons, i) => {
          return <GameCharacterchildcomponent newperson={persons} key={i} />;
        })}
        <hr />
      </div>
    );
  }
}
