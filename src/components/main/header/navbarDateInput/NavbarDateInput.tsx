import React, { useState, useRef, useEffect } from "react";

const NavbarDateInput = ({
  startDate,
  setStartDate,
  endDate,
  setEndDate,
}: any) => {
  const [isDatePickerOpen, setIsDatePickerOpen] = useState(false);
  const [hoverDate, setHoverDate] = useState(null);

  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

  const datePickerRef = useRef<any>(null);

  const today: any = new Date();

  const daysInMonth = (month: any, year: any) =>
    new Date(year, month + 1, 0).getDate();

  const generateDays = () =>
    Array.from({ length: daysInMonth(currentMonth, currentYear) }, (_, i) => {
      return new Date(currentYear, currentMonth, i + 1);
    });

  const handleDateClick = (date: any) => {
    const todayStartOfDay = new Date(
      today.getFullYear(),
      today.getMonth(),
      today.getDate()
    );
    if (date < todayStartOfDay) return;
    if (!startDate || (startDate && endDate)) {
      setStartDate(date);
      setEndDate(null);
    } else if (startDate && !endDate && date > startDate) {
      setEndDate(date);
      setIsDatePickerOpen(false);
    }
  };

  const isSelected = (date: any) =>
    (startDate && date.toDateString() === startDate.toDateString()) ||
    (endDate && date.toDateString() === endDate.toDateString()) ||
    (startDate && endDate && date >= startDate && date < endDate);

  const isHovered = (date: any) =>
    startDate && !endDate && hoverDate && date > startDate && date <= hoverDate;

  const handlePrevMonth = (e: any) => {
    e.preventDefault();
    if (currentMonth === 0) {
      setCurrentMonth(11);
      setCurrentYear(currentYear - 1);
    } else {
      setCurrentMonth(currentMonth - 1);
    }
  };

  const handleNextMonth = (e: any) => {
    e.preventDefault();
    if (currentMonth === 11) {
      setCurrentMonth(0);
      setCurrentYear(currentYear + 1);
    } else {
      setCurrentMonth(currentMonth + 1);
    }
  };

  const handleClickOutside = (event: any) => {
    if (
      datePickerRef.current &&
      !datePickerRef.current.contains(event.target)
    ) {
      setIsDatePickerOpen(false);
    }
  };

  useEffect(() => {
    if (isDatePickerOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isDatePickerOpen]);

  return (
    <div className="relative" ref={datePickerRef}>
      {/* Input Field */}
      <div
        onClick={() => setIsDatePickerOpen(!isDatePickerOpen)}
        className="navbar_form--checkin when"
      >
        <label htmlFor="date-2" className="field-label-3">
          When
        </label>
        <input
          className="navbar_form--textfield daterange w-input"
          autoComplete="off"
          maxLength={256}
          name="date-2"
          data-name="Date 2"
          placeholder="Search dates"
          type="text"
          id="date-2"
          value={
            startDate && endDate
              ? `${startDate.toLocaleDateString()} - ${endDate.toLocaleDateString()}`
              : ""
          }
        />
        <div className="placeholder">Add dates</div>
      </div>

      {isDatePickerOpen && (
        <div className="absolute top-16 mt-2 left-0 w-80 p-4 bg-white shadow-lg rounded-3xl z-50">
          {/* Header for Month and Year Navigation */}
          <div className="flex items-center justify-between mb-4">
            <button
              onClick={handlePrevMonth}
              className="text-gray-600 hover:text-black"
            >
              <svg
                fill="#999999"
                height="18px"
                width="18px"
                version="1.1"
                id="Layer_1"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                viewBox="0 0 330.002 330.002"
                xmlSpace="preserve"
                transform="rotate(180)"
              >
                <g id="SVGRepo_bgCarrier" strokeWidth={0} />
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <path
                    id="XMLID_226_"
                    d="M233.252,155.997L120.752,6.001c-4.972-6.628-14.372-7.97-21-3c-6.628,4.971-7.971,14.373-3,21 l105.75,140.997L96.752,306.001c-4.971,6.627-3.627,16.03,3,21c2.698,2.024,5.856,3.001,8.988,3.001 c4.561,0,9.065-2.072,12.012-6.001l112.5-150.004C237.252,168.664,237.252,161.33,233.252,155.997z"
                  />{" "}
                </g>
              </svg>
            </button>
            <span className="text-gray-800 text-base">
              {new Date(currentYear, currentMonth).toLocaleString("default", {
                month: "long",
                year: "numeric",
              })}
            </span>
            <button
              onClick={handleNextMonth}
              className="text-gray-600 hover:text-black"
            >
              <svg
                fill="#999999"
                height="18px"
                width="18px"
                version="1.1"
                id="Layer_1"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                viewBox="0 0 330.002 330.002"
                xmlSpace="preserve"
              >
                <g id="SVGRepo_bgCarrier" strokeWidth={0} />
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <path
                    id="XMLID_226_"
                    d="M233.252,155.997L120.752,6.001c-4.972-6.628-14.372-7.97-21-3c-6.628,4.971-7.971,14.373-3,21 l105.75,140.997L96.752,306.001c-4.971,6.627-3.627,16.03,3,21c2.698,2.024,5.856,3.001,8.988,3.001 c4.561,0,9.065-2.072,12.012-6.001l112.5-150.004C237.252,168.664,237.252,161.33,233.252,155.997z"
                  />{" "}
                </g>
              </svg>
            </button>
          </div>

          {/* Days of the Week */}
          <div className="grid grid-cols-7 gap-2 text-center">
            {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
              <div key={day} className="text-sm font-bold text-gray-500">
                {day}
              </div>
            ))}
            {/* Dates */}
            {generateDays().map((date: any) => {
              const isToday = date.toDateString() === today.toDateString();
              const isDisabled = date < today - 2;
              return (
                <div
                  key={date.toDateString()}
                  onClick={() => handleDateClick(date)}
                  onMouseEnter={() => !isDisabled && setHoverDate(date)}
                  className={`w-10 h-10 flex items-center justify-center text-sm rounded-full cursor-pointer ${
                    isToday
                      ? "bg-yellow-400 text-white "
                      : isDisabled
                      ? "bg-gray-100 text-gray-500 cursor-not-allowed"
                      : isSelected(date)
                      ? "bg-[#e2b760] text-white"
                      : isHovered(date)
                      ? "bg-[#bdbdbd8c] text-gray-700"
                      : "text-gray-700 hover:bg-[#e2b7608c]"
                  }`}
                >
                  {date.getDate()}
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default NavbarDateInput;
