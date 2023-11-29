import React from 'react';
import './Snowfall.scss'; // Assuming you save your CSS in a file named Snowfall.css

const Snowfall = () => {
  return (
    <div>
      {Array.from({ length: 80 }, (_, index) => (
        <div key={index} className="snowflake"></div>
      ))}
    </div>
  );
};

export default Snowfall;