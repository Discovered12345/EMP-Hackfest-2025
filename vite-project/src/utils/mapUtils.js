// Convert miles to meters for Google Maps
export const milesToMeters = (miles) => miles * 1609.34;

// Convert radius to appropriate zoom level
export const getZoomLevel = (radius) => {
  return Math.round(14 - Math.log(radius) / Math.log(2));
}; 