import React, { useEffect, useState } from "react";
import "./styles/app.css";
import axios from "axios";

// import components
import LocationDetails from "./components/locationdetails";
import ForecastDetails from "./components/forecastdetails";
import ForecastSummaries from "./components/forecastsummaries";

const App = () => {
  const [forecasts, setForecasts] = useState([]);
  const [location, setLocation] = useState({ city: "", country: "" });

  const [selectedDate, setSelectedDated] = useState(0);

  const handleForecastSelect = (date) => {
    setSelectedDated(date);
  };

  const selectedForecast = forecasts.find(
    (forecast) => forecast.date === selectedDate
  );

  useEffect(() => {
    async function fetchData() {
      const result = await axios.get(
        "https://mcr-codes-weather.herokuapp.com/forecast"
      );
      console.log(result);

      setForecasts(result.data.forecasts);
      setLocation(result.data.location);
    }
    fetchData();
  }, []);

  return (
    <div className="forecast">
      <LocationDetails city={location.city} country={location.country} />

      <ForecastSummaries
        forecasts={forecasts}
        onForecastSelect={handleForecastSelect}
      />

      {selectedForecast && <ForecastDetails forecast={selectedForecast} />}
    </div>
  );
};

export default App;
