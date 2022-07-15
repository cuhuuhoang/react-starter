import './SeasonDisplay.css';
import React from "react";

const seasonConfig = {
  summer: {
    text: "Let's hit the beach!",
    iconName: "sun"
  },
  winter: {
    text: "Burr it is cold",
    iconName: "cloud-snow"
  }
}

const getSeason = (lat, month) => {
  if (month > 2 && month < 9) {
    return lat > 0 ? 'summer' : 'winter';
  } else {
    return lat > 0 ? 'winter' : 'summer';
  }
}

const SeasonDisplay = props => {
  const month = new Date().getMonth();
  const season = getSeason(props.lat, month);
  const {text, iconName} = seasonConfig[season];

  return (
    <div className={`season-display ${season}`}>
      <div className="box">
        <i className={`icon-left bi-${iconName} bi`} />
      </div>
      <h1>{text}</h1>
      <div className="box">
        <i className={`icon-right bi-${iconName} bi`} />
      </div>
    </div>
  );
}

export default SeasonDisplay