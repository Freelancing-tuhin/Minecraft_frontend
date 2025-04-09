import React from "react";

const cities = [
  "Mumbai",
  "Delhi",
  "Bangalore",
  "Hyderabad",
  "Ahmedabad",
  "Chennai",
  "Kolkata",
  "Pune",
  "Jaipur",
  "Surat",
  "Lucknow",
  "Kanpur",
  "Nagpur",
  "Visakhapatnam",
  "Indore",
  "Bhopal",
  "Patna",
  "Ludhiana",
  "Agra",
  "Nashik",
  "Vadodara",
  "Faridabad",
  "Meerut",
  "Rajkot",
];

const InfiniteScroll = () => {
  return (
    <div className="scroll-container">
      <div className="scroll-content">
        {[...cities, ...cities].map((city, index) => (
          <span key={index} className="city">
            {city}
          </span>
        ))}
      </div>
    </div>
  );
};

export default InfiniteScroll;
