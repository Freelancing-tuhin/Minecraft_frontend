import React, { useState, useEffect, useRef } from "react";
import LocationCards from "./locationCards/LocationCards";

const LocationSearch = ({ place, handlePlaceInputChange }: any) => {
  const [showDrawer, setShowDrawer] = useState(false); // Drawer visibility
  const [filteredLocations, setFilteredLocations] = useState<any>([]); // Filtered locations
  const dropdownRef = useRef<any>(null); // Ref for the dropdown container

  // Close the drawer when clicking outside
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
    // eslint-disable-next-line no-undef
    // @ts-ignore eslint-disable-next-line
    const service = new google.maps.places.AutocompleteService();

    service.getPlacePredictions(
      {
        input: query,
        types: ["geocode"], // Use geocode for broader results, including localities
        componentRestrictions: { country: "in" }, // Restrict to India
      },
      (predictions: any, status: any) => {
        // eslint-disable-next-line no-undef
        // @ts-ignore eslint-disable-next-line
        if (status === google.maps.places.PlacesServiceStatus.OK) {
          // Filter predictions where "Bengaluru" exists in the "terms" array
          const bangaloreLocations = predictions.filter((prediction: any) =>
            prediction.terms.some(
              (term: any) => term.value.toLowerCase() === "bengaluru"
            )
          );

          if (bangaloreLocations.length > 0) {
            const suggestions = bangaloreLocations.map(
              (prediction: any) => prediction.description
            );
            setFilteredLocations(suggestions);
          } else {
            // If no Bengaluru results, show custom message
            setFilteredLocations([
              "Bangalore is our first love. But don’t worry, we’re ready to start a long-distance relationship soon! ❤️",
            ]);
          }
        } else {
          // Handle no results or API errors
          setFilteredLocations([
            "Bangalore is our first love. But don’t worry, we’re ready to start a long-distance relationship soon! ❤️",
          ]);
        }
      }
    );
  };

  const handleInputChange = (e: any) => {
    handlePlaceInputChange(e); // Call the parent handler
    const value = e.target.value;
    if (value.trim()) {
      fetchCitySuggestions(value); // Fetch city suggestions
    } else {
      setFilteredLocations([]); // Clear suggestions for empty input
    }
    setShowDrawer(true); // Ensure drawer stays open while typing
  };

  return (
    <div className="relative" ref={dropdownRef}>
      {/* Input Field */}
      <div
        className="navbar_form--destination dropdown-trigger"
        onClick={() => setShowDrawer(!showDrawer)} // Toggle drawer
      >
        <label htmlFor="name-2" className="title">
          Where
        </label>
        <input
          id="name-2"
          type="text"
          name="name-2"
          value={place}
          onChange={(e) => handleInputChange(e)}
          placeholder="Search Location"
          className="navbar_form--textfield w-input"
          autoComplete="off"
          maxLength={256}
        />
        <div className="placeholder">Where are you going to?</div>
      </div>

      {/* Drawer */}
      {showDrawer && (
        <div className="absolute top-full left-0 right-0 pb-5 w-56 sm:w-96 bg-white rounded-2xl shadow-lg mt-2">
          <ul className="max-h-72 overflow-auto pt-5 padleft-0">
            {filteredLocations.length > 0 ? (
              filteredLocations.map((location: any, index: any) => (
                <li
                  key={index}
                  onClick={() => {
                    if (!location.includes("Bangalore is our first love")) {
                      handlePlaceInputChange({ target: { value: location } }); // Select location
                      setShowDrawer(false); // Close drawer
                    }
                  }}
                >
                  <LocationCards
                    location={location}
                    showIcon={!location.includes("Bangalore is our first love")}
                  />
                </li>
              ))
            ) : (
              <li className="px-4 py-2 text-gray-500">No locations found</li>
            )}
          </ul>
          {/* <LocationSvg /> */}
        </div>
      )}
    </div>
  );
};

export default LocationSearch;
