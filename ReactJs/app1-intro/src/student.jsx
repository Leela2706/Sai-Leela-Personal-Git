import { useState } from "react";
import './Student.css'
export const Student = () => {
    const [myName] = useState("Sai Leela Vardhan");
    const [person] = useState({
        fname: "Sai",
        lname: "Leela",
        email: "saileelavardhan12@gmail.com",
    });
    let [students] = useState(["sai", "Sree kanth", "Hemanth", "Kiran"]);
    return (
        <div id="myDiv">
            <h2>Welcome to {myName} Component !!!</h2>
            <ul>
                <li>{person.fname}</li>
                <li>{person.lname}</li>
                <li>{person.email}</li>
            </ul>

            <ul>
                {students.map(function (std) {
                    return <li>{std}</li>;
                })}
            </ul>
        </div>
    );
};