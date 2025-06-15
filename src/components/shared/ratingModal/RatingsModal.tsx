import React, { useContext, useState } from "react";
import { IconStar } from "@tabler/icons-react";
import { api } from "../../../utils";
import AuthContext from "../../../contexts/authContext/authContext";

const emojiMap = [
  { emoji: "😡", label: "Terrible", value: 1 },
  { emoji: "😕", label: "Bad", value: 2 },
  { emoji: "😐", label: "Okay", value: 3 },
  { emoji: "😊", label: "Good", value: 4 },
  { emoji: "🤩", label: "Excellent", value: 5 },
];

const RatingsModal = ({ eventId }: any) => {
  const { user } = useContext(AuthContext);
  const [showModal, setShowModal] = useState(false);
  const [selectedRating, setSelectedRating] = useState<number | null>(null);
  const [comment, setComment] = useState("");

  const handleSubmit = async () => {
    try {
      if (!selectedRating) {
        alert("Please select a rating!");
        return;
      }

      const giveRating = await api.review.giveReview({
        comment,
        rating: selectedRating,
        userId: user?.id,
        eventId: eventId,
      });
      console.log("Rating submitted:", giveRating);

      // Reset after submission
      setSelectedRating(null);
      setComment("");
      setShowModal(false);
    } catch (error) {}
  };

  return (
    <div>
      {/* Trigger button */}
      <div
        onClick={() => setShowModal(true)}
        className="flex items-center gap-1 text-center px-3 py-1 bg-yellow-100 text-yellow-700 rounded-full text-xs font-medium cursor-pointer hover:bg-yellow-200 transition"
      >
        <IconStar className="w-4 h-4" />
        Rate Us
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black/60 bg-opacity-40 z-50 flex items-center justify-center">
          <div className="bg-white w-11/12 max-w-md p-6 rounded-xl shadow-lg relative">
            {/* Close */}
            <button
              className="absolute top-3 right-3 text-yellow-700 hover:text-yellow-900 text-xl"
              onClick={() => setShowModal(false)}
            >
              ×
            </button>

            <div className="text-lg mb-2 font-semibold text-gray-700 mb-4">
              Rate Your Experience
            </div>

            {/* Emoji Rating */}
            <div className="flex px-8 mb-4 justify-between items-center text-2xl mb-4">
              {emojiMap.map(({ emoji, label, value }) => (
                <span
                  key={value}
                  title={label}
                  onClick={() => setSelectedRating(value)}
                  className={`cursor-pointer transition-transform duration-200 ${
                    selectedRating === value ? "scale-125" : "opacity-60"
                  }`}
                >
                  {emoji}
                </span>
              ))}
            </div>

            {/* Comment Box */}
            <textarea
              placeholder="Leave a comment..."
              className="w-full border border-gray-300 rounded-md p-3 text-sm focus:outline-none focus:ring-2 focus:ring-yellow-400"
              rows={4}
              value={comment}
              onChange={(e) => setComment(e.target.value)}
            />

            {/* Submit Button */}
            <div
              onClick={handleSubmit}
              className="mt-4 w-full text-white text-center bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition"
            >
              Submit
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default RatingsModal;
