import React, { useState } from "react";
import axios from "axios";

function App() {
  const [data, setData] = useState({});
  const [location, setLocation] = useState("");
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&lang=pt_br&appid=6a25c2f0385ec75637f083ba80e6b12a`;

  const searchLocation = (event) => {
    if (event.key === "Enter") {
      axios.get(url).then((res) => {
        setData(res.data);
        console.log(res.data);
      });
      setLocation("");
    }
  };
  return (
    <div className="app">
      <div className="search">
        <input
          value={location}
          onChange={(ev) => setLocation(ev.target.value)}
          onKeyPress={searchLocation}
          placeholder="Digite a localização"
          type="text"
        />
      </div>
      <div className="container">
        <div className="top">
          <div className="location">
            <p>{data.name}</p>
          </div>
          <div className="temp">
            {data.main ? <h1>{Math.round(data.main.temp / 10)}°C</h1> : null}
          </div>
          <div className="description">
            {data.weather ? <p>{data.weather[0].description}</p> : null}
          </div>
        </div>

        <div className="bottom">
          <div className="feels">
            {data.main ? (
              <p>{Math.round(data.main.feels_like / 10)}°C</p>
            ) : null}
            <p>Sensação</p>
          </div>
          <div className="humidity">
            {data.main ? <p>{data.main.humidity}%</p> : null}
            <p>Umidade</p>
          </div>
          <div className="wind">
            {data.wind ? <p>{data.wind.speed}km</p> : null}
            <p>Vento</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
