import React, { useState } from "react";

const ReportModal = () => {
  const [showModal, setShowModal] = useState(false);
  const [issueText, setIssueText] = useState("");

  const handleSubmit = () => {
    if (!issueText.trim()) return alert("Please describe your issue.");
    console.log("Submitted issue:", issueText);
    // You can send the data to backend here
    setShowModal(false);
    setIssueText("");
  };

  return (
    <div>
      {/* Report Button */}
      <div
        className="border border-red-300 bg-red-100 text-red-700 px-4 py-2 rounded-md hover:bg-gray-200 transition"
        onClick={() => setShowModal(true)}
      >
        Report User
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black/50 bg-blur bg-opacity-75 z-50 flex items-center justify-center">
          <div className="bg-white w-11/12 max-w-md rounded-xl shadow-lg p-6 relative">
            {/* Close Button */}
            <button
              className="absolute top-3 right-3 text-blue-600 hover:text-blue-800 text-xl"
              onClick={() => setShowModal(false)}
            >
              ×
            </button>

            {/* Modal Content */}
            <h2 className="text-xl font-semibold text-gray-700 mb-4">
              Report User
            </h2>
            <textarea
              value={issueText}
              onChange={(e) => setIssueText(e.target.value)}
              placeholder="Please describe the issue..."
              rows={5}
              className="w-full p-3 border border-blue-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <div
              onClick={handleSubmit}
              className="mt-4 w-full text-center bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition"
            >
              Submit
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ReportModal;
