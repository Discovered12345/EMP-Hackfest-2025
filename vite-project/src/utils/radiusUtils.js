export const radiusOptions = [
  { value: 5, label: '5km' },
  { value: 10, label: '10km' },
  { value: 25, label: '25km' },
  { value: 50, label: '50km' }
];

export const getZoomForRadius = (radius) => {
  if (!radius) return 12;
  if (radius <= 5) return 13;
  if (radius <= 10) return 12;
  if (radius <= 25) return 11;
  return 10;
};

export const circleOptions = {
  strokeColor: '#5E6AD2',
  strokeOpacity: 0.8,
  strokeWeight: 2,
  fillColor: '#5E6AD2',
  fillOpacity: 0.15,
  clickable: false,
  draggable: false,
  editable: false,
  visible: true,
  zIndex: 1
}; 