import { Helmet } from "react-helmet-async";
import React from "react";
import GoogleMapReact from "google-map-react";

const Contact = () => {
  const defaultProps = {
    center: {
      lat: 10.99835602,
      lng: 77.01502627,
    },
    zoom: 11,
  };
  return (
    <div>
      <Helmet>
        <title>Career Hub | Contact</title>
      </Helmet>
    </div>
  );
};

export default Contact;
