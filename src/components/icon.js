import React from "react";
import WeatherIcon from "react-icons-weather";
import PropTypes from "prop-types";

const Icon = ({ iconId }) => {
  return (
    <div>
      <WeatherIcon name="owm" data-testid="icon-id" iconId={iconId} />
    </div>
  );
};

Icon.propTypes = {
  iconId: PropTypes.string.isRequired,
};

export default Icon;
