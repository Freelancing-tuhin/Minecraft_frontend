// import React from 'react'

// const TicketModalMobile = () => {
//   return (
//     <div>TicketModalMobile</div>
//   )
// }

// export default TicketModalMobile

import React, { useState } from "react";
import StallList from "../../main/eventDetails/stallList/StallList";

const TicketModalMobile = ({ data, payments = [] }: any) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
    console.log("======>data", data);
  };

  return (
    <div className="p-4 z-[100]">
      {/* Button to open modal */}

      <div id={`w-node-1`} className="site_right-item">
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

export default TicketModalMobile;
