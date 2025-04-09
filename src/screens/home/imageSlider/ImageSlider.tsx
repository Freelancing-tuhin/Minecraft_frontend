import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Autoplay } from "swiper/modules";
import { useNavigate } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react"; // You can use any icon library

interface UserProfile {
  first_name: string;
  last_name: string;
  photo?: string;
}

interface Category {
  name: string;
}

interface SlideItem {
  id: number;
  title: string;
  media: string;
  event_date: string;
  category: Category;
  user_profile: UserProfile;
}

interface ImageSliderHeroProps {
  setIsVisible: (val: boolean) => void;
}

const dummySlideData: SlideItem[] = [
  {
    id: 1,
    title: "Tech Innovators Meetup",
    media:
      "https://c1.wallpaperflare.com/preview/427/5/115/condominium-condo-architecture-apartment.jpg",
    event_date: "01-05-2025 18:30:00",
    category: { name: "Technology" },
    user_profile: {
      first_name: "Alice",
      last_name: "Johnson",
      photo: "",
    },
  },
  {
    id: 2,
    title: "Gourmet Dinner Table",
    media:
      "https://images1.forrent.com/i2/AsAJbm1t9ecrIyxCkvvP0Bw3bfycGE8UT0ANv3TuZzY/117/image.jpg?p=1",
    event_date: "02-05-2025 20:00:00",
    category: { name: "Food" },
    user_profile: {
      first_name: "Bob",
      last_name: "Smith",
      photo: "",
    },
  },
];

const ImageSliderHero: React.FC<ImageSliderHeroProps> = ({ setIsVisible }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef<any>(null);
  const navigate = useNavigate();

  const handleSlideChange = (swiper: any) => {
    setActiveIndex(swiper.realIndex);
  };

  const handleNavigate = (name: string, id: number) => {
    const formattedName = name.replace(/\s+/g, "-");
    navigate(`/details?table=${encodeURIComponent(formattedName)}&id=${id}`);
  };

  const formatDate = (dateString: string): string => {
    const [day, month, year] = dateString.split(" ")[0].split("-");
    const date = new Date(`${year}-${month}-${day}`);
    return date.toLocaleDateString("en-US", {
      day: "numeric",
      month: "short",
    });
  };

  const formatTime = (dateString: string): string => {
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
  };

  return (
    <section className="slider relative">
      <div className="swiper-wrapper relative">
        <Swiper
          onSwiper={(swiper: any) => (swiperRef.current = swiper)}
          navigation={false}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          onSlideChange={handleSlideChange}
          modules={[Navigation, Autoplay]}
          className="rounded-3xl"
        >
          {dummySlideData.map((slide, index) => (
            <SwiperSlide
              key={slide.id}
              onClick={() => handleNavigate(slide.title, slide.id)}
              className={`swiper-slide pointer relative card p-2 ${
                index === activeIndex - 1 ? "gray-overlay" : ""
              }`}
            >
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                  backgroundImage: `url(${slide.media})`,
                }}
              ></div>
              <div className="dark-gradiant-overlay"></div>
              <div className="swiper-slide-content mt-40">
                <div className="category-div">
                  <p className="category">{slide.category.name}</p>
                </div>
                <div className="table-heading-featured">
                  <h1 className="heading">{slide.title}</h1>
                </div>

                <div className="swiper-content-host">
                  <div className="host-dp">
                    <img
                      loading="lazy"
                      src={
                        slide.user_profile.photo
                          ? `${slide.user_profile.photo}`
                          : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4YreOWfDX3kK-QLAbAL4ufCPc84ol2MA8Xg&s"
                      }
                      alt="Host"
                      className="host-image-on-card"
                    />
                  </div>
                  <p className="host-name">
                    {slide.user_profile.first_name}{" "}
                    {slide.user_profile.last_name}
                  </p>
                </div>

                <div className="featured-date-location">
                  <div className="swiper-content-date">
                    <p className="host-name flex flex-col md:flex-row gap-1">
                      <span className="event-date">
                        {formatDate(slide.event_date)}
                      </span>
                      <span className="event-time hidden md:inline">
                        , {formatTime(slide.event_date)}
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom Navigation Buttons */}
        <button
          className="absolute left-2 top-1/2 z-10 -translate-y-1/2 bg-black/40 text-white rounded-full p-2 hover:bg-black"
          onClick={() => swiperRef.current?.slidePrev()}
        >
          <ChevronLeft size={24} />
        </button>
        <button
          className="absolute right-2 top-1/2 z-10 -translate-y-1/2 bg-black/40 text-white rounded-full p-2 hover:bg-black"
          onClick={() => swiperRef.current?.slideNext()}
        >
          <ChevronRight size={24} />
        </button>
      </div>
    </section>
  );
};

export default ImageSliderHero;
