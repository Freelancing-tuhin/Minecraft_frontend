import React, { useEffect, useState } from "react";
import { api } from "../../utils";
import { useLocation } from "react-router-dom";
import Navbar from "../../components/shared/navbar/Navbar";
import ConcertCard from "../../components/shared/card/Card";
import { IconMapPinSearch } from "@tabler/icons-react";

const SearchPage = () => {
  const location = useLocation();
  const [cards, setCards] = useState<any>([]);

  const { data, searchPayload } = location.state || {};

  //   console.log("=====> SearchPage data:", searchPayload);
  const handleSearch = async () => {
    try {
      const response = await api.events.searchEvent({
        address: searchPayload?.address,
        startDate: "2020-1-1",
        endDate: "2029-04-08",
        space_name: searchPayload?.search,
      });
      setCards(response);
      console.log("API Response is:", response);
    } catch (error) {
      console.error("Error fetching search results:", error);
      setCards([]); // Clear cards on error
    }
  };
  useEffect(() => {
    handleSearch();
  }, []);

  return (
    <div>
      <Navbar isStickyTrue={true} />
      <section data-w-id="5f9cc665505a9a8ec46d478c" className="body">
        <section className="category-tab pt-20">
          <div className="text-xl text-gray-800 font-semibold sm:pt-10 flex item-center gap-1 pb-2">
            <IconMapPinSearch />
            Search results for "{searchPayload?.search}"
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
                    {cards.map((card: any, index: any) => (
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

export default SearchPage;
