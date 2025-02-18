import { GoogleMap } from '@react-google-maps/api';
import { mapStyles } from './mapStyles';
import { useState, useEffect } from 'react';

const DEMO_API_KEY = 'AIzaSyCExTp8r8aszeyxMO7JMbonn1JZdFJGK4s';

const Map = ({ center, showAirQuality, zoom, radius }) => {
  // Store map and air quality layer instances
  const [map, setMap] = useState(null);
  const [airQualityLayer, setAirQualityLayer] = useState(null);
  const apiKey = DEMO_API_KEY;

  // Initialize map and create air quality overlay
  const onLoad = (map) => {
    setMap(map);
    
    // Create air quality overlay using WAQI API
    // Requires separate API key from aqicn.org
    const layer = new window.google.maps.ImageMapType({
      getTileUrl: function(coord, zoom) {
        // Fetch air quality tiles from WAQI API
        // Each tile represents AQI data for a specific geographic area
        return `https://tiles.aqicn.org/tiles/usepa-aqi/${zoom}/${coord.x}/${coord.y}.png?token=${apiKey}`;
      },
      tileSize: new window.google.maps.Size(256, 256),
      maxZoom: 18,
      minZoom: 3,
      name: 'Air Quality'
    });
    
    setAirQualityLayer(layer);
  };

  // Toggle air quality layer visibility
  useEffect(() => {
    // Toggle air quality overlay based on user selection
    if (map && airQualityLayer) {
      if (showAirQuality) {
        map.overlayMapTypes.push(airQualityLayer);
      } else {
        map.overlayMapTypes.clear();
      }
    }
  }, [map, airQualityLayer, showAirQuality]);

  return (
    <div className="map-container">
      <GoogleMap
        mapContainerStyle={mapStyles}
        zoom={zoom}
        center={center}
        onLoad={onLoad}
        options={{
          clickableIcons: false
        }}
      />
    </div>
  );
};

export default Map;