import React from "react";

const Performances = () => {
  const performances = [
    {
      group: "group name",
      genre: "genre name",
      country: "country name",
      time: "time stamp",
    },
    {
      group: "group name",
      genre: "genre name",
      country: "country name",
      time: "time stamp",
    },
    {
      group: "group name",
      genre: "genre name",
      country: "country name",
      time: "time stamp",
    },
    {
      group: "group name",
      genre: "genre name",
      country: "country name",
      time: "time stamp",
    },
  ];

  return (
    <>
      <table>
        <caption>Performances</caption>
        <thead>
          <tr>
            <th scope="col">Group</th>
            <th scope="col">Genre</th>
            <th scope="col">Country</th>
            <th scope="col">Time</th>
          </tr>
        </thead>
        <tbody>
          {performances.map(performance => (
            <tr>
              <td data-label="Test">{performance.group}</td>
              <td data-label="Due Date">{performance.genre}</td>
              <td data-label="Amount">{performance.country}</td>
              <td data-label="Period">{performance.time}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Performances;
