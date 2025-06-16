/* eslint-disable jsx-a11y/anchor-is-valid */
import {
  IconBookmark,
  IconCalendarWeek,
  IconHeart,
  IconHeartFilled,
  IconLocation,
  IconMapPin,
  IconStarFilled,
} from "@tabler/icons-react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useBookmarks } from "../../../contexts/bookMarkContext/BookMarkContext";

const ConcertCard = ({ setIsVisible, slide }: any) => {
  const handleNavigate = () => {};

  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const { isBookmarked, toggleBookmark } = useBookmarks();

  useEffect(() => {
    // Function to update the screen width
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    // Set initial state and add listener
    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const getTruncatedCity = () => {
    if (!slide?.location?.address) return "Bangalore"; // Default value
    return slide?.location?.address;
  };

  const getDynamicClass = () => {
    if (screenWidth < 480) {
      return "hidden"; // Hidden for small screens
    } else if (screenWidth >= 480 && screenWidth < 630) {
      return "inline"; // Visible for medium-small screens
    } else if (screenWidth >= 630 && screenWidth < 750) {
      return "inline"; // Visible for medium screens
    } else if (screenWidth >= 750 && screenWidth < 1500) {
      return "hidden"; // Visible for larger screens
    } else {
      return "inline"; // Visible for extra-large screens
    }
  };

  function formatDate(dateString: any) {
    if (!dateString) return "";
    const [day, month, year] = dateString.split(" ")[0].split("-");
    const date = new Date(`${year}-${month}-${day}`);
    return date.toLocaleDateString("en-US", {
      day: "numeric",
      month: "short",
    });
  }

  function formatTime(dateString: any) {
    if (!dateString) return "";
    const [day, month, year, time] = [
      ...dateString.split(" ")[0].split("-"),
      dateString.split(" ")[1],
    ];
    const date = new Date(`${year}-${month}-${day}T${time}`);
    return date.toLocaleTimeString("en-US", {
      hour: "numeric",
      minute: "numeric",
      hour12: true,
    });
  }

  //   const eventTimeClass = getDynamicClass(screenWidth);

  return (
    <Link
      to={`/space/${slide._id}`}
      id="w-node-fcce1b21-3954-7070-54ad-f0ea51f92fae-3890e283"
      className="table-list-card"
    >
      <div className="text-5xl text-black"></div>
      <div className="property-image custom-bg _2">
        <div className="table-card-div">
          <div className="property-image-inner">
            <div className="p-image-inner-info-top">
              <div className="card-image-left-meta">
                <p className="category">{slide?.category}</p>
              </div>
              <div className="card-image-left-meta">
                {/* {bookmarks.includes(slide.id) ? ( */}
                <a
                  className="
                   wishlist-iconf"
                  // onClick={handleBookmark}
                >
                  <div className="w-embed trnasparentbg" aria-disabled>
                    {isBookmarked(slide?._id) ? (
                      // eslint-disable-next-line react/jsx-no-undef
                      <div className="flex items-center">
                        <IconHeartFilled
                          size={24}
                          className="text-yellow-500"
                        />{" "}
                      </div>
                    ) : (
                      // eslint-disable-next-line react/jsx-no-undef
                      <div className="flex items-center">
                        <IconHeart size={24} color="white" />
                      </div>
                    )}
                    {/* <IconHeart size={24} color="white" /> */}
                  </div>
                </a>
              </div>
            </div>
          </div>

          <div
            id="w-node-fcce1b21-3954-7070-54ad-f0ea51f92fbb-3890e283"
            onClick={handleNavigate}
            className="table-card-image w-inline-block relative "
          >
            <div className="absolute w-full  bottom-2 px-2">
              <div className="flex  justify-between items-center">
                <div className="card-meta-datat comapny-and-date">
                  <div className="property-size property-company">
                    <div className="host-dp shadow-xl">
                      <img
                        loading="lazy"
                        src={
                          slide?.organizerId?.profile_pic
                            ? `${slide.organizerId?.profile_pic}`
                            : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4YreOWfDX3kK-QLAbAL4ufCPc84ol2MA8Xg&s"
                        }
                        alt=""
                        className="host-image-on-card shadow-xl shadow-gray-800"
                      />
                    </div>
                    <p className="host-name text-white pt-2">
                      {" "}
                      {slide?.organizerId?.full_name}
                    </p>
                  </div>
                </div>
                {/* <p className="price_category shadow-xl">
                  <div className="text-sm flex items-center text-gray-50">
                    {" "}
                    <div className="text-base font-medium">₹{slide.price}</div>
                    <div className="text-xs">&nbsp;/ seat</div>
                  </div>
                </p> */}
              </div>
            </div>
            <img
              loading="lazy"
              src={`${slide?.banner_Image}`}
              alt=""
              className="table-image-oncard placeholderimg"
            />
            <div className="card-overlay-grad" />
          </div>
        </div>
      </div>
      <div
        id="w-node-fcce1b21-3954-7070-54ad-f0ea51f92fbd-3890e283"
        onClick={handleNavigate}
        className="card-details w-inline-block w-full"
      >
        <div className="pt-2 w-full flex items-center justify-between">
          <div
            className="font-medium text-gray-900  font-sans
        text-base overflow-hidden whitespace-nowrap text-ellipsis sm:max-w-[20ch] md:max-w-[15ch] 2xl:max-w-[20ch]
        "
          >
            {slide?.space_name}
          </div>
          <div
            className="px-1 font-sans
        text-base flex gap-1 items-center justify-between"
          >
            {slide?.ratings ? slide?.ratings : 0}
            <IconStarFilled size={18} color="#fdd663" />
          </div>
        </div>

        <div className="card-meta-datat -ml-2">
          {/* <div
            id="w-node-fcce1b21-3954-7070-54ad-f0ea51f92fbf-3890e283"
            className="location-div"
          >
            <div className="code-embed-4 location-icon-oncard w-embed">
              <IconCalendarWeek size={20} color="gray" />
            </div>
            <div className="card-location feature-label max-h-12 overflow-hidden truncate">
              <span className="event-date">
                {formatDate(slide?.startDate)} - {formatDate(slide?.endDate)}
              </span>
            </div>
          </div> */}
          <div className="date-on-card -ml-2">
            <div className="code-embed-4 date-icon-on-card w-embed">
              <IconMapPin size={20} color="gray" />
            </div>
            <div className="card-location feature-label  overflow-hidden truncate">
              {getTruncatedCity()}
            </div>
          </div>
        </div>

        {/* <div className="card-meta-datat comapny-and-date">
          <div className="property-size property-company">
            <div className="host-dp">
              <img
                loading="lazy"
                src={
                  slide.user_profile?.photo
                    ? `https://s3.ap-south-1.amazonaws.com/high-table-2024/public/photo/members/${slide.user_profile?.photo}`
                    : "https://as2.ftcdn.net/v2/jpg/03/31/69/91/1000_F_331699188_lRpvqxO5QRtwOM05gR50ImaaJgBx68vi.jpg"
                }
                alt=""
                className="host-image-on-card"
              />
            </div>
            <p className="host-name darkgrey">
              {" "}
              {slide?.first_name}
              &nbsp;
              {slide?.last_name}
            </p>
          </div>
        </div> */}
      </div>
    </Link>
  );
};

export default ConcertCard;
