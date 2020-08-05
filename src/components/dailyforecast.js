import React from "react";
import PropTypes from "prop-types";
import Icon from "./icon";
import moment from "moment";
import "../styles/dailyforecast.css";

const DailyForecast = ({ date, temperature, description, icon, onSelect }) => {
  const finalDate = moment(date).format("ddd MMM DD");
  return (
    <>
      <div className="daily-forecast">
        <div className="date" data-testid="date-id">
          {finalDate}
        </div>
        <div className="temperature" data-testid="temperature-id">
          {temperature} °C
        </div>
        <div className="description" data-testid="description-id">
          {description}
        </div>
        <Icon iconId={icon} />
        <button
          onClick={() => onSelect(date)}
          style={{
            backgroundColor: "white",
            border: "1px solid",
            boxShadow: "3px",
          }}
        >
          More details{" "}
        </button>
      </div>
    </>
  );
};

DailyForecast.propTypes = {
  date: PropTypes.number,
  temperature: PropTypes.number,
  description: PropTypes.string,
  icon: PropTypes.string,
  handleForecastSelect: PropTypes.func,
};

export default DailyForecast;
