/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useContext, useState } from "react";
import Navbar from "../../components/shared/navbar/Navbar";
import AuthContext from "../../contexts/authContext/authContext";
import { IconMail } from "@tabler/icons-react";
import LeftCard from "./leftCard/LeftCard";
import EditProfile from "./editProfile/EditProfile";

const Profile = () => {
  const { user, setUser } = useContext(AuthContext);
  const [editProfileClicked, setEditProfileCliked] = useState(false);
  return (
    <div>
      <Navbar isStickyTrue={true} />
      <section data-w-id="5f9cc665505a9a8ec46d478c" className="body">
        <section className="my-account-section pt-20">
          <div className="profile-wrapper">
            <LeftCard
              setEditProfileCliked={setEditProfileCliked}
              editProfileClicked={editProfileClicked}
            />
            {editProfileClicked || true ? (
              <div
                id="w-node-d5ba6a23-980e-f379-d4e9-02ca982da006-27b28b52"
                data-current="Tab 1"
                data-easing="ease"
                data-duration-in={300}
                data-duration-out={100}
                className="profile-card-tabs w-tabs"
              >
                <div className="">
                  <EditProfile />
                </div>
              </div>
            ) : (
              <div
                id="w-node-d5ba6a23-980e-f379-d4e9-02ca982da006-27b28b52"
                data-current="Tab 1"
                data-easing="ease"
                data-duration-in={300}
                data-duration-out={100}
                className="profile-card-tabs w-tabs"
              >
                {/* <div className="my-account-tabs w-tab-menu">
              <a
                onClick={() => setSelectedTab(0)}
                data-w-tab="Tab 1"
                className={`myaccount-tab-1 w-inline-block w-tab-link  ${
                  selectedTab === 0 ? `w--current` : ``
                }`}
              >
                <h4 className="my-account-tab-text-box">My Bookings</h4>
              </a>
              <a
                onClick={() => setSelectedTab(1)}
                data-w-tab="Tab 2"
                className={`my-account-tab-2 w-inline-block w-tab-link  ${
                  selectedTab === 1 ? `w--current` : ``
                }`}
              >
                <h4 className="my-account-tab-text-box">My Tables</h4>
              </a>
            </div> */}

                <div className="my-account-tab-content-wrapper w-tab-content">
                  {/* {selectedTab === 0 ? (
                <Bookings
                  otherProfile={false}
                  userId={userProfile?.id}
                  bookings={true}
                />
              ) : (
                <div data-w-tab="Tab 2">
                  <Bookings
                    otherProfile={false}
                    userId={userProfile?.id}
                    bookings={false}
                  />
                </div>
              )} */}
                </div>
              </div>
            )}
          </div>
        </section>
      </section>
    </div>
  );
};

export default Profile;
