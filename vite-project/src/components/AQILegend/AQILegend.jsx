function AQILegend() {
  return (
    <div className="aqi-legend">
      <div className="aqi-legend-item">
        <div className="aqi-color-box" style={{ background: '#00e400' }}></div>
        <span>Good (0-50)</span>
      </div>
      <div className="aqi-legend-item">
        <div className="aqi-color-box" style={{ background: '#ffff00' }}></div>
        <span>Moderate (51-100)</span>
      </div>
      <div className="aqi-legend-item">
        <div className="aqi-color-box" style={{ background: '#ff7e00' }}></div>
        <span>Unhealthy for Sensitive Groups (101-150)</span>
      </div>
      <div className="aqi-legend-item">
        <div className="aqi-color-box" style={{ background: '#ff0000' }}></div>
        <span>Unhealthy (151-200)</span>
      </div>
      <div className="aqi-legend-item">
        <div className="aqi-color-box" style={{ background: '#8f3f97' }}></div>
        <span>Very Unhealthy (201-300)</span>
      </div>
      <div className="aqi-legend-item">
        <div className="aqi-color-box" style={{ background: '#7e0023' }}></div>
        <span>Hazardous (301+)</span>
      </div>
    </div>
  );
}

export default AQILegend; 