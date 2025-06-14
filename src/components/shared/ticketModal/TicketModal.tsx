import React, { useState } from "react";
import StallList from "../../main/eventDetails/stallList/StallList";

const TicketModal = ({ data, payments = [] }: any) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
    console.log("======>data", data);
  };

  return (
    <div className="p-4">
      {/* Button to open modal */}

      <div id={`w-node-1`} className="site_right-item">
        <div className="card_content-block">
          <span className="price-text">Space Bookings </span>
          <div className="card-flex-block"></div>
          <div className="time-flex-block">
            <div className="time-flex-item">
              <div className="code-embed-date-icon w-embed">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width={20}
                  height={20}
                  viewBox="0,0,256,256"
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
                      <path d="M42,14v-1.5c0,-3.584 -2.916,-6.5 -6.5,-6.5h-23c-3.584,0 -6.5,2.916 -6.5,6.5v1.5zM6,17v18.5c0,3.584 2.916,6.5 6.5,6.5h23c3.584,0 6.5,-2.916 6.5,-6.5v-18.5zM15.5,36c-1.381,0 -2.5,-1.119 -2.5,-2.5c0,-1.381 1.119,-2.5 2.5,-2.5c1.381,0 2.5,1.119 2.5,2.5c0,1.381 -1.119,2.5 -2.5,2.5zM15.5,27c-1.381,0 -2.5,-1.119 -2.5,-2.5c0,-1.381 1.119,-2.5 2.5,-2.5c1.381,0 2.5,1.119 2.5,2.5c0,1.381 -1.119,2.5 -2.5,2.5zM24,36c-1.381,0 -2.5,-1.119 -2.5,-2.5c0,-1.381 1.119,-2.5 2.5,-2.5c1.381,0 2.5,1.119 2.5,2.5c0,1.381 -1.119,2.5 -2.5,2.5zM24,27c-1.381,0 -2.5,-1.119 -2.5,-2.5c0,-1.381 1.119,-2.5 2.5,-2.5c1.381,0 2.5,1.119 2.5,2.5c0,1.381 -1.119,2.5 -2.5,2.5zM32.5,27c-1.381,0 -2.5,-1.119 -2.5,-2.5c0,-1.381 1.119,-2.5 2.5,-2.5c1.381,0 2.5,1.119 2.5,2.5c0,1.381 -1.119,2.5 -2.5,2.5z" />
                    </g>
                  </g>
                </svg>
              </div>
              <div className="time-text">
                <span className="text-span-2">Dates Available</span>
                <br />
                fsfsf
              </div>
            </div>
            <div className="time-flex-item2">
              <div className="embed-code-location w-embed">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width={20}
                  height={20}
                  viewBox="0,0,256,256"
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
              <div className="time-text">
                <span className="text-span-2">Area</span>
                <br />
                sfsf
              </div>
            </div>
          </div>
          <div className="card-dropdown-toggle">
            <div className="dropdown-text">
              <span className="text-span-2">Guests</span>
              <br />
              444
            </div>
          </div>
          {/* Render the appropriate button based on payment status */}
          <div
            onClick={toggleModal}
            style={{
              backgroundColor: "#2196f3",
              color: "white",
              padding: "10px 20px",
              border: "none",
              borderRadius: "8px",
              cursor: "pointer",
              width: "100%",
              marginTop: "15px",
              fontSize: "16px",
              fontWeight: "600",
              textAlign: "center",
            }}
          >
            Show Tickets
          </div>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/50 bg-opacity-75 flex items-center justify-center p-4 z-50">
          <div className=" w-4/5 h-4/5 bg-white rounded-lg shadow-xl overflow-hidden">
            <div className="px-6 py-4 bg-gray-50 flex justify-end relative position-relative">
              <button
                onClick={toggleModal}
                className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 transition-colors"
              >
                Close
              </button>
            </div>
            {/* Modal content */}
            <StallList
              data={data?.ticket_availability}
              payments={data?.payment_status}
            />
            {/* Close button */}
          </div>
        </div>
      )}
    </div>
  );
};

export default TicketModal;
