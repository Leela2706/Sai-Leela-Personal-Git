import { Component } from "react";
import { CalendarAppointmentschildComponent } from "./CalendarAppointmentschildcomponent";

export class CalendarAppointments extends Component {
  state = {
    persons: [
      {
        eventname: "therrtham",
        date: "23/4/2026",
        time: "9:30 am",
        location: "Bank",
      },
    ],
  };
  render() {
    return (
      <div>
        <h1>CalendarAppointments-component</h1>
        {this.state.persons.map((persons, i) => {
          return (
            <CalendarAppointmentschildComponent newperson={persons} key={i} />
          );
        })}
        <hr />
      </div>
    );
  }
}
