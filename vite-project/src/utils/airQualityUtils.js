// AQI colors based on EPA standards
export const getAQIColor = (aqi) => {
  if (aqi <= 50) return '#00e400';      // Good - Green
  if (aqi <= 100) return '#ffff00';     // Moderate - Yellow
  if (aqi <= 150) return '#ff7e00';     // Unhealthy for Sensitive Groups - Orange
  if (aqi <= 200) return '#ff0000';     // Unhealthy - Red
  if (aqi <= 300) return '#8f3f97';     // Very Unhealthy - Purple
  return '#7e0023';                      // Hazardous - Maroon
};

export const getAQIOpacity = 0.35;       // Consistent overlay opacity 