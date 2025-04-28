/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from "react";
// import NavbarDateInput from "../main/navbarInputs/navbarDateInput/NavbarDateInput";
// import NavProfileIcon from "../shared/navProfileIcon/NavProfileIcon";
// import NavNotificationBellIcon from "../shared/navNotificationIcon/NavNotificationBellIcon";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
// import LocationSearch from "../shared/locationSearch/LocationSearch";
import { toast } from "react-toastify";
import LocationSearch from "../../main/header/locationSearch/LocationSearch";
import NavbarDateInput from "../../main/header/navbarDateInput/NavbarDateInput";
import NavProfileIcon from "../../main/header/navProfileIcon/NavProfileIcon";

function Header({ setIsVisible }: any) {
  const accessToken = localStorage.getItem("@user");
  //   const navigate = useNavigate();
  useEffect(() => {
    const trigger = document.querySelector(".dropdown-trigger");
    const dropdown = document.querySelector(".dropdown");
    if (trigger && dropdown) {
      const handleTriggerClick = (event: any) => {
        dropdown.classList.toggle("hidden");
        event.stopPropagation();
      };

      const handleDocumentClick = (event: any) => {
        if (
          !dropdown.contains(event.target) &&
          !trigger.contains(event.target)
        ) {
          dropdown.classList.add("hidden");
        }
      };

      trigger.addEventListener("click", handleTriggerClick);
      document.addEventListener("click", handleDocumentClick);

      return () => {
        trigger.removeEventListener("click", handleTriggerClick);
        document.removeEventListener("click", handleDocumentClick);
      };
    }
  }, []);

  function formatDate(date: any) {
    if (date) {
      const day = String(date.getDate()).padStart(2, "0");
      const month = String(date.getMonth() + 1).padStart(2, "0");
      const year = date.getFullYear();
      return `${day}-${month}-${year}`;
    }
  }

  const [place, setPlace] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [searchText, setSearchText] = useState("");

  const handlePlaceInputChange = (event: any) => {
    setPlace(event.target.value);
  };
  const handleSearchTextInputChange = (event: any) => {
    setSearchText(event.target.value);
  };

  const handleSubmit = async (event: any) => {
    if (!accessToken) {
      setIsVisible(true);
      return;
    }
    if (place.length <= 0 && searchText.length <= 0 && !startDate) {
      toast.error("Please select an option!", {
        position: "top-center",
      });
      return;
    }
    event.preventDefault();

    const apiUrl = `https://htprdapi.hightable.ai/tables/table-search`;

    const requestBody = {
      address: place,
      from: formatDate(startDate),
      to: formatDate(endDate),
      search: searchText,
    };

    try {
      //   const response = await axios.post(apiUrl, requestBody, {
      //     params: {
      //       access_token: accessToken,
      //       address: "puducherry",
      //     },
      //     headers: {
      //       "Content-Type": "application/json",
      //     },
      //   });

      console.log("API Response is:", requestBody);
      //   navigate("/searchresult", {
      //     state: {
      //       data: response.data,
      //       searchPayload: requestBody,
      //     },
      //   });
    } catch (error: any) {
      //   navigate("/searchresult", {
      //     state: { error: error.message, details: error.response?.data || null },
      //   });
    }
  };

  return (
    <div
      data-animation="default"
      data-collapse="medium"
      data-duration={400}
      data-easing="ease"
      data-easing2="ease"
      role="banner"
      className=""
    >
      <div className="container-regular">
        <div className="">
          <div className="navbar_searchbox w-96 font-size">
            <div className="form-block w-form py-1.5 px-2">
              <form
                id="email-form"
                name="email-form"
                data-name="Email Form"
                method="get"
                className="form"
                data-wf-page-id="67432a5d4dafa20e3890e283"
                data-wf-element-id="8a23e3a0-0bf3-850e-05da-75357fc8f4b0"
              >
                <LocationSearch
                  place={place}
                  handlePlaceInputChange={handlePlaceInputChange}
                />

                <NavbarDateInput
                  setEndDate={setEndDate}
                  setStartDate={setStartDate}
                  startDate={startDate}
                  endDate={endDate}
                />
                <div className="navbar_form--checkin">
                  <label htmlFor="Dates-3" className="field-label-3">
                    What
                  </label>
                  <input
                    className="navbar_form--textfield w-input"
                    maxLength={256}
                    name="Dates-2"
                    data-name="Dates 2"
                    placeholder="Search Tables, hosts ..."
                    type="text"
                    id="Dates-2"
                    value={searchText} // Bind state to input value
                    onChange={handleSearchTextInputChange}
                  />
                  <div className="placeholder">Add guests</div>
                </div>
                <a
                  data-w-id="8a23e3a0-0bf3-850e-05da-75357fc8f4ed"
                  href="#"
                  className="link-block w-inline-block"
                  onClick={handleSubmit}
                >
                  <div className="navbar_form--button_wrapper with-search">
                    <div className="arrow">
                      <img
                        loading="lazy"
                        src="/images/search_rounded.svg"
                        alt=""
                        className="navbar_form--button_arrow"
                      />
                    </div>
                    <div
                      data-w-id="8a23e3a0-0bf3-850e-05da-75357fc8f4f1"
                      className="searchtext hide-text"
                    >
                      Search
                    </div>
                  </div>
                </a>
              </form>
              <div className="w-form-done">
                <div>Thank you! Your submission has been received!</div>
              </div>
              <div className="w-form-fail">
                <div>Oops! Something went wrong while submitting the form.</div>
              </div>
            </div>
          </div>
          {/* <nav
                role="navigation"
                className="nav-menu-wrapper w-nav-menu hidden sm:inline"
              >
                <ul role="list" className="nav-menu w-list-unstyled">
                  <li className="mobile-margin-top-10">
                    <div className="nav-button-wrapper">
                      <div className="nav-button nav-icon" />
                      <div
                        data-delay={300}
                        data-hover="true"
                        data-w-id="8a23e3a0-0bf3-850e-05da-75357fc8f500"
                      >
                        <div className="navbar_dropdown-toggle w-dropdown-toggle">
                        <div className="nav-icon">
                          <div className="user notification" />
                        </div>
                      </div>
                        {accessToken ? <NavNotificationBellIcon /> : null}
                      </div>
                    </div>
                  </li>
                </ul>
              </nav> */}
        </div>
      </div>
    </div>
  );
}

export default Header;
