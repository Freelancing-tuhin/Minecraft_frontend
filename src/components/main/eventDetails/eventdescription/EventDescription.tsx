// import React from "react";

// const EventDescription = ({ eventDetail }: any) => {
//   return <div>EventDescription</div>;
// };

// export default EventDescription;

import React, { useEffect, useState } from "react";
import "../../../../App.css";

import { Link, useNavigate, useSearchParams } from "react-router-dom";

import { formatDateTime } from "../../../../utils/commonFunctions/dateFormater";

const EventDescription = ({
  data,
  setIsModalOpen,
  setLoginModal,
  open,
}: any) => {
  const tagsArray = data?.tags?.split(",").map((tag: any) => tag.trim());

  const [isVisible, setIsVisible] = useState(true);
  const [read, setRead] = useState(false);

  return (
    <>
      <section className="lisiting-site-content">
        <section
          data-w-id="baa49f18-5350-fcd4-0685-c53c0b86a6fd"
          className={`book-now-btn-mob-section ${
            isVisible ? "translate-y-0" : "translate-y-full"
          }`}
        >
          <div className="mobile-book-btn">
            <div className="mob-book-btn-sticky">
              <div className="card-flex-block">
                <div className="night-price-text mob-text">
                  <span className="price-text mob-text-price">
                    {/* ₹ {data?.price}{" "} */}
                  </span>
                  / per seat
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="section-home-site_content">
          <div className="page-padding-2">
            <div className="container-medium-2">
              <div className="padding-vertical padding-small">
                <div className="home-site_component">
                  <div
                    data-w-id="055cdd77-ca91-c72e-3006-56f5f4b8a296"
                    className="home-site_flex-items"
                  >
                    <div className="site_left-item">
                      <div className="site_flex-block">
                        <div className="site_flex-left-content">
                          <p className="category-listing-page">
                            {data?.category}
                          </p>
                          <div className="margin-bottom margin-xsmall">
                            <h2 className="heading-7">
                              Table hosted by {data?.organizerId?.full_name}
                            </h2>
                          </div>
                          <div className="margin-bottom">
                            <div
                              className="text-weight-bold"
                              dangerouslySetInnerHTML={{
                                __html: data?.space_description,
                              }}
                            />
                            {read ? (
                              <div
                                className="text-lg mt-3 cursor-pointer"
                                onClick={() => setRead(!read)}
                              >
                                Read less...
                              </div>
                            ) : (
                              <div
                                className="text-lg mt-3 cursor-pointer"
                                onClick={() => setRead(!read)}
                              >
                                Read more...
                              </div>
                            )}
                          </div>
                        </div>
                        <Link
                          to={""}
                          //   to={`/viewprofile?user=${data?.creator_details?.full_name}&id=${data?.creator_details?.id}`}
                          className="review-five-user hide-on-mob"
                        >
                          <img
                            src={
                              data?.organizerId?.profile_pic
                                ? `${data?.organizerId?.profile_pic}`
                                : "https://www.shutterstock.com/image-vector/social-member-vector-icon-person-260nw-1139787308.jpg"
                            }
                            loading="lazy"
                            alt=""
                            className="listing-page-user-dp"
                          />
                        </Link>
                      </div>
                      <div className="site_content-divider" />
                      <div className="site_content-flex-items"></div>
                      {/* 
                      {tagsArray.length > 1 && (
                        <div className="site_content-divider" />
                      )} */}

                      <>
                        {read ? (
                          <>
                            <div className="site_sleep-content">
                              <div className="margin-bottom margin-small">
                                <h2 className="heading-7">Area Details</h2>
                              </div>
                              <div className="text-weight-bold">
                                {data?.location_description ? (
                                  <> {data?.location_description}</>
                                ) : (
                                  <>
                                    "Oops, looks like the data took a coffee
                                    break! ☕ No info here right now."
                                  </>
                                )}

                                <br />
                              </div>
                            </div>
                            <div className="site_content-divider" />
                            <div className="site_content-flex-items"></div>
                            <div className="site_sleep-content mt-8">
                              <div className="margin-bottom margin-small">
                                <h2 className="heading-7">Home Truths</h2>
                              </div>
                              <div className="text-weight-bold">
                                {data?.home_truths ? (
                                  <> {data?.home_truths}</>
                                ) : (
                                  <>
                                    "Oops, looks like the data took a coffee
                                    break! ☕ No info here right now."
                                  </>
                                )}

                                <br />
                              </div>
                            </div>
                            <div className="site_content-divider" />
                            <div className="site_content-flex-items"></div>
                          </>
                        ) : null}

                        <div className="site_sleep-content mt-8">
                          <div className="margin-bottom margin-small">
                            <h2 className="heading-7">Rules</h2>
                          </div>
                          <div className="text-weight-bold">
                            {data?.space_rules ? (
                              <> {data?.space_rules}</>
                            ) : (
                              <>
                                "Oops, looks like the data took a coffee break!
                                ☕ No info here right now."
                              </>
                            )}

                            <br />
                          </div>
                        </div>
                        <div className="site_content-divider" />
                        <div className="site_content-flex-items"></div>
                        <div className="site_sleep-content mt-8">
                          <div className="margin-bottom margin-small">
                            <h2 className="heading-7">Opening Hours</h2>
                          </div>
                          <div className="text-weight-bold">
                            {/* {data?.opening_hours ? (
                              <> {data?.opening_hours}</>
                            ) : (
                              <>
                                "Oops, looks like the data took a coffee break!
                                ☕ No info here right now."
                              </>
                            )} */}

                            <br />
                          </div>
                        </div>
                      </>
                      <div className="site_content-divider" />
                      <div className="site_sleep-content">
                        <div className="margin-bottom margin-small">
                          <h2 className="heading-7">Amenities</h2>
                        </div>
                        <div className="text-weight-bold">
                          {data?.amenities ? (
                            <>{data?.amenities}</>
                          ) : (
                            <>Major FOMO, but the data isn’t here. 🫠</>
                          )}

                          <br />
                        </div>
                      </div>
                    </div>
                    <div
                      id="w-node-_055cdd77-ca91-c72e-3006-56f5f4b8a31c-a79a8c84"
                      className="site_right-item"
                    >
                      <div className="card_content-block">
                        <div className="card-flex-block">
                          <div className="night-price-text">
                            {/* <span className="price-text">₹ {data?.price} </span> */}
                            / per seat
                          </div>
                        </div>
                        <div className="time-flex-block">
                          <div className="time-flex-item">
                            <div className="code-embed-date-icon w-embed">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                x="0px"
                                y="0px"
                                width={20}
                                height={20}
                                viewBox="0,0,256,256"
                              >
                                <g
                                  fill="currentColor"
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
                            <div className="time-text">
                              <span className="text-span-2">
                                Seats Available
                              </span>
                              <br />
                            </div>
                          </div>
                          <div className="time-flex-item2">
                            <div className="embed-code-location w-embed">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                x="0px"
                                y="0px"
                                width={20}
                                height={20}
                                viewBox="0,0,256,256"
                              >
                                <g
                                  fill="currentColor"
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
                            <div className="time-text">
                              <span className="text-span-2">Location</span>
                              <br />
                              {data?.city ? <>{data?.city}</> : <>Bangalore</>}
                            </div>
                          </div>
                        </div>
                        <div className="card-dropdown-toggle">
                          <div className="dropdown-text">
                            <span className="text-span-2">Guests</span>
                            <br />1 guest
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="site_content-divider" />
                  <div
                    data-w-id="055cdd77-ca91-c72e-3006-56f5f4b8a3ec"
                    className="site_map-content"
                  >
                    <div className="margin-bottom margin-small">
                      <h2 className="heading-7">Where you’ll be</h2>
                    </div>
                    <div className="map-block">
                      <div className="map-embed w-embed w-iframe">
                        <div className="mapouter">
                          <div className="gmap_canvas">
                            <iframe
                              className="gmap_iframe"
                              width="100%"
                              frameBorder={0}
                              scrolling="no"
                              marginHeight={0}
                              marginWidth={0}
                              src={`https://maps.google.com/maps?width=772&height=440&hl=en&q=${data?.location?.lat},${data?.location?.lng}&t=&z=12&ie=UTF8&iwloc=B&output=embed`}
                            />

                            <a href="https://kokagames.com/">Koka Games</a>
                          </div>
                          <style
                            dangerouslySetInnerHTML={{
                              __html:
                                "\n                          .mapouter {\n                            position: relative;\n                            text-align: right;\n                            width: 100%;\n                            height: 440px;\n                          }\n                          .gmap_canvas {\n                            overflow: hidden;\n                            background: none !important;\n                            width: 100%;\n                            height: 440px;\n                          }\n                          .gmap_iframe {\n                            height: 440px !important;\n                          }\n                        ",
                            }}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="map_content-wrap">
                      <div className="margin-top margin-medium">
                        {/* <h6 className="heading-6">{data?.address}</h6> */}
                      </div>
                    </div>
                  </div>
                  <div className="site_content-divider" />
                  <div
                    data-w-id="055cdd77-ca91-c72e-3006-56f5f4b8a3ff"
                    className="site_review-details"
                  >
                    <div className="review_details-left-item">
                      <div className="review_details-flex-item">
                        <Link
                          to={""}
                          //   to={`/viewprofile?user=${data?.organizerId?.full_name}&id=${data?.organizerId?._id}`}
                          className="review-five-user"
                        >
                          <img
                            src={
                              data?.organizerId?.profile_pic
                                ? `${data?.organizerId?.profile_pic}`
                                : "../../static/media/user-icon-1.62f73db9586c0e3b573a.svg"
                            }
                            loading="lazy"
                            alt=""
                            className="listing-page-user-dp"
                          />
                        </Link>
                        <div className="review_details-content">
                          <div className="margin-bottom margin-xxsmall">
                            <h6 className="heading-6">
                              Hosted by {data?.organizerId?.full_name}
                            </h6>
                          </div>
                          <div className="margin-bottom">
                            <div className="date-text">
                              {data?.organizerId.email && (
                                <>{data?.organizerId.email} </>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="margin-bottom margin-small view-profile-btn">
                        <Link
                          to={`/viewprofile?user=${data?.creator_details?.full_name}&id=${data?.creator_details?.id}`}
                          className="button-3 w-button"
                        >
                          View Profile
                        </Link>
                      </div>
                    </div>
                    <div id="w-node-_055cdd77-ca91-c72e-3006-56f5f4b8a42f-a79a8c84">
                      <h6 className="heading-6">Support</h6>
                      <div className="protection-div-flex magrin-top-1rem">
                        <div className="text-block-12">
                          To protect your payment, never transfer
                          <br />
                          money or communicate outside of the
                          <br />
                          HighTable website or app.
                        </div>
                      </div>
                      <div className="report-div magrin-top-1rem">
                        {/* <ReportTable tableId={data?.id} /> */}
                        <a href="#" className="report-btn w-button">
                          Report User
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="site_content-divider" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <OpenEmail
        showModal={showModal}
        setShowModal={setShowModal}
        setEmail={setEmail}
        email={email}
        age={age}
        setAge={setAge}
        gender={gender}
        setGender={setGender}
      /> */}
    </>
  );
};

export default EventDescription;
