import React, { useState } from "react";
import { useParams } from "react-router-dom";
import useFriend from "../hooks/useFriend";

import callImag from "../assets/assets/call.png";
import textImag from "../assets/assets/text.png";
import videoImag from "../assets/assets/video.png";

const FriendDetails = () => {
  const { id } = useParams();
  const { friend } = useFriend();

  const expectedFriend = friend.find((f) => String(f.id) === id);

  const [timeline, setTimeline] = useState([]);

  const handleTimeline = (type) => {
    const newItem = {
      id: expectedFriend?.id,
      name: expectedFriend?.name,
      type,
      date: new Date().toLocaleString(),
    };

    const existing = JSON.parse(localStorage.getItem("timeline")) || [];

    const updated = [...existing, newItem];

    localStorage.setItem("timeline", JSON.stringify(updated));

    setTimeline(updated);
  };

  const statusMap = {
    "on-track": "bg-green-800 text-white",
    overdue: "bg-red-600 text-white",
    "almost due": "bg-yellow-400 text-black",
  };

  return (
    <div className="flex container mx-auto">
      <div className="shadow p-6">
        <img src={expectedFriend?.picture} alt="" />
        <h2>{expectedFriend?.name}</h2>

        <div className="btn btn-dash btn-accent rounded-full py-2">
          {expectedFriend?.tags}
        </div>

        <div className="mt-3 pb-3">
          <div
            className={`px-4 py-1 rounded-full text-xs font-semibold inline-block ${
              statusMap[expectedFriend?.status]
            }`}
          >
            {expectedFriend?.status}
          </div>

          <div>Day Since Contact: {expectedFriend?.days_since_contact}</div>
          <div>Goal(Days): {expectedFriend?.goal}</div>
          <div>Next Due: {expectedFriend?.next_due_date}</div>
        </div>

        {/* ACTIONS */}
        <div className="flex gap-4 mt-4">
          <img
            src={callImag}
            alt=""
            className="w-6 cursor-pointer"
            onClick={() => handleTimeline("Call")}
          />

          <img
            src={textImag}
            alt=""
            className="w-6 cursor-pointer"
            onClick={() => handleTimeline("Text")}
          />

          <img
            src={videoImag}
            alt=""
            className="w-6 cursor-pointer"
            onClick={() => handleTimeline("Video")}
          />
        </div>
      </div>
    </div>
  );
};

export default FriendDetails;