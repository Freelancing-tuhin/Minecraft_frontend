/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from "react";
import "../../../../App.css";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";
import { formatDateTime } from "../../../../utils/commonFunctions/dateFormater";
import {
  IconCalendarWeek,
  IconHeart,
  IconHeartFilled,
  IconMapPin,
} from "@tabler/icons-react";
import { useBookmarks } from "../../../../contexts/bookMarkContext/BookMarkContext";

const EventBanner = ({ data, isShareModalOpen, setIsShareModalOpen }: any) => {
  const accessToken = localStorage.getItem("@user");
  const { isBookmarked, toggleBookmark } = useBookmarks();

  return (
    <>
      <section className="header-image">
        <figure className="card listing-details-page">
          <div className="swiper-card-div">
            <div className="card-top-back-share">
              <a href="/" className="back-icon-div w-inline-block">
                <div className="back-arrow-embed-code w-embed">
                  <svg
                    width="100%"
                    height="auto"
                    viewBox="0 0 32 32"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <defs>
                      <style
                        dangerouslySetInnerHTML={{
                          __html:
                            "\n                      .cls-back1 {\n                        fill: currentColor;\n                      }\n                    ",
                        }}
                      />
                    </defs>
                    <g data-name="arrow left" id="arrow_left">
                      <path
                        className="cls-back1"
                        d="M22,29.73a1,1,0,0,1-.71-.29L9.93,18.12a3,3,0,0,1,0-4.24L21.24,2.56A1,1,0,1,1,22.66,4L11.34,15.29a1,1,0,0,0,0,1.42L22.66,28a1,1,0,0,1,0,1.42A1,1,0,0,1,22,29.73Z"
                      />
                    </g>
                  </svg>
                </div>
              </a>
              <div className="share-wish-wrapper">
                <a href="#" className="share-wishlist-div w-inline-block">
                  {/* {localBookmarkCount > 0 && (
                    <div className="whislist-count-mobilecard">
                      {localBookmarkCount}
                    </div>
                  )} */}
                  {/* <div className="wishlist-card-icon w-embed">
                    <BookMArkAction
                      setIsVisible={setIsVisible}
                      tableId={data.id}
                      fetchData={() => {
                        fetchData(); // Optional: If other parts of the app need updates
                        setLocalBookmarkCount((prev) => prev + 1); // Update local count
                      }}
                      userId={data?.creator_details.id}
                      setLocalBookmarkCount={setLocalBookmarkCount}
                      toggleBookmark={toggleBookmark}
                    />
                  </div> */}
                </a>
                <a
                  onClick={() => setIsShareModalOpen(true)}
                  className="share-wishlist-div w-inline-block"
                >
                  <div className="share-icon-on-card w-embed">
                    {/*?xml version="1.0" encoding="UTF-8"?*/}
                    <svg
                      width="100%"
                      height="100%"
                      viewBox="0 0 48 48"
                      version="1.1"
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                    >
                      <g
                        id="🔍-Product-Icons"
                        stroke="none"
                        strokeWidth={1}
                        fill="none"
                        fillRule="evenodd"
                      >
                        <g fill="currentColor" fillRule="nonzero">
                          <path
                            d="M37.75,20.25 C38.6681734,20.25 39.4211923,20.9571103 39.4941988,21.8564728 L39.5,22 L39.5,36.25 C39.5,39.3517853 37.0439828,41.879937 33.9705557,41.9958479 L33.75,42 L14.25,42 C11.1482147,42 8.62006299,39.5439828 8.50415208,36.4705557 L8.5,36.25 L8.5,22 C8.5,21.0335017 9.28350169,20.25 10.25,20.25 C11.1681734,20.25 11.9211923,20.9571103 11.9941988,21.8564728 L12,22 L12,36.25 C12,37.440864 12.9251616,38.4156449 14.0959512,38.4948092 L14.25,38.5 L33.75,38.5 C34.940864,38.5 35.9156449,37.5748384 35.9948092,36.4040488 L36,36.25 L36,22 C36,21.0335017 36.7835017,20.25 37.75,20.25 Z M23.4989075,6.26787884 L23.6477793,6.25297693 L23.6477793,6.25297693 L23.8225053,6.25140103 L23.8225053,6.25140103 L23.9770074,6.26441014 L23.9770074,6.26441014 L24.1549097,6.29667263 L24.1549097,6.29667263 L24.223898,6.31492315 L24.223898,6.31492315 C24.4192207,6.36884271 24.6069182,6.4577966 24.7773762,6.58126437 L24.8968901,6.67628678 L24.8968901,6.67628678 L24.989825,6.76256313 L32.7679996,14.5407377 C33.4514171,15.2241552 33.4514171,16.3321939 32.7679996,17.0156115 C32.1247831,17.6588279 31.1054316,17.6966642 30.4179639,17.1291203 L30.2931259,17.0156115 L25.5,12.222 L25.5,31.5 C25.5,32.4181734 24.7928897,33.1711923 23.8935272,33.2441988 L23.75,33.25 C22.8318266,33.25 22.0788077,32.5428897 22.0058012,31.6435272 L22,31.5 L22,12.226 L17.2116504,17.0156115 C16.5684339,17.6588279 15.5490824,17.6966642 14.8616148,17.1291203 L14.7367767,17.0156115 C14.0935602,16.372395 14.055724,15.3530435 14.6232679,14.6655758 L14.7367767,14.5407377 L22.488804,6.78678454 C22.5446792,6.72871358 22.6045271,6.67449255 22.6679103,6.62455868 L22.7812362,6.54379243 L22.7812362,6.54379243 C22.8189499,6.51724 22.858413,6.49312256 22.8988638,6.47056335 L22.9176605,6.46138558 C23.0947495,6.36422067 23.2909216,6.29776289 23.4989075,6.26787884 Z"
                            id="🎨-Color"
                          />
                        </g>
                      </g>
                    </svg>
                  </div>
                </a>
              </div>
            </div>
            <div className="swiper-slide-content">
              <div className="category-div">
                <p className="category">{data?.category}</p>
              </div>
              <div className="table-heading-featured">
                <h1 className="heading">{data?.space_name}</h1>
              </div>
              <div className="swiper-content-host">
                <div className="host-dp">
                  <img
                    loading="lazy"
                    src={
                      data?.organizerId?.profile_pic
                        ? data?.organizerId?.profile_pic
                        : "https://www.shutterstock.com/image-vector/social-member-vector-icon-person-260nw-1139787308.jpg"
                    }
                    alt="Card preview"
                    className="host-image-on-card"
                  />
                </div>
                <p className="host-name">{data?.organizerId?.full_name}</p>
              </div>
              <div className="featured-date-location featfelx">
                <div className="swiper-content-date">
                  <div className="location-icon">
                    <div className="code-embed w-embed">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        x="0px"
                        y="0px"
                        width={20}
                        height={20}
                        viewBox="0,0,256,256"
                      >
                        <g
                          fill="#ffffff"
                          fillRule="nonzero"
                          stroke="none"
                          strokeWidth={1}
                          strokeLinecap="butt"
                          strokeLinejoin="miter"
                          strokeMiterlimit={10}
                          strokeDasharray=""
                          strokeDashoffset={0}
                          fontFamily="none"
                          fontWeight="none"
                          fontSize="none"
                          textAnchor="none"
                          style={{ mixBlendMode: "normal" }}
                        >
                          <g transform="scale(5.33333,5.33333)">
                            <path d="M42,14v-1.5c0,-3.584 -2.916,-6.5 -6.5,-6.5h-23c-3.584,0 -6.5,2.916 -6.5,6.5v1.5zM6,17v18.5c0,3.584 2.916,6.5 6.5,6.5h23c3.584,0 6.5,-2.916 6.5,-6.5v-18.5zM15.5,36c-1.381,0 -2.5,-1.119 -2.5,-2.5c0,-1.381 1.119,-2.5 2.5,-2.5c1.381,0 2.5,1.119 2.5,2.5c0,1.381 -1.119,2.5 -2.5,2.5zM15.5,27c-1.381,0 -2.5,-1.119 -2.5,-2.5c0,-1.381 1.119,-2.5 2.5,-2.5c1.381,0 2.5,1.119 2.5,2.5c0,1.381 -1.119,2.5 -2.5,2.5zM24,36c-1.381,0 -2.5,-1.119 -2.5,-2.5c0,-1.381 1.119,-2.5 2.5,-2.5c1.381,0 2.5,1.119 2.5,2.5c0,1.381 -1.119,2.5 -2.5,2.5zM24,27c-1.381,0 -2.5,-1.119 -2.5,-2.5c0,-1.381 1.119,-2.5 2.5,-2.5c1.381,0 2.5,1.119 2.5,2.5c0,1.381 -1.119,2.5 -2.5,2.5zM32.5,27c-1.381,0 -2.5,-1.119 -2.5,-2.5c0,-1.381 1.119,-2.5 2.5,-2.5c1.381,0 2.5,1.119 2.5,2.5c0,1.381 -1.119,2.5 -2.5,2.5z" />
                          </g>
                        </g>
                      </svg>
                    </div>
                  </div>
                  <p className="host-name">
                    {formatDateTime(data?.startDate)} -
                    {formatDateTime(data?.endDate)}
                    {}
                  </p>
                </div>
                <div className="swiper-content-date">
                  <div className="date-icon">
                    <div className="code-embed w-embed">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        x="0px"
                        y="0px"
                        width={20}
                        height={20}
                        viewBox="0,0,256,256"
                      >
                        <g
                          fill="#ffffff"
                          fillRule="nonzero"
                          stroke="none"
                          strokeWidth={1}
                          strokeLinecap="butt"
                          strokeLinejoin="miter"
                          strokeMiterlimit={10}
                          strokeDasharray=""
                          strokeDashoffset={0}
                          fontFamily="none"
                          fontWeight="none"
                          fontSize="none"
                          textAnchor="none"
                          style={{ mixBlendMode: "normal" }}
                        >
                          <g transform="scale(5.33333,5.33333)">
                            <path d="M24,4c-9.374,0 -17,7.626 -17,17c0,4.036 1.449,7.953 4.093,11.048c0.302,0.343 7.427,8.439 9.807,10.708c0.869,0.829 1.984,1.244 3.1,1.244c1.116,0 2.231,-0.415 3.101,-1.244c2.767,-2.639 9.524,-10.385 9.82,-10.725c2.63,-3.078 4.079,-6.995 4.079,-11.031c0,-9.374 -7.626,-17 -17,-17zM24,26c-2.761,0 -5,-2.239 -5,-5c0,-2.761 2.239,-5 5,-5c2.761,0 5,2.239 5,5c0,2.761 -2.239,5 -5,5z" />
                          </g>
                        </g>
                      </svg>
                    </div>
                  </div>
                  <p className="host-name">
                    {data?.location?.address ? (
                      <>{data?.location?.address}</>
                    ) : (
                      <>Bangalore</>
                    )}
                  </p>
                </div>
              </div>
            </div>
            <div className="dark-gradiant-overlay" />
            <img
              sizes="(max-width: 479px) 92vw, (max-width: 767px) 95vw, (max-width: 991px) 94vw, 100vw"
              alt="Hightable-table-hosted"
              src={data?.banner_Image || ""}
              loading="lazy"
              className="card__bg"
            />
          </div>
        </figure>
        <div className="section-home-header">
          <div className="page-padding">
            <div className="container-medium">
              <div className="padding-vertical">
                <div
                  data-w-id="817f4cfa-d017-709f-9415-15299ace61b7"
                  className="home-header_component"
                >
                  <div className="header-content">
                    <div className="margin-bottom margin-small">
                      <h1 className="heading-2">{data?.space_name}</h1>
                    </div>
                    <div className="header-content_grid">
                      <div
                        id="w-node-_817f4cfa-d017-709f-9415-15299ace61bd-a79a8c84"
                        className="header_grid-left-content"
                      >
                        <div className="review-block">
                          <div className="code-embed-date-icon w-embed">
                            <IconCalendarWeek size={20} color="gray" />
                          </div>
                          <p className="location-name-on-listing">
                            {formatDateTime(data?.startDate)} -
                            {formatDateTime(data?.endDate)}
                          </p>
                        </div>

                        <div className="superhost-block ml-10">
                          <div className="embed-code-location w-embed">
                            <IconMapPin size={20} color="gray" />
                          </div>
                          <p className="location-name-on-listing">
                            {data?.location?.address ? (
                              <>{data?.location?.address}</>
                            ) : (
                              <>Bangalore,India</>
                            )}
                          </p>
                        </div>
                      </div>
                      <div
                        id="w-node-_817f4cfa-d017-709f-9415-15299ace61cf-a79a8c84"
                        className="header_grid-right-content"
                      >
                        <div className="share-save_block">
                          <a
                            onClick={() => setIsShareModalOpen(true)}
                            className="share-link_block w-inline-block"
                          >
                            <div className="embed-code-share w-embed">
                              {/*?xml version="1.0" encoding="UTF-8"?*/}
                              <svg
                                width={20}
                                height={20}
                                viewBox="0 0 48 48"
                                version="1.1"
                                xmlns="http://www.w3.org/2000/svg"
                                xmlnsXlink="http://www.w3.org/1999/xlink"
                              >
                                <g
                                  id="🔍-Product-Icons"
                                  stroke="none"
                                  strokeWidth={1}
                                  fill="none"
                                  fillRule="evenodd"
                                >
                                  <g fill="currentColor" fillRule="nonzero">
                                    <path
                                      d="M37.75,20.25 C38.6681734,20.25 39.4211923,20.9571103 39.4941988,21.8564728 L39.5,22 L39.5,36.25 C39.5,39.3517853 37.0439828,41.879937 33.9705557,41.9958479 L33.75,42 L14.25,42 C11.1482147,42 8.62006299,39.5439828 8.50415208,36.4705557 L8.5,36.25 L8.5,22 C8.5,21.0335017 9.28350169,20.25 10.25,20.25 C11.1681734,20.25 11.9211923,20.9571103 11.9941988,21.8564728 L12,22 L12,36.25 C12,37.440864 12.9251616,38.4156449 14.0959512,38.4948092 L14.25,38.5 L33.75,38.5 C34.940864,38.5 35.9156449,37.5748384 35.9948092,36.4040488 L36,36.25 L36,22 C36,21.0335017 36.7835017,20.25 37.75,20.25 Z M23.4989075,6.26787884 L23.6477793,6.25297693 L23.6477793,6.25297693 L23.8225053,6.25140103 L23.8225053,6.25140103 L23.9770074,6.26441014 L23.9770074,6.26441014 L24.1549097,6.29667263 L24.1549097,6.29667263 L24.223898,6.31492315 L24.223898,6.31492315 C24.4192207,6.36884271 24.6069182,6.4577966 24.7773762,6.58126437 L24.8968901,6.67628678 L24.8968901,6.67628678 L24.989825,6.76256313 L32.7679996,14.5407377 C33.4514171,15.2241552 33.4514171,16.3321939 32.7679996,17.0156115 C32.1247831,17.6588279 31.1054316,17.6966642 30.4179639,17.1291203 L30.2931259,17.0156115 L25.5,12.222 L25.5,31.5 C25.5,32.4181734 24.7928897,33.1711923 23.8935272,33.2441988 L23.75,33.25 C22.8318266,33.25 22.0788077,32.5428897 22.0058012,31.6435272 L22,31.5 L22,12.226 L17.2116504,17.0156115 C16.5684339,17.6588279 15.5490824,17.6966642 14.8616148,17.1291203 L14.7367767,17.0156115 C14.0935602,16.372395 14.055724,15.3530435 14.6232679,14.6655758 L14.7367767,14.5407377 L22.488804,6.78678454 C22.5446792,6.72871358 22.6045271,6.67449255 22.6679103,6.62455868 L22.7812362,6.54379243 L22.7812362,6.54379243 C22.8189499,6.51724 22.858413,6.49312256 22.8988638,6.47056335 L22.9176605,6.46138558 C23.0947495,6.36422067 23.2909216,6.29776289 23.4989075,6.26787884 Z"
                                      id="🎨-Color"
                                    />
                                  </g>
                                </g>
                              </svg>
                            </div>
                            <div className="share-text">Share</div>
                          </a>

                          <a
                            href="#"
                            className="save-link_block w-inline-block"
                          >
                            <button
                              onClick={() => {
                                console.log(
                                  "=========>bookmark added",
                                  data?._id
                                );
                                toggleBookmark(data);
                              }}
                            >
                              {isBookmarked(data?._id) ? (
                                // eslint-disable-next-line react/jsx-no-undef
                                <div className="flex items-center gap-1">
                                  <IconHeartFilled className="text-yellow-500" />{" "}
                                  Added to Wishlist
                                </div>
                              ) : (
                                // eslint-disable-next-line react/jsx-no-undef
                                <div className="flex items-center gap-1">
                                  <IconHeart /> Add to Wishlist
                                </div>
                              )}
                            </button>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="home-header_grid">
                    <div
                      id="w-node-_817f4cfa-d017-709f-9415-15299ace61da-a79a8c84"
                      className="header-image-block"
                    >
                      <img
                        sizes="(max-width: 991px) 100vw, (max-width: 1279px) 91vw, (max-width: 1439px) 92vw, (max-width: 1919px) 94vw, 97vw"
                        alt=""
                        src={data?.banner_Image}
                        loading="lazy"
                        className="header-image-2 placeholderimg"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default EventBanner;
