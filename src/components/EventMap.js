import React from "react";
import Image from "./Image";
import { eventMapImage, booths } from "../../data/eventMap.json";

const EventMap = () => (
  <>
    <h1 className="section-header">Event Map</h1>
    <Image fileName={eventMapImage.split("/").pop()} />
    {booths.length !== 0 && (
      <div className="event-map-booths-container">
        <div className="left">
          <table>
            <colgroup>
              <col className="two" span="1" />
              <col className="one" span="1" />
            </colgroup>
            <thead>
              <tr>
                <th scope="col">Organization</th>
                <th scope="col">Booth</th>
              </tr>
            </thead>
            <tbody>
              {booths.slice(0, Math.ceil(booths.length / 2)).map(booth => (
                <tr key={booth.boothNumber}>
                  <td className="samesize" data-label="Organization">
                    {booth.organization}
                  </td>
                  <td className="samesize" data-label="Booth">
                    {booth.boothNumber}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="right">
          <table>
            <colgroup>
              <col className="two" span="1" />
              <col className="one" span="1" />
            </colgroup>
            <thead>
              <tr>
                <th scope="col">Organization</th>
                <th scope="col">Booth</th>
              </tr>
            </thead>
            <tbody>
              {booths
                .slice(Math.ceil(booths.length / 2), booths.length)
                .map(booth => (
                  <tr key={booth.boothNumber}>
                    <td className="samesize" data-label="Organization">
                      {booth.organization}
                    </td>
                    <td className="samesize" data-label="Booth">
                      {booth.boothNumber}
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    )}
  </>
);

export default EventMap;
