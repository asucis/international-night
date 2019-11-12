import React from "react";
import { performances } from "../../data/performances.json";

const Performances = () => {
  return (
    <>
      <table>
        <colgroup>
          <col className="one" span="1" />
          <col className="three" span="1" />
          <col className="two" span="1" />
          <col className="two" span="1" />
        </colgroup>
        <caption>Performances Schedule</caption>
        <thead>
          <tr>
            <th scope="col">Time</th>
            <th scope="col">Performer</th>
            <th scope="col">Country</th>
            <th scope="col">Genre</th>
          </tr>
        </thead>
        <tbody>
          {performances.map(performance => (
            <tr key={performance.time}>
              <td className="samesize" data-label="Time">
                {performance.time}
              </td>
              <td className="fitwidth" data-label="Performer">
                {performance.country === "" || performance.genre === "" ? (
                  <b>{performance.performer}</b>
                ) : (
                  performance.performer
                )}
              </td>
              <td className="samesize" data-label="Country">
                {performance.country}
              </td>
              <td className="samesize" data-label="Genre">
                {performance.genre}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Performances;
