/* eslint-disable no-console */
import React, { Component } from "react";
import moment from "moment";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMapMarkedAlt,
  faTicketAlt,
  faExclamationCircle,
} from "@fortawesome/free-solid-svg-icons";
import InstagramEmbed from "react-instagram-embed";
import Hero from "../components/Hero";
import Livestream from "../components/Livestream";
import Footer from "../components/Footer";
import SEO from "../components/seo";
import Performances from "../components/Performances";
import { eventTimestamp } from "../../data/information.json";
import { title, hashtags, description } from "../../data/introduction.json";

import "../scss/App.scss";

class IndexPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isEventToday: false,
    };
  }

  componentDidMount() {
    console.log(
      `
  ##    ####  #    #  ####  #  ####  
#   #  #      #    # #    # # #      
#    #  ####  #    # #      #  ####  
######      # #    # #      #      # 
#    # #    # #    # #    # # #    # 
#    #  ####   ####   ####  #  ####                         
      `
    );

    console.log(
      "Looks like you're exploring the code.\n\nIf you are interested in contributing or forking this project, please head over to our github repository at https://github.com/asucis/international-night\n\nthanks,\ndickwyn\nhttps://www.dickwyn.xyz"
    );

    const timeNowInUtc = moment.utc().format("DD/MM/YYYY HH:mm:ss");
    const eventTimeInUtc = moment(eventTimestamp)
      .utc()
      .format("DD/MM/YYYY HH:mm:ss");

    const timeLeftToEvent = moment
      .duration(
        moment(eventTimeInUtc, "DD/MM/YYYY HH:mm:ss").diff(
          moment(timeNowInUtc, "DD/MM/YYYY HH:mm:ss")
        )
      )
      .asHours();

    if (timeLeftToEvent < 130) {
      this.setState(prevState => ({
        isEventToday: !prevState.isEventToday,
      }));
    }
  }

  render() {
    const { isEventToday } = this.state;
    return (
      <>
        <SEO title="International Night 2019" />
        {isEventToday ? <Livestream /> : <Hero />}
        <section id="content">
          <div className="content-container">
            <div className="event-info">
              <h1>{title}</h1>
              {hashtags.map(item => (
                <p key={item.hashtag} className="hashtags">
                  {item.hashtag}
                </p>
              ))}
              <h2>{description}</h2>
              <div className="key-information-container">
                <div className="key-information">
                  <FontAwesomeIcon icon={faMapMarkedAlt} size="6x" />
                  <h3>SDFC Intramural Fields</h3>
                  <h3>ASU Tempe Campus</h3>
                  <a
                    href="https://goo.gl/maps/41xVrzBUcq4zoLMv5"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View in map
                  </a>
                </div>
                <div className="key-information">
                  <FontAwesomeIcon icon={faTicketAlt} size="6x" />
                  <h3>Ticket required at entry</h3>
                  <a
                    href="https://signup.asucis.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Claim your free tickets
                  </a>
                </div>
                <div className="key-information">
                  <FontAwesomeIcon icon={faExclamationCircle} size="6x" />
                  <h3>
                    For your safety, this event adheres to the Sun Devil
                    Athletics clear bag policy
                  </h3>
                  <a
                    href="https://thesundevils.com/sports/2018/8/9/clear-bag-policy.aspx"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Learn more
                  </a>
                </div>
              </div>
              <div className="instagram-post-container">
                <InstagramEmbed
                  url="https://www.instagram.com/p/B4lXiXHnKUi/"
                  maxWidth={350}
                  hideCaption={false}
                  containerTagName="div"
                  protocol=""
                  injectScript
                  onLoading={() => {}}
                  onSuccess={() => {}}
                  onAfterRender={() => {}}
                  onFailure={() => {}}
                />
                <InstagramEmbed
                  url="https://www.instagram.com/p/B4jJlZxHpnQ/"
                  maxWidth={350}
                  hideCaption
                  containerTagName="div"
                  protocol=""
                  injectScript
                  onLoading={() => {}}
                  onSuccess={() => {}}
                  onAfterRender={() => {}}
                  onFailure={() => {}}
                />
              </div>
            </div>
            <Performances />
          </div>
        </section>
        <Footer />
      </>
    );
  }
}

export default IndexPage;
