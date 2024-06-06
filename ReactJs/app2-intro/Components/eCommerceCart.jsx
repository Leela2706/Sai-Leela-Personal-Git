import { Component } from "react";
import { EcommerceCartchildcomponent } from "./EcommerceCartchildcomponent";

export class EcommerceCart extends Component {
  state = {
    persons: [
      {
        items: "Carrom",
        quantity: "60%",
        price: "6000",
      },
    ],
  };
  render() {
    return (
      <div>
        <h1>EcommerceCart comonent</h1>
        {this.state.persons.map((persons, i) => {
          return <EcommerceCartchildcomponent newperson={persons} key={i} />;
        })}
        <hr />
      </div>
    );
  }
}
