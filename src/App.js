import React, { useState } from "react";
import Cities from "./Cities";

function App() {
  const api = {
    key: "668a828d59e4c90939c88653bb7d89ba",
    base: "https://api.openweathermap.org/data/2.5/weather?q=",
  };
  const [query, setQuery] = useState("");
  const [weather, setWeather] = useState({});

  const search = (evt) => {
    if (evt.key === "Enter") {
      fetch(`${api.base}${query}&units=metric&appid=${api.key}`)
        .then((res) => res.json())
        .then((result) => {
          setQuery("");
          setWeather(result);
        });
    }
  };

  return (
    <div
      className={
        typeof weather.main !== "undefined"
          ? weather.main.temp > 16
            ? "app cold"
            : "app"
          : "app"
      }
    >
      <main>
        <div className="info">
          <input
            type="text"
            name=""
            className="form-control"
            id=""
            onChange={(e) => setQuery(e.target.value)}
            value={query}
            onKeyPress={search}
            placeholder="search city name..."
          />

          {typeof weather.main != "undefined" ? (
            <div>
              <div className="city-name">
                <h3 className="text-light">
                  {weather.name + " , " + weather.sys.country}
                </h3>
              </div>
              <div className="temp">
                <h3 className="text-light">
                  {Math.round(weather.main.temp) + "°C"}
                </h3>
              </div>
              <div className="humidity">
                <h3 className="text-light">
                  {"Humidity : " + weather.main.humidity + "%"}
                </h3>
              </div>
              <div className="desc">
                <h3 className="text-light rounded bg-primary desc">
                  {weather.weather[0].description}
                </h3>
              </div>
            </div>
          ) : (
            ""
          )}
        </div>
      </main>
    </div>
  );
}

export default App;
