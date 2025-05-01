import {
  IconBrandFacebook,
  IconBrandFacebookFilled,
  IconBrandInstagram,
  IconBrandLinkedin,
  IconBrandTwitter,
  IconBrandWhatsapp,
} from "@tabler/icons-react";
import React from "react";

import { toast } from "react-toastify";
import CopyLinkComponent from "./copyText/CopyText";
// import CopyLinkComponent from './CopyLinkComponent';

const ShareModal = ({ setIsModalOpen, isShareModalOpen, data }: any) => {
  const currentURL = window.location.href;

  const handleCopyLink = () => {
    navigator.clipboard.writeText(currentURL);
    toast.success("Successfully copied to clipboard!!", {
      position: "top-center",
    });
  };

  return (
    <>
      {isShareModalOpen && (
        <div
          onClick={() => setIsModalOpen(false)}
          className="fixed inset-0 z-[1500] bg-gray-800/50 backdrop-blur-md flex items-center justify-center"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-gray-50 rounded-2xl shadow-xl w-[90%] max-w-md p-6 relative animate-fadeIn"
          >
            {/* Heading */}
            <div className="text-2xl font-bold mb-6 text-gray-900 text-center">
              Share Link with Friends
            </div>

            {/* Social Icons Row */}
            <div className="flex justify-center gap-8 items-center mb-6">
              <a
                href={`https://www.instagram.com/share?url=${encodeURIComponent(
                  currentURL
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-pink-500 hover:text-pink-600 text-2xl transition"
              >
                <IconBrandInstagram />
              </a>
              <a
                href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(
                  currentURL
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-500 text-2xl transition"
              >
                <IconBrandTwitter />
              </a>
              <a
                href={`https://www.linkedin.com/shareArticle?url=${encodeURIComponent(
                  currentURL
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-700 hover:text-blue-800 text-2xl transition"
              >
                <IconBrandLinkedin />
              </a>
              <a
                href={`https://api.whatsapp.com/send?text=${encodeURIComponent(
                  currentURL
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-500 hover:text-green-600 text-2xl transition"
              >
                <IconBrandWhatsapp />
              </a>
              <a
                href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
                  currentURL
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-700 text-2xl transition"
              >
                <IconBrandFacebook />
              </a>
            </div>

            {/* Copy Link Section */}
            <div>
              <CopyLinkComponent currentURL={currentURL} data={data} />
            </div>

            {/* Close Button */}
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-2 right-2 text-gray-400 hover:text-gray-600 text-xl transition pr10"
            >
              &times;
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default ShareModal;
