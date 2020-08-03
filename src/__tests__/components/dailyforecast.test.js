import React from "react";
import { render } from "@testing-library/react";
import DailyForecasts from "../../components/dailyforecast.js";

describe("DailyForecast", () => {
  it("renders the correct date, temperature, description and icon props", () => {
    const { getByText } = render(
      <DailyForecasts
        date={1525305600000}
        temperature={12}
        description="mockDescription"
        icon="800"
      />
    );

    expect(getByText("Thu May 03")).toHaveClass("date");
    expect(getByText("12")).toHaveClass("temperature");
    expect(getByText("mockDescription")).toHaveClass("description");
  });
});
