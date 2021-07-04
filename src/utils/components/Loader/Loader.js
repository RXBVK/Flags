import React from "react";
import "./Loader.css";

export default function Loader() {
  return (
    <div className="container loader">
      <h1 className="loader__header">Loading</h1>
      <div className="loader__dots">
        <div className="loader__dot"></div>
        <div className="loader__dot"></div>
        <div className="loader__dot"></div>
        <div className="loader__dot"></div>
        <div className="loader__dot"></div>
        <div className="loader__dot"></div>
      </div>
    </div>
  );
}
