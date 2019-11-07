import React from "react";
import CountdownNow from "react-countdown-now";
import { datetime } from "../../data/information.json";

const Countdown = () => (
  <CountdownNow
    date={datetime}
    renderer={({ days, hours, minutes, seconds }) => (
      <section className="countdown-timer">
        <div className="time-container">
          <div className="label">Days</div>
          <div className="value">{days}</div>
        </div>
        <div className="time-container">
          <div className="label">Hours</div>
          <div className="value">{hours}</div>
        </div>
        <div className="time-container">
          <div className="label">Mins</div>
          <div className="value">{minutes}</div>
        </div>
        <div className="time-container">
          <div className="label">Secs</div>
          <div className="value">{seconds}</div>
        </div>
      </section>
    )}
  />
);

export default Countdown;
