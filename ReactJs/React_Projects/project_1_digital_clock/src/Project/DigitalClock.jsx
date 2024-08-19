import React, { useState, useEffect } from "react";


const DigitalClock = () => {
    const [time, setTime] = useState({
        hours: "00",
        minutes: "00",
        seconds: "00",
    });

    useEffect(() => {
        const intervalId = setInterval(() => {
            const currentTime = new Date();

            const hours = currentTime.getHours().toString();
            const minutes = currentTime.getMinutes().toString();
            const seconds = currentTime.getSeconds().toString();

            setTime({ hours, minutes, seconds });
        }, 1000);

        return () => clearInterval(intervalId);
    }, []);

    return (
        <div className="hero">
            <div className="container">
                <div className="clock">
                    <span id="hrs">{time.hours}</span>
                    <span>:</span>
                    <span id="min">{time.minutes}</span>
                    <span>:</span>
                    <span id="sec">{time.seconds}</span>
                </div>
            </div>
        </div>
    );
};

export default DigitalClock;
