import { Autocomplete } from '@react-google-maps/api';
import './SearchBox.css';

const SearchBox = ({ onPlaceSelect }) => {
  // Store the autocomplete instance
  let searchBox = null;

  // Called when a place is selected from the dropdown
  const onPlaceChanged = () => {
    if (searchBox) {
      const place = searchBox.getPlace();
      // Only update if we have valid coordinates
      if (place.geometry) {
        onPlaceSelect({
          lat: place.geometry.location.lat(),
          lng: place.geometry.location.lng()
        });
      }
    }
  };

  return (
    <div className="search-box">
      <Autocomplete
        onLoad={ref => searchBox = ref}
        onPlaceChanged={onPlaceChanged}
      >
        <input
          type="text"
          placeholder="Search locations..."
          className="search-input"
        />
      </Autocomplete>
    </div>
  );
};

export default SearchBox; 