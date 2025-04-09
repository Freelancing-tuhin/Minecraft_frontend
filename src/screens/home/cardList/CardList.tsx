import React from "react";
import ConcertCard from "../../../components/shared/card/Card";

const dummySlides = [
  {
    id: "1",
    city: "Mumbai",
    category: { name: "Music" },
    bookmarks: 5,
    event_date: "08-04-2025 18:30:00",
    price: 2000,
    description: "A live concert featuring popular artists.",
    first_name: "John",
    last_name: "Doe",
    title: "Mumbai Melodies: Live",
    media:
      "https://images.unsplash.com/photo-1494526585095-c41746248156?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "2",
    city: "Delhi",
    category: { name: "Dance" },
    bookmarks: 3,
    event_date: "12-04-2025 20:00:00",
    price: 2000,
    description: "A live concert featuring popular artists.",
    first_name: "John",
    last_name: "Doe",
    title: "Delhi Dance-Off: ",
    media:
      "https://images.unsplash.com/photo-1592595896616-c37162298647?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "3",
    city: "Kolkata",
    category: { name: "Standup" },
    bookmarks: 8,
    event_date: "15-04-2025 19:00:00",
    price: 2000,
    description: "A live concert featuring popular artists.",
    first_name: "John",
    last_name: "Doe",
    title: "Kolkata LOL Nights",
    media:
      "https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "4",
    city: "Bangalore",
    category: { name: "Drama" },
    bookmarks: 10,
    event_date: "20-04-2025 17:30:00",
    title: "Bangalore Broadway: A Dramatic Evening",
    media:
      "https://images.unsplash.com/photo-1560185007-cde436f6a4d0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "1",
    city: "Mumbai",
    category: { name: "Music" },
    bookmarks: 5,
    event_date: "08-04-2025 18:30:00",
    price: 2000,
    description: "A live concert featuring popular artists.",
    first_name: "John",
    last_name: "Doe",
    title: "Mumbai Melodies: Live",
    media:
      "https://a0.muscache.com/im/pictures/miso/Hosting-929944720214995582/original/33141d7c-1228-42a3-878d-8ab7fe92e1df.jpeg?im_w=720",
  },
  {
    id: "2",
    city: "Delhi",
    category: { name: "Dance" },
    bookmarks: 3,
    event_date: "12-04-2025 20:00:00",
    price: 2000,
    description: "A live concert featuring popular artists.",
    first_name: "John",
    last_name: "Doe",
    title: "Delhi Dance-Off: ",
    media:
      "https://a0.muscache.com/im/pictures/hosting/Hosting-1084113685930944761/original/fc53f12d-3c2f-4f53-a818-e9c500efc4c7.jpeg?im_w=720",
  },
  {
    id: "3",
    city: "Kolkata",
    category: { name: "Standup" },
    bookmarks: 8,
    event_date: "15-04-2025 19:00:00",
    price: 2000,
    description: "A live concert featuring popular artists.",
    first_name: "John",
    last_name: "Doe",
    title: "Kolkata LOL Nights",
    media:
      "https://a0.muscache.com/im/pictures/hosting/Hosting-1186078790179881631/original/208b77de-6921-4203-9117-70f5ea226362.jpeg?im_w=720",
  },
  {
    id: "4",
    city: "Bangalore",
    category: { name: "Drama" },
    bookmarks: 10,
    event_date: "20-04-2025 17:30:00",
    title: "Bangalore Broadway: A Dramatic Evening",
    media:
      "https://a0.muscache.com/im/pictures/miso/Hosting-1288251752907837914/original/6bd5d042-2d0e-4791-b438-54cff00e5a16.jpeg?im_w=720",
  },
  {
    id: "1",
    city: "Mumbai",
    category: { name: "Music" },
    bookmarks: 5,
    event_date: "08-04-2025 18:30:00",
    price: 2000,
    description: "A live concert featuring popular artists.",
    first_name: "John",
    last_name: "Doe",
    title: "Mumbai Melodies: Live",
    media:
      "https://images.unsplash.com/photo-1494526585095-c41746248156?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "2",
    city: "Delhi",
    category: { name: "Dance" },
    bookmarks: 3,
    event_date: "12-04-2025 20:00:00",
    price: 2000,
    description: "A live concert featuring popular artists.",
    first_name: "John",
    last_name: "Doe",
    title: "Delhi Dance-Off: ",
    media:
      "https://images.unsplash.com/photo-1592595896616-c37162298647?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "3",
    city: "Kolkata",
    category: { name: "Standup" },
    bookmarks: 8,
    event_date: "15-04-2025 19:00:00",
    price: 2000,
    description: "A live concert featuring popular artists.",
    first_name: "John",
    last_name: "Doe",
    title: "Kolkata LOL Nights",
    media:
      "https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "4",
    city: "Bangalore",
    category: { name: "Drama" },
    bookmarks: 10,
    event_date: "20-04-2025 17:30:00",
    title: "Bangalore Broadway: A Dramatic Evening",
    media:
      "https://images.unsplash.com/photo-1560185007-cde436f6a4d0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

const CardList: React.FC = () => {
  return (
    <>
      <section className="category-tab">
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
                  {dummySlides.map((card, index) => (
                    <ConcertCard slide={card} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CardList;
