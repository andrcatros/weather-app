import React from "react";
import moment from "moment";

const ForecastDetails = ({ forecast }) => {
  const finalDate = moment(forecast.date).format("ddd MMM DD");
  return (
    <div className="ForecastDetails">
      <div className="date" data-testid="date-id">
        <h2>{finalDate} </h2>
      </div>
      <div className="temperature" data-testid="temperature-id">
        {<b>Max Temperature:</b>} {forecast.temperature.max} °C <br />
        {<b>Min Temperature:</b>} {forecast.temperature.min} °C
      </div>
      <div className="humidity" data-testid="humidity-id">
        {"Humidity: "}
        {forecast.humidity}
      </div>
      <div className="wind" data-testid="wind-id">
        {"Wind speed: "}
        {forecast.wind.speed}
        {"mph"}
      </div>
    </div>
  );
};

export default ForecastDetails;
