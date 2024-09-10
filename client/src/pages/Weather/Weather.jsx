import React from "react";
import "./Weather.css";

const Weather = () => {
  return (
    <>
      <br />
      <center>
        <h1>Real time Weather Data</h1>
      </center>
      <div className="weather-container">
        <iframe
          width="650"
          height="450"
          src="https://embed.windy.com/embed.html?type=map&location=coordinates&metricRain=default&metricTemp=default&metricWind=default&zoom=5&overlay=wind&product=ecmwf&level=surface&lat=17.384&lon=78.529"
          title="Windy Weather Map"
          allowFullScreen
        ></iframe>
      </div>
      <br />
      <div className="weather-container">
        <iframe
          width="650"
          height="187"
          title="forecast"
          src="https://embed.windy.com/embed.html?type=forecast&location=coordinates&detail=true&detailLat=17.360589&detailLon=78.4740613&metricTemp=default&metricRain=default&metricWind=default"
          frameborder="0"
        ></iframe>
      </div>
    </>
  );
};

export default Weather;
