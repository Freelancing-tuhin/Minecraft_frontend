import React from "react";
import { useBookmarks } from "../../contexts/bookMarkContext/BookMarkContext";
import Navbar from "../../components/shared/navbar/Navbar";
import ConcertCard from "../../components/shared/card/Card";

const Wishlist = () => {
  const { isBookmarked, bookmarkedSpaces } = useBookmarks();
  console.log("======>bookmarks", bookmarkedSpaces);

  return (
    <div>
      <Navbar isStickyTrue={true} />
      <section data-w-id="5f9cc665505a9a8ec46d478c" className="body">
        <section className="category-tab pt-20">
          <div className="text-xl text-gray-800 font-semibold sm:pt-10 flex item-center gap-1 pb-2">
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
                strokeWidth="2"
                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
              />
            </svg>
            My Wishlists
          </div>
          <div className="sm:w-[50%] text-gray-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, sit.
            Ipsum eaque quis velit soluta cupiditate, itaque placeat enim
            architecto ipsam?
          </div>
          <div
            data-current="Tab 1"
            data-easing="ease-in-out"
            data-duration-in="300"
            data-duration-out="300"
            className="tabs-2 w-tabs"
          >
            <div
              data-aos="fade-up"
              data-aos-duration="1000"
              className="tabs-content-wrapper w-tab-content"
            >
              <div
                data-w-tab="Tab 1"
                className="tab-content-item w-tab-pane w--tab-active"
              >
                <div className="tab-content">
                  <div className="w-layout-grid table-category-grid ">
                    {bookmarkedSpaces.map((card, index) => (
                      <ConcertCard slide={card} />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>
    </div>
  );
};

export default Wishlist;
