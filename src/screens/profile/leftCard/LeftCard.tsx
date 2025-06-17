/* eslint-disable jsx-a11y/anchor-is-valid */
import { IconMail } from "@tabler/icons-react";
import React, { useContext } from "react";
import AuthContext from "../../../contexts/authContext/authContext";

const LeftCard = ({ editProfileClicked, setEditProfileCliked }: any) => {
  const { user, setUser } = useContext(AuthContext);
  return (
    <div
      id="w-node-_9eedf92e-a962-7390-bcac-0ae6424c1a76-27b28b52"
      className="profile-card-left"
    >
      <div className="profile-card-wrapper">
        <div className="review_details-left-item">
          <div className="review_details-flex-item">
            <div className="review-five-user">
              {user?.profile_pic ? (
                <img
                  src={user.profile_pic}
                  alt="Profile"
                  className="w-10 h-10 rounded-full object-cover border-1 shadow-xl border-gray-200 hover:border-gray-300 transition-colors duration-200"
                />
              ) : (
                <div className="nav-icon">
                  <div className="user" />
                </div>
              )}
            </div>
            <div className="review_details-content">
              <div className="margin-bottom margin-xxsmall">
                <h6 className="heading-6">{user?.name} </h6>
              </div>

              <div className="margin-bottom">
                <div className="date-text">{user?.email}</div>
              </div>
            </div>
          </div>

          <div className="profile-card-rating-flex">
            <div
              data-w-id="01dae784-a55a-5e0e-b540-62dcbf1303a9"
              style={{
                opacity: 1,
              }}
              className="review-block-big"
            >
              <div className="code-embed-7 w-embed">
                {/*?xml version="1.0" encoding="utf-8"?*/}
                {/*  Uploaded to: SVG Repo, www.svgrepo.com, Generator: SVG Repo Mixer Tools  */}
                <IconMail color="gray" />
              </div>

              <div className="review-text-increase">{user?.email}</div>
            </div>
          </div>
          <div className="margin-top margin-medium w-72 dfkex">
            <p className="paragraph-2">
              {user?.about || "No description? No problem, just vibes."}
            </p>
          </div>

          <div className="margin-bottom margin-small view-profile-btn pt-[30px]">
            <a
              // onClick={() => setEditProfileCliked(true)}
              href="#"
              className="button-3 w-button"
            >
              Share Profile
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftCard;
