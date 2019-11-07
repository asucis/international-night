import React from "react";
import { performances } from "../../data/performances.json";

const Performances = () => {
  return (
    <>
      <table>
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
            <tr>
              <td data-label="Time">{performance.time}</td>
              <td data-label="Performer">
                {performance.country === "" || performance.genre === "" ? (
                  <b>{performance.performer}</b>
                ) : (
                  performance.performer
                )}
              </td>
              <td data-label="Country">{performance.country}</td>
              <td data-label="Genre">{performance.genre}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Performances;
