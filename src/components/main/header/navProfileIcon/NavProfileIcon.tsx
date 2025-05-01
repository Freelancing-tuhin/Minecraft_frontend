import { IconUser, IconUserFilled } from "@tabler/icons-react";
import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const NavProfileIcon: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      {!isOpen ? (
        <button
          type="button"
          className="p-2 -m-2 text-gray-700 hover:text-gray-900 transition-colors"
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
          aria-label="Profile menu"
        >
          <svg
            className="w-6 h-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
            />
          </svg>
        </button>
      ) : (
        <button
          type="button"
          className="p-2 -m-2 text-gray-700 hover:text-gray-900 transition-colors"
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
          aria-label="Profile menu"
        >
          <IconUserFilled />
        </button>
      )}

      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 px-2 text-md bg-white rounded-2xl shadow-lg py-1 z-50 border border-gray-100">
          <ProfileMenuItem
            label="Profile"
            onClick={() => navigate("/profile")}
          />
          <ProfileMenuItem label="My Bookings" />
          <ProfileMenuItem label="My Wishlist" />
          <ProfileMenuItem label="Float a Table" />
          <div className="border-t border-gray-100 my-1"></div>
          <ProfileMenuItem label="Help" />
          <ProfileMenuItem label="Logout" />
        </div>
      )}
    </div>
  );
};

interface ProfileMenuItemProps {
  label: string;
  onClick?: () => void;
}

const ProfileMenuItem: React.FC<ProfileMenuItemProps> = ({
  label,
  onClick,
}) => {
  return (
    <button
      className=" w-full text-center px-4 py-2 text-xl text-gray-700 rounded-full hover:bg-gray-200 transition-colors"
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default NavProfileIcon;
