import "./DisplaySeason.css";
import React from "react";

const seasonManagment = {
  summer: {
    text: "Its hot",
    iconName: "sun"
  },
  winter: {
    text: "its winter",
    iconName: "snowflake"
  }
};

const getSeason = (lat, month) => {
  if (month > 2 && month < 9) {
    return lat > 0 ? "summer" : "winter";
  } else {
    return lat > 0 ? "winter" : "summer";
  }
};

const DisplaySeason = props => {
  const season = getSeason(props.lat, new Date().getMonth());
  const { text, iconName } = seasonManagment[season];
  return (
    <div className={`display-season ${season}`}>
      <i className={`massive icon-left ${iconName} icon`} />
      <h1>{text}</h1>
      <i className={`massive icon-right ${iconName} icon`} />
    </div>
  );
};

export default DisplaySeason;
