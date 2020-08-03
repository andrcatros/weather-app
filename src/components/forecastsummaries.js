import React from "react";
import PropTypes from "prop-types";
import DailyForecast from "./dailyforecast";
import "../styles/forecastsummaries.css";

const ForecastSummaries = (props) => (
  <div className="forecast-summaries">
    {props.forecasts.map((forecast) => (
      <DailyForecast
        key={forecast.date}
        date={forecast.date}
        description={forecast.description}
        icon={forecast.icon}
        temperature={forecast.temperature.max}
        onSelect={props.onForecastSelect}
      />
    ))}
  </div>
);

ForecastSummaries.propTypes = {
  forecasts: PropTypes.array.isRequired,
};

export default ForecastSummaries;
