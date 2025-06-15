import React from "react";
import { Calendar, Ticket, BadgeCheck, Hash } from "lucide-react";
import { formatDateTime } from "../../../utils/commonFunctions/dateFormater";
import { IconPrinter, IconStar, IconX } from "@tabler/icons-react";
import RatingsModal from "../ratingModal/RatingsModal";

const BookingCard = ({ event, data }: any) => {
  const isPaid = data?.paymentStatus === "Completed";

  return (
    <div
      className="bg-white border border-gray-200 shadow-md rounded-xl p-3 flex items-center 
    justify-between text-sm max-w-2/3 hover:shadow-lg transition-all mb-4"
    >
      {/* Left - Event Info */}
      <div className="flex items-start gap-3 flex-1">
        <Ticket className="text-indigo-600 w-5 h-5 mt-0.5" />
        <div className="space-y-1">
          <div className="font-semibold text-gray-800 flex items-center gap-3 mb-2">
            {event?.space_name || "Event"}
            <div className="flex items-center text-gray-500 text-xs">
              <BadgeCheck
                className={`w-4 h-4 mr-1 ${
                  isPaid ? "text-green-500" : "text-yellow-500"
                }`}
              />
              {isPaid ? "Paid" : "Pending"}
            </div>
            <div className="flex items-center gap-1 px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full text-xs font-medium cursor-pointer hover:bg-indigo-200 transition">
              {/* <IconPrinter className="w-4 h-4" /> */}
              Booking {data?.booking_status}
            </div>
          </div>
          <div className="text-xs text-gray-500">
            Order: {data?.orderId || "N/A"}
          </div>
          <div className="text-xs text-gray-500">
            Tickets: {data?.totalTickets || 0}
          </div>
          <div className="flex gap-2">
            <div className="flex items-center gap-1  text-center  px-3 py-1 bg-red-100 text-red-700 rounded-full text-xs font-medium cursor-pointer hover:bg-red-200 transition">
              <IconX className="w-4 h-4" />
              Cancel Booking
            </div>
            <RatingsModal eventId={event} />
          </div>
        </div>
      </div>

      {/* Center - Payment Info */}
      <div className="text-right mr-16 flex flex-col items-end gap-1 min-w-[100px]">
        <div className="text-indigo-600 font-bold text-base">
          ₹{data?.amountPaid || 0}
        </div>
      </div>
      {/* Right - Date */}
      <div className="flex items-center text-gray-500 text-xs ml-4 min-w-[120px]">
        <Calendar className="w-4 h-4 mr-1" />
        {formatDateTime(data?.createdAt)}
      </div>
    </div>
  );
};

export default BookingCard;
