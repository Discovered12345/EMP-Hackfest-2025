import { useState, useRef, useEffect } from 'react';
import Map from '../Map/Map';
import SearchBox from '../SearchBox/SearchBox';
import AQIColorKey from '../AQIColorKey/AQIColorKey';
import RadiusControl from '../RadiusControl/RadiusControl';
import { getZoomForRadius } from '../../utils/radiusUtils';

const Home = ({ center, radius, handlePlaceSelect }) => {
  const [showAirQuality, setShowAirQuality] = useState(true);
  const [zoom, setZoom] = useState(12);
  const mapRef = useRef(null);

  useEffect(() => {
    // When center changes, pan the map to the new location
    if (mapRef.current) {
      mapRef.current.panTo(center);
      mapRef.current.setZoom(11);
    }
  }, [center]);

  const handleRadiusChange = (newRadius) => {
    setZoom(getZoomForRadius(newRadius));
  };

  const handlePlaceSelectWithZoom = (location) => {
    handlePlaceSelect(location);
    setZoom(getZoomForRadius(radius));
  };

  return (
    <div className="home-container">
      <div className="controls">
        <SearchBox onPlaceSelect={handlePlaceSelectWithZoom} />
        <RadiusControl radius={radius} setRadius={handleRadiusChange} />
        <button
          onClick={() => setShowAirQuality(!showAirQuality)}
          className={`control-button ${showAirQuality ? 'active' : ''}`}
        >
          {showAirQuality ? 'Hide Air Quality' : 'Show Air Quality'}
        </button>
      </div>
      <Map 
        center={center}
        showAirQuality={showAirQuality}
        zoom={zoom}
        radius={radius}
        onLoad={(map) => {
          window.map = map;
          mapRef.current = map;
        }}
      />
      <AQIColorKey />
    </div>
  );
};

export default Home; 