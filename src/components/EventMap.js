import React from "react";
import Image from "./Image";
import { eventMapImage } from "../../data/eventMap.json";
import { performances } from "../../data/performances.json";

const EventMap = () => (
  <>
    <h1 className="section-header">Event Map</h1>
    <Image fileName={eventMapImage.split("/").pop()} />
    <div className="event-map-booths-container">
      <div className="left">
        <table>
          <colgroup>
            <col className="one" span="1" />
            <col className="three" span="1" />
          </colgroup>
          <thead>
            <tr>
              <th scope="col">Booth</th>
              <th scope="col">Organization</th>
            </tr>
          </thead>
          <tbody>
            {performances
              .slice(0, Math.ceil(performances.length / 2))
              .map(performance => (
                <tr key={performance.time}>
                  <td className="samesize" data-label="Booth">
                    {performance.time}
                  </td>
                  <td className="samesize" data-label="Organization">
                    <b>{performance.performer}</b>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
      <div className="right">
        <table>
          <colgroup>
            <col className="one" span="1" />
            <col className="three" span="1" />
          </colgroup>
          <thead>
            <tr>
              <th scope="col">Booth</th>
              <th scope="col">Organization</th>
            </tr>
          </thead>
          <tbody>
            {performances
              .slice(Math.ceil(performances.length / 2), performances.length)
              .map(performance => (
                <tr key={performance.time}>
                  <td className="samesize" data-label="Booth">
                    {performance.time}
                  </td>
                  <td className="samesize" data-label="Organization">
                    <b>{performance.performer}</b>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  </>
);

export default EventMap;
