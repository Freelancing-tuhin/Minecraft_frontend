import React, { useState, useEffect, useRef } from "react";
import LocationCards from "./locationCards/LocationCards";

const LocationSearch = ({ place, handlePlaceInputChange }: any) => {
  const [showDrawer, setShowDrawer] = useState(false);
  const [filteredLocations, setFilteredLocations] = useState<any>([]);
  const dropdownRef = useRef<any>(null);

  // Close drawer when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: any) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowDrawer(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const fetchCitySuggestions = async (query: any) => {
    // @ts-ignore
    const service = new google.maps.places.AutocompleteService();

    service.getPlacePredictions(
      {
        input: query,
        types: ["geocode"], // Can also use ["(cities)"] for only cities
        componentRestrictions: { country: "in" }, // India
      },
      (predictions: any, status: any) => {
        // @ts-ignore
        if (status === google.maps.places.PlacesServiceStatus.OK) {
          const suggestions = predictions.map(
            (prediction: any) => prediction.description
          );
          setFilteredLocations(suggestions);
        } else {
          setFilteredLocations(["No locations found. Try a different name 🚀"]);
        }
      }
    );
  };

  const handleInputChange = (e: any) => {
    handlePlaceInputChange(e); // Send to parent
    const value = e.target.value;
    if (value.trim()) {
      fetchCitySuggestions(value);
    } else {
      setFilteredLocations([]);
    }
    setShowDrawer(true);
  };

  return (
    <div className="relative" ref={dropdownRef}>
      {/* Input Field */}
      <div
        className="navbar_form--destination dropdown-trigger"
        onClick={() => setShowDrawer(!showDrawer)}
      >
        <label htmlFor="name-2" className="title">
          Where
        </label>
        <input
          id="name-2"
          type="text"
          name="name-2"
          value={place}
          onChange={handleInputChange}
          placeholder="Search Location"
          className="navbar_form--textfield w-input"
          autoComplete="off"
          maxLength={256}
        />
        <div className="placeholder">Where are you going to?</div>
      </div>

      {/* Drawer */}
      {showDrawer && (
        <div className="absolute top-full left-0 right-0 pb-5 w-56 sm:w-96 bg-white rounded-2xl shadow-lg mt-2 z-50">
          <ul className="max-h-72 overflow-auto pt-5 padleft-0">
            {filteredLocations.length > 0 ? (
              filteredLocations.map((location: any, index: number) => (
                <li
                  key={index}
                  onClick={() => {
                    handlePlaceInputChange({ target: { value: location } });
                    setShowDrawer(false);
                  }}
                >
                  <LocationCards location={location} showIcon={true} />
                </li>
              ))
            ) : (
              <li className="px-4 py-2 text-gray-500">No locations found</li>
            )}
          </ul>
        </div>
      )}
    </div>
  );
};

export default LocationSearch;
