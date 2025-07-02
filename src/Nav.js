import React from "react";
import Search from "./Search";

export default function Nav() {
  return (
    <nav className="navbar">
        <div className="logo">AERIS WEATHER</div>
        <div className="search-container"><Search/></div>
    </nav>
  );
}