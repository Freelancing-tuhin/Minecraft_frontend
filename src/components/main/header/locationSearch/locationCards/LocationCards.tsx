import React from "react";

const LocationCards = ({ location, showIcon }: any) => {
  return (
    <div className="mob-search-destination_card">
      {showIcon && (
        <div className="destination_icon map-icon icon-width">
          <div className="code-embed-3 w-embed">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width={20}
              height={20}
              viewBox="0,0,256,256"
              className="w-20"
            >
              <g
                fill="currentColor"
                fillRule="nonzero"
                stroke="none"
                strokeWidth={1}
                strokeLinecap="butt"
                strokeLinejoin="miter"
                strokeMiterlimit={10}
                strokeDasharray=""
                strokeDashoffset={0}
                fontFamily="none"
                fontWeight="none"
                fontSize="none"
                textAnchor="none"
                style={{ mixBlendMode: "normal" }}
              >
                <g transform="scale(5.33333,5.33333)">
                  <path d="M24,4c-9.374,0 -17,7.626 -17,17c0,4.036 1.449,7.953 4.093,11.048c0.302,0.343 7.427,8.439 9.807,10.708c0.869,0.829 1.984,1.244 3.1,1.244c1.116,0 2.231,-0.415 3.101,-1.244c2.767,-2.639 9.524,-10.385 9.82,-10.725c2.63,-3.078 4.079,-6.995 4.079,-11.031c0,-9.374 -7.626,-17 -17,-17zM24,26c-2.761,0 -5,-2.239 -5,-5c0,-2.761 2.239,-5 5,-5c2.761,0 5,2.239 5,5c0,2.761 -2.239,5 -5,5z" />
                </g>
              </g>
            </svg>
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
