import { useState, useEffect } from 'react';
import { LoadScript } from '@react-google-maps/api';
import { defaultCenter } from '../components/Map/mapStyles';
import Home from '../components/Home/Home';
import '../styles/map.css';

const libraries = ["places"];
const DEMO_API_KEY = 'AIzaSyCExTp8r8aszeyxMO7JMbonn1JZdFJGK4s';

const MapPage = () => {
  const [center, setCenter] = useState(defaultCenter);
  const [radius, setRadius] = useState(10);
  const apiKey = DEMO_API_KEY;

  useEffect(() => {
    // Request user's location when component mounts
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          // Successfully got location
          const { latitude, longitude } = position.coords;
          setCenter({ lat: latitude, lng: longitude });
        },
        (error) => {
          console.log("Error getting location:", error);
        },
        {
          enableHighAccuracy: true,
          timeout: 5000,
          maximumAge: 0
        }
      );
    }
  }, []);

  if (!apiKey) {
    console.error('Google Maps API key is missing. Please check your .env file.');
    return <div>Error: Google Maps API key is missing</div>;
  }

  const handlePlaceSelect = (location) => {
    setCenter(location);
  };

  return (
    <div className="app-content">
      <div className="card map-card">
        <LoadScript 
          googleMapsApiKey={apiKey}
          libraries={libraries}
        >
          <div className="map-content">
            <Home 
              center={center}
              radius={radius}
              handlePlaceSelect={handlePlaceSelect}
            />
          </div>
        </LoadScript>
      </div>
    </div>
  );
};

export default MapPage; 