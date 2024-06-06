import { Component } from "react";
import { HotelReservationSystemchildcomponent } from "./HotelReservationSystemchildcomponent";

export class HotelReservationSystem extends Component {
  state = {
    persons: [
      {
        roomnumber: "9640744182",
        guestname: "Vijay",
        checkindate: "12/3/2009",
        checkoutdate: "3/4/2009",
      },
    ],
  };
  render() {
    return (
      <div>
        <h1>HotelReservationSystem-component</h1>
        {this.state.persons.map((persons, i) => {
          return (
            <HotelReservationSystemchildcomponent newperson={persons} key={i} />
          );
        })}
        <hr />
      </div>
    );
  }
}
