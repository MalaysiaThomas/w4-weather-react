import React, { useState } from "react";
import Weather from "./Weather";

export default function Search() {
  let [city, setCity] = useState("");
  let [message, setMessage] = useState("...");

  function handleChange(e) {
    e.preventDefault();
    setCity(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    setMessage(<Weather city={city} />);
  }

  return (
    <div>
      <form action="/" onSubmit={handleSubmit}>
        <input
          type="search"
          name="search"
          id="search"
          placeholder="Enter a city..."
          value={city}
          onChange={handleChange}
          required
        />
        <input type="submit" value="Search" className="buttonType" />
      </form>

      {message}
    </div>
  );
}
  