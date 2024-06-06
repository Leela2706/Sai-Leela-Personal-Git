import { Component } from "react";
import { EmployeeTimeTrackerchildcomponent } from "./EmployeeTimeTrackerchildcomonent";

export class EmployeeTimeTracker extends Component {
  state = {
    persons: [
      {
        employeename: "dinesh",
        date: "27/6/2006",
        starttime: "10:00 am",
        endtime: "6:00 pm",
      },
    ],
  };
  render() {
    return (
      <div>
        <h1>EmployeeTimeTracker component</h1>
        {this.state.persons.map((persons, i) => {
          return (
            <EmployeeTimeTrackerchildcomponent newperson={persons} key={i} />
          );
        })}
        <hr />
      </div>
    );
  }
}
