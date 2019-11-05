import React from "react";

const Performances = () => {
  const performances = [
    {
      group: "Introduction",
      genre: "",
      name: "",
      time: "6:00 - 6:03",
    },
    {
      group: "VNL",
      genre: "Song",
      name: "Je t’aime (I love you)",
      time: "6:05 - 6:09",
    },
    {
      group: "Bip",
      genre: "Song",
      name: "Drums",
      time: "6:11 - 6:19",
    },
    {
      group: "KOdE",
      genre: "Dance",
      name: "",
      time: "6:21 - 6:28",
    },
    {
      group: "Andaaz",
      genre: "Dance",
      name: "",
      time: "6:30 - 6:34",
    },
    {
      group: "Daniel Oh",
      genre: "Rap song",
      name: "Please",
      time: "6:36 - 6:39",
    },
    {
      group: "Dabke United",
      genre: "Dance",
      name: "",
      time: "6:40 - 6:46",
    },
    {
      group: "CSSA",
      genre: "Song",
      name: "When I’m Gone (english)",
      time: "6:48 - 6:52",
    },
    {
      group: "Phantom Team",
      genre: "Dance",
      name: "",
      time: "6:54 - 6:58",
    },
    {
      group: "Interlude by MCs",
      genre: "",
      name: "",
      time: "7:00 - 7:05",
    },
    {
      group: "Gye -nyame Morale Squad",
      genre: "Morale(song+dance)",
      name: "",
      time: "7:05 - 7:15",
    },
    {
      group: "CSSA",
      genre: "Song",
      name: "The Wall (chinese)",
      time: "7:17 - 7:21",
    },
    {
      group: "Prachi",
      genre: "Song",
      name: "",
      time: "7:23 - 7:28",
    },
    {
      group: "Osei",
      genre: "Song",
      name: "Wish Me Well",
      time: "7:32 - 7:36",
    },
    {
      group: "Bridgette",
      genre: "Dance",
      name: "",
      time: "7:38 - 7:42",
    },
    {
      group: "Daniel Oh",
      genre: "Song",
      name: "On it",
      time: "7:44 - 7:48",
    },
    {
      group: "CSSA",
      genre: "Dance",
      name: "Flowers of War",
      time: "7:50 - 7:52",
    },
    {
      group: "VNL",
      genre: "Song",
      name: "Arabic Song",
      time: "7:54 - 8:00",
    },
    {
      group: "Interlude by MCs",
      genre: "",
      name: "",
      time: "8:00 - 8:05",
    },
    {
      group: "Perfume Girls",
      genre: "Dance",
      name: "",
      time: "8:07 - 8:12",
    },
    {
      group: "Gye -nyame Morale Squad",
      genre: "Morale(song+dance)",
      name: "",
      time: "8:14 - 8:29",
    },
    {
      group: "Yurika Jain",
      genre: "Dance",
      name: "",
      time: "8:31 - 8:38",
    },
    {
      group: "Dynamic Movement",
      genre: "Dance",
      name: "Tricking sport",
      time: "8:40 - 8:42",
    },
    {
      group: "CSSA",
      genre: "Dance",
      name: "North of China",
      time: "8:44 - 8:47",
    },
    {
      group: "Bridgette",
      genre: "Dance",
      name: "",
      time: "8:49 - 8:43",
    },
    {
      group: "Osei",
      genre: "Song",
      name: "All of Me",
      time: "8:45 - 9:00",
    },
    {
      group: "Interlude by MCs",
      genre: "",
      name: "",
      time: "9:00 - 9:05",
    },
    {
      group: "CSSA",
      genre: "Dance",
      name: "Made in China",
      time: "9:05 - 9:07",
    },
    {
      group: "Azna Dance",
      genre: "Dance",
      name: "",
      time: "9:09 - 9:13",
    },
    {
      group: "Devilettes Dance Team",
      genre: "Dance",
      name: "",
      time: "9:15 - 9:20",
    },
    {
      group: "Xinyue Le",
      genre: "Song",
      name: "Peking opera",
      time: "9:22 - 9:26",
    },
    {
      group: "Sahil Badyal",
      genre: "",
      name: "",
      time: "9:28 - 9:32",
    },
    {
      group: "Ling",
      genre: "",
      name: "",
      time: "9:34 - 9:38",
    },
    {
      group: "Closing by MCs",
      genre: "",
      name: "",
      time: "9:40 - 10:00",
    },
  ];

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
          {performances.map(performance => (
            <tr>
              <td data-label="Time">{performance.time}</td>
              <td data-label="Genre">{performance.genre}</td>
              <td data-label="Group">
                {performance.genre === "" ? (
                  <b>{performance.group}</b>
                ) : (
                  performance.group
                )}
              </td>
              <td data-label="Name">{performance.name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Performances;
