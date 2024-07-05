import React from "react";
import "../Styles/Podcast.css";
import { CardComp } from "./CardComp";

const PodcastComp = ({ order }) => {
  return (
    <div className="container container-max mt-5">
      <div className="row">
        <h3 className="fw-bold borderB py-1 h4">
          {order ? "Guest Author" : "Podcast"}
        </h3>

        <div className={`col-md-7 m-auto ${order ? "order-md-2" : ""}`}>
          <h5 className="h1 fw-bold hoverHead">
            Innovation Insights: A&W Restaurants' Digital Transformation with
            PAR Technology
          </h5>
          <p>In conversation with By Bureau | 16 Jun, 2024</p>
          <button className="podBtn mt-2">Hear The Podcast</button>
        </div>

        <div className={`col-md-5 m-auto mt-3 ${order ? "order-md-1" : ""}`}>
          <CardComp src="https://ondot-enterprisetalk.b-cdn.net/uploads/2024/04/1713444458258-Evan%20Wong.jpg?width=500" alt="podcast-homepage"/>
        </div>
      </div>
    </div>
  );
};

export default PodcastComp;
