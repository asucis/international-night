import React from "react";
import { performance } from "../../data/performances.json";

const Performances = () => {
  return (
    <>
      <table>
        <caption>Performances</caption>
        <thead>
          <tr>
            <th scope="col">Time</th>
            <th scope="col">Genre</th>
            <th scope="col">Group</th>
            <th scope="col">Name</th>
          </tr>
        </thead>
        <tbody>
          {performance.map(performer => (
            <tr>
              <td data-label="Time">{performer.time}</td>
              <td data-label="Genre">{performer.genre}</td>
              <td data-label="Group">
                {performer.genre === "" ? (
                  <b>{performer.group}</b>
                ) : (
                  performer.group
                )}
              </td>
              <td data-label="Name">{performer.name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Performances;
