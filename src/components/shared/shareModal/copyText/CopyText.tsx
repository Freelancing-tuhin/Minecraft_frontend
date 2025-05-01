import { IconCopy } from "@tabler/icons-react";
import React from "react";
import { FaCopy } from "react-icons/fa";
import { toast } from "react-toastify";

const CopyLinkComponent = ({ currentURL, data }: any) => {
  return (
    <>
      <div>
        <p className="text-gray-600 mb-2">Or copy link</p>
        <div className="flex items-center h-12 border border-gray-500 rounded-lg overflow-hidden">
          <input
            type="text"
            value={currentURL}
            readOnly
            className="flex-grow px-2 py-3 text-xs md:text-base text-gray-800 bg-gray-50 border-none focus:outline-none"
          />
          <button
            onClick={() => {
              navigator.clipboard.writeText(currentURL);
              toast.success("Successfully copied to clipboard!!", {
                position: "top-center",
              });
            }}
            className="bg-blue-500 hover:bg-blue-600 px-4 py-4  transition"
          >
            <IconCopy className="text-gray-50" />
          </button>
        </div>
      </div>
    </>
  );
};

export default CopyLinkComponent;
