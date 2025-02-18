import React from 'react';
import '../../styles/aqi-key.css';

const AQIColorKey = () => {
  // AQI level definitions with colors
  const levels = [
    { color: '#00e400', text: 'Good (0-50)' },
    { color: '#ffff00', text: 'Moderate (51-100)' },
    { color: '#ff7e00', text: 'Unhealthy for Sensitive Groups (101-150)' },
    { color: '#ff0000', text: 'Unhealthy (151-200)' },
    { color: '#8f3f97', text: 'Very Unhealthy (201-300)' },
    { color: '#7e0023', text: 'Hazardous (301+)' }
  ];

  return (
    <div className="aqi-color-key">
      <h3>Air Quality Index (AQI)</h3>
      <div className="color-key-grid">
        {levels.map((level, index) => (
          <div key={index} className="key-item">
            <div 
              className="key-color" 
              style={{ backgroundColor: level.color }}
            />
            <span>{level.text}</span>
          </div>
        ))}
      </div>
      <a href="/info" className="learn-more-link">Learn more about air quality</a>
    </div>
  );
};

export default AQIColorKey; 