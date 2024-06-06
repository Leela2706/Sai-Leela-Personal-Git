import { Component } from "react";

export class FlightBookingSystem extends Component() {
  state = {
    persons: [
      {
        flightnumber: "44182",
        departurecity: "Vijay",
        arrivalcity: "th",
        departuretime: "10:30pm",
      },
    ],
  };
  render() {
    return (
      <div>
        <h1>BlogPostManager-component</h1>
        {this.state.persons.map((persons, i) => {
          return <FlightBookingSystem newperson={persons} key={i} />;
        })}
        <hr />
      </div>
    );
  }
}
