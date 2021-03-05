import './SeasonDisplay.css';
import React from 'react';

const seasonConfig = {
  summer: {
    caption: "Let's hit the beach",
    iconName: 'sun',
  },
  winter: {
    caption: "Burr, it's cold!",
    iconName: 'snowflake',
  },
};

const SeasonDisplay = (props) => {
  const season = getSeason(props.lat, new Date().getMonth());
  const { caption, iconName } = seasonConfig[season];

  return (
    <div className={`season-display ${season}`}>
      <i className={`icon-left ${iconName} icon massive`} />
      <h1>{caption}</h1>
      <i className={`icon-right ${iconName} icon massive`} />
    </div>
  );
};

const getSeason = (lat, month) => {
  if (month > 2 && month < 9) {
    return lat > 0 ? 'summer' : 'winter';
  } else {
    return lat > 0 ? 'winter' : 'summer';
  }
};

export default SeasonDisplay;
