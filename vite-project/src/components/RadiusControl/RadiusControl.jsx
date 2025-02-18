import React from 'react';
import { radiusOptions } from '../../utils/radiusUtils';
import './RadiusControl.css';

const RadiusControl = ({ radius, setRadius }) => {
  return (
    <div className="radius-dropdown">
      <select 
        value={radius || ''} 
        onChange={(e) => setRadius(e.target.value ? Number(e.target.value) : null)}
        className="radius-select"
      >
        <option value="">View Distance</option>
        {radiusOptions.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default RadiusControl; 