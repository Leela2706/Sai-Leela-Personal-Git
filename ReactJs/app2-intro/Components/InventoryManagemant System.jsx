import { Component } from "react";
import { InventoryManagementSystemchildcomponent } from "./InventoryManagementSystemchildcomponent";

export class InventoryManagementSystem extends Component {
  state = {
    persons: [
      {
        productname: "Bike",
        quantityavailable: "first",
        price: 100000,
      },
    ],
  };
  render() {
    return (
      <div>
        <h1>InventoryManagementSystem-component</h1>
        {this.state.persons.map((persons, i) => {
          return (
            <InventoryManagementSystemchildcomponent
              newperson={persons}
              key={i}
            />
          );
        })}
        <hr/>
      </div>
    );
  }
}