import { IconMapPinFilled } from "@tabler/icons-react";
import React from "react";

const LocationCards = ({ location, showIcon }: any) => {
  return (
    <div className="mob-search-destination_card">
      {showIcon && (
        <div className="destination_icon map-icon icon-width">
          <div className="code-embed-3 w-embed">
            <IconMapPinFilled className="text-blue-500" />
          </div>
        </div>
      )}
      <div className="destination_description">
        <div className="mob-search-destination_title">{location}</div>
      </div>
    </div>
  );
};

export default LocationCards;
