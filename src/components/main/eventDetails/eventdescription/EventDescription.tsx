// import React from "react";

// const EventDescription = ({ eventDetail }: any) => {
//   return <div>EventDescription</div>;
// };

// export default EventDescription;

import React, { useEffect, useState } from "react";
import "../../../../App.css";

import {
  Link,
  useNavigate,
  useParams,
  useSearchParams,
} from "react-router-dom";

import { formatDateTime } from "../../../../utils/commonFunctions/dateFormater";
import StallList from "../stallList/StallList";
import TicketModal from "../../../shared/ticketModal/TicketModal";
import TicketModalMobile from "../../../shared/ticketModal/TicketModalMobile";
import ReportModal from "../../../shared/reportModal/ReportModal";

const EventDescription = ({
  data,
  setIsModalOpen,
  setLoginModal,
  open,
}: any) => {
  const { id } = useParams<{ id: string }>();
  const tagsArray = data?.tags?.split(",").map((tag: any) => tag.trim());
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(true);
  const [read, setRead] = useState(false);
  const [isModalOpen, setIsModalOpen1] = useState(false);
  const toggleModal = () => {
    setIsModalOpen1(!isModalOpen);
    console.log("======>data", data);
  };

  return (
    <>
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/50 bg-opacity-75 flex items-center justify-center p-4 z-50">
          <div className=" w-full px-5 h-[87vh]  overflow-y-scroll bg-white rounded-lg shadow-xl overflow-hidden">
            <div className="px-6 py-4 bg-gray-50 flex justify-end relative position-relative">
              <button
                onClick={toggleModal}
                className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 transition-colors"
              >
                Close
              </button>
            </div>
            {/* Modal content */}
            <StallList
              data={data?.ticket_availability}
              payments={data?.payment_status}
            />
            {/* Close button */}
          </div>
        </div>
      )}
      <section className="lisiting-site-content">
        <section
          data-w-id="baa49f18-5350-fcd4-0685-c53c0b86a6fd"
          className={`book-now-btn-mob-section ${
            isVisible ? "translate-y-0" : "translate-y-full"
          }`}
        >
          {!isModalOpen && (
            <div className="mobile-book-btn">
              <div
                onClick={toggleModal}
                style={{
                  backgroundColor: "#2196f3",
                  color: "white",
                  padding: "10px 20px",
                  border: "none",
                  borderRadius: "8px",
                  cursor: "pointer",
                  width: "100%",
                  marginTop: "15px",
                  fontSize: "16px",
                  fontWeight: "600",
                  textAlign: "center",
                }}
              >
                Show Tickets
              </div>
            </div>
          )}
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

                    {/* <StallList
                      data={data?.tickets}
                      payments={data?.payment_status}
                    /> */}
                    <TicketModal data={data} />
                  </div>
                  <div className="site_content-divider" />
                  <div className="site_sleep-content">
                    <div className="margin-bottom margin-small">
                      <h2 className="heading-7">Foot Print</h2>
                    </div>
                    <div className="text-weight-bold">
                      {data?.floor_print_image ? (
                        <>
                          <img
                            className="h-56 w-80  object-cover rounded"
                            src={data?.floor_print_image}
                            alt=""
                          />
                        </>
                      ) : (
                        <>Major FOMO, but the data isn’t here. 🫠</>
                      )}

                      <br />
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
                        <ReportModal />
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
