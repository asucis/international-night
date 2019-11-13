/* eslint-disable no-console */
import React from "react";
import Image from "./Image";
import { eventMapImage } from "../../data/eventMap.json";

const EventMap = () => (
  <>
    <h1 className="section-header">Event Map</h1>
    <Image fileName={eventMapImage.split("/").pop()} />
  </>
);

export default EventMap;
