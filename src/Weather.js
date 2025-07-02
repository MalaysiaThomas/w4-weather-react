import React, { useState } from "react";
import axios from "axios";

export default function Weather(props) {
  let [cityName, setCityName] = useState("");
  let [description, setDescription] = useState("");
  let [temperature, setTemperature] = useState("");
  let [humidity, setHumidity] = useState("");
  let [wind, setWind] = useState("");

  function getWeather(response) {
    setCityName(response.data.name);
    setTemperature(Math.floor(response.data.main.temp));
    setDescription(response.data.weather[0].description);
    setHumidity(response.data.main.humidity);
    setWind(Math.floor(response.data.wind.speed));
  }

  let apiKey = `c5f0e59acac64258bb92ed027d20c68f`;
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${apiKey}&units=imperial`;
  axios.get(url).then(getWeather);

  return (
    <div>
      <h2>{cityName}</h2>
      <p>Condition: {description}</p>
      <p>Temperature: {temperature}℉</p>
      <p>Humidity: {humidity}</p>
      <p>Wind: {wind}m/s</p>
    </div>
  );
}
