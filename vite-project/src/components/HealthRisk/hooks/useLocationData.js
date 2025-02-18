import { useState, useEffect } from 'react';

export const useLocationData = () => {
  const [loading, setLoading] = useState(true);
  const [locationData, setLocationData] = useState(null);

  useEffect(() => {
    // ipapi.co provides a free IP geolocation API
    // No API key needed for basic usage (up to 1000 requests/day)
    // Returns: city, region, country, latitude, longitude, etc.
    fetch('https://ipapi.co/json/')
      .then(response => response.json())
      .then(data => {
        // Transform API response into our location data format
        setLocationData({
          city: data.city,
          region: data.region,
          country: data.country_name,
          latitude: data.latitude,
          longitude: data.longitude,
          // Consider a location urban if population > 100k
          isUrban: data.city_population > 100000
        });
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching location:', error);
        setLoading(false);
      });
  }, []); // Empty dependency array means this runs once on component mount

  return { loading, locationData };
}; 