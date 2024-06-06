import { Component } from "react";

export class FitnessChallengeTrackechildcomponent extends Component {
  render() {
    console.log(this.props);
    const { newperson } = this.props;
    return (
      <div>
        <ul>
          <li>{newperson.chalengename}</li>
          <li>{newperson.startdate}</li>
          <li>{newperson.enddate}</li>
          <li>{newperson.tags}</li>
        </ul>
      </div>
    );
  }
}
