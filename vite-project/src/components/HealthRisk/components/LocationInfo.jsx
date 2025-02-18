const LocationInfo = ({ locationData }) => {
  if (!locationData) return null;

  return (
    <div className="location-info">
      <p>
        Location detected: {locationData.city}, {locationData.region}, {locationData.country}
      </p>
    </div>
  );
};

export default LocationInfo; 