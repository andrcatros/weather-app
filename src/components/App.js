import React, { useEffect, useState } from "react";
import "../styles/app.css";
import axios from "axios";

// import components
import LocationDetails from "./locationdetails";
import ForecastDetails from "./forecastdetails";
import ForecastSummaries from "./forecastsummaries";
import SearchForm from "./searchform";
import ErrorMessage from "./errormessage";

const App = () => {
  // initialise error message in state
  const [errorMessage, setErrorMessage] = useState("");

  // initialise location in state
  const [location, setLocation] = useState({ city: "", country: "" });
  const [searchText, setSearchText] = useState("");

  // initialise forecasts and selectedDate in state
  const [forecasts, setForecasts] = useState([]);
  const [selectedDate, setSelectedDated] = useState(0);

  const handleForecastSelect = (date) => {
    setSelectedDated(date);
  };

  // get forecasts and pass them on
  useEffect(() => {
    async function fetchData() {
      const result = await axios.get(
        "https://mcr-codes-weather.herokuapp.com/forecast"
      );
      setLocation(result.data.location);
      setForecasts(result.data.forecasts);
    }
    fetchData();
  }, []);

  // get search location
  const handleSearchInputChange = (event) => {
    setSearchText(event.target.value);
  };

  const resetInputField = () => {
    setSearchText("");
  };

  const callSearchFunction = (event) => {
    event.preventDefault();
    setErrorMessage("");

    async function fetchData() {
      await axios
        .get(
          `https://mcr-codes-weather.herokuapp.com/forecast?city=${searchText}`
        )
        .then((response) => {
          setLocation(response.data.location);
          setForecasts(response.data.forecasts);
        })
        .catch((err) => {
          if (err.response.status === 404) {
            setErrorMessage(
              "Location not found! Please input a valid location."
            );
          } else if (err.response.status === 500) {
            setErrorMessage("Server Error. Please try again.");
          } else {
            console.log(err.response.status);
          }
        });
    }

    fetchData();
    resetInputField();
  };

  const selectedForecast = forecasts.find(
    (forecast) => forecast.date === selectedDate
  );

  return (
    <div className="forecast">
      <LocationDetails city={location.city} country={location.country} />

      {errorMessage && <ErrorMessage message={errorMessage} />}

      <SearchForm
        value={searchText}
        handleSearch={handleSearchInputChange}
        callSearchFunction={callSearchFunction}
      />

      <ForecastSummaries
        forecasts={forecasts}
        onForecastSelect={handleForecastSelect}
      />

      {selectedForecast && <ForecastDetails forecast={selectedForecast} />}
    </div>
  );
};

export default App;
