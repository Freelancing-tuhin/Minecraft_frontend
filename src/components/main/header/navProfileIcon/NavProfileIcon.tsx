/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState } from "react";
import React from "react";
import { Link, useNavigate } from "react-router-dom";

const NavProfileIcon = ({ setIsVisible }: any) => {
  const [showModal, setShowModal] = useState(false); // State to control modal visibility
  const [isHovering, setIsHovering] = useState(false); // State to track hover

  let timer: any;

  const accessToken = localStorage.getItem("@user");

  const userPhoto = localStorage.getItem("@userPhoto");

  // Handle hover on profile icon
  const handleMouseEnter = () => {
    clearTimeout(timer); // Clear any pending hide actions
    setIsHovering(true);
    setShowModal(true);
  };

  // Handle hover out from profile icon or modal
  const handleMouseLeave = () => {
    timer = setTimeout(() => {
      setIsHovering(false); // After delay, hide modal if not hovering
      setShowModal(false);
    }, 0); // Modal stays visible for 300ms after mouse leaves
  };

  const navigate = useNavigate();

  return (
    <div
      className="relative group"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Profile Icon */}
      <div className="navbar_dropdown-toggle w-dropdown-toggle">
        {userPhoto ? (
          <div
            style={{
              backgroundImage: `url(${userPhoto})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              width: "40px",
              height: "40px",
            }}
            className="user-image rounded-full"
            aria-label="Profile"
          />
        ) : (
          <div className="nav-icon">
            <div className="user" />
          </div>
        )}
      </div>

      {/* Modal */}
      {(showModal || isHovering) && (
        <nav className="navbar_dropdown-list nav-width user-dropdown w-dropdown-list w--open">
          <div className="navbar_dropdown-content">
            <div className="navbar_dropdown-link-list">
              {accessToken ? (
                <>
                  <Link
                    to="/profile/myprofile"
                    className="navbar_dropdown-link user-drop-down w-inline-block"
                  >
                    <div className="v3-uui-navbar08_item-right">
                      <div className="notification-title">Profile</div>
                    </div>
                  </Link>
                  <a
                    id="w-node-_8a23e3a0-0bf3-850e-05da-75357fc8f557-7fc8f4a5"
                    href="/profile/myprofile"
                    className="navbar_dropdown-link user-drop-down w-inline-block"
                  >
                    <div className="v3-uui-navbar08_item-right">
                      <div className="notification-title">My Bookings</div>
                    </div>
                  </a>
                  <Link
                    id="w-node-_8a23e3a0-0bf3-850e-05da-75357fc8f55b-7fc8f4a5"
                    to="/wishlist"
                    className="navbar_dropdown-link user-drop-down w-inline-block"
                  >
                    <div className="v3-uui-navbar08_item-right">
                      <div className="notification-title">My Wishlist</div>
                    </div>
                  </Link>
                  <Link
                    id="w-node-_8a23e3a0-0bf3-850e-05da-75357fc8f55b-7fc8f4a5"
                    to="/create-table"
                    className="navbar_dropdown-link user-drop-down w-inline-block"
                  >
                    <div className="v3-uui-navbar08_item-right">
                      <div className="notification-title">Float a Table</div>
                    </div>
                  </Link>
                </>
              ) : (
                <>
                  <div
                    onClick={() => setIsVisible(true)}
                    className="navbar_dropdown-link user-drop-down w-inline-block"
                  >
                    <div className="v3-uui-navbar08_item-right">
                      <div className="notification-title">Login</div>
                    </div>
                  </div>
                  {/* <div
                    onClick={() => setIsVisible(true)}
                    id="w-node-_8a23e3a0-0bf3-850e-05da-75357fc8f557-7fc8f4a5"
                    className="navbar_dropdown-link user-drop-down w-inline-block"
                  >
                    <div className="v3-uui-navbar08_item-right">
                      <div className="notification-title">Sign Up</div>
                    </div>
                  </div> */}
                </>
              )}

              <a
                id="w-node-_8a23e3a0-0bf3-850e-05da-75357fc8f55f-7fc8f4a5"
                href="mailto:support@hightable.ai"
                className="navbar_dropdown-link user-drop-down w-inline-block"
              >
                <div className="v3-uui-navbar08_item-right">
                  <div className="notification-title">Help</div>
                </div>
              </a>
              {accessToken && (
                <>
                  <div
                    id="w-node-_8a23e3a0-0bf3-850e-05da-75357fc8f563-7fc8f4a5"
                    className="logout"
                  >
                    <a
                      id="w-node-_8a23e3a0-0bf3-850e-05da-75357fc8f564-7fc8f4a5"
                      className="navbar_dropdown-link user-drop-down mg-top-7 w-inline-block"
                      onClick={() => {
                        localStorage.removeItem("@user");
                        localStorage.removeItem("@userRefreshToken");
                        localStorage.removeItem("@userName");
                        localStorage.removeItem("@userPhone");
                        localStorage.removeItem("@userAccount");
                        localStorage.removeItem("@userPhoto");

                        // localStorage.clear();
                        navigate(`/`);
                        window.location.reload();
                      }}
                    >
                      <div className="v3-uui-navbar08_item-right">
                        <div className="notification-title logout-red">
                          Logout
                        </div>
                      </div>
                    </a>
                  </div>
                </>
              )}
            </div>
          </div>
        </nav>
      )}
    </div>
  );
};

export default NavProfileIcon;
