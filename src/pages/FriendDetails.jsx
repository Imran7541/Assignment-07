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
  <div className="bg-gray-100 min-h-screen p-6">
    <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">

      {/* LEFT CARD */}
      <div className="bg-white rounded-xl shadow p-6 text-center">
        <img
          src={expectedFriend?.picture}
          alt=""
          className="w-20 h-20 mx-auto rounded-full object-cover"
        />

        <h2 className="text-lg font-semibold mt-3">
          {expectedFriend?.name}
        </h2>

        {/* STATUS */}
        <div
          className={`mt-2 px-3 py-1 text-xs rounded-full inline-block ${
            statusMap[expectedFriend?.status]
          }`}
        >
          {expectedFriend?.status}
        </div>

        {/* TAG */}
        <div className="mt-2 text-xs text-gray-500">
          {expectedFriend?.tags}
        </div>

        {/* INFO */}
        <p className="text-sm italic text-gray-500 mt-3">
          "Former colleague, great mentor"
        </p>

        <p className="text-xs text-gray-400 mt-1">
          Preferred: email
        </p>
      </div>

      {/* RIGHT SIDE */}
      <div className="md:col-span-2 space-y-6">

        {/* TOP STATS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white p-5 rounded-xl shadow text-center">
            <h2 className="text-2xl font-bold">
              {expectedFriend?.days_since_contact}
            </h2>
            <p className="text-sm text-gray-500">
              Days Since Contact
            </p>
          </div>

          <div className="bg-white p-5 rounded-xl shadow text-center">
            <h2 className="text-2xl font-bold">
              {expectedFriend?.goal}
            </h2>
            <p className="text-sm text-gray-500">
              Goal (Days)
            </p>
          </div>

          <div className="bg-white p-5 rounded-xl shadow text-center">
            <h2 className="text-lg font-semibold">
              {expectedFriend?.next_due_date}
            </h2>
            <p className="text-sm text-gray-500">
              Next Due
            </p>
          </div>
        </div>

        {/* RELATIONSHIP GOAL */}
        <div className="bg-white rounded-xl shadow p-5 flex justify-between items-center">
          <div>
            <h3 className="font-semibold">Relationship Goal</h3>
            <p className="text-sm text-gray-500">
              Connect every{" "}
              <span className="font-semibold">
                {expectedFriend?.goal} days
              </span>
            </p>
          </div>

          <button className="px-3 py-1 border rounded-md text-sm">
            Edit
          </button>
        </div>

        {/* QUICK ACTION */}
        <div className="bg-white rounded-xl shadow p-5">
          <h3 className="font-semibold mb-4">Quick Check-In</h3>

          <div className="grid grid-cols-3 gap-4 text-center">
            <div
              className="p-4 border rounded-lg cursor-pointer hover:bg-gray-100"
              onClick={() => handleTimeline("Call")}
            >
              <img src={callImag} className="w-6 mx-auto mb-2" />
              <p className="text-sm">Call</p>
            </div>

            <div
              className="p-4 border rounded-lg cursor-pointer hover:bg-gray-100"
              onClick={() => handleTimeline("Text")}
            >
              <img src={textImag} className="w-6 mx-auto mb-2" />
              <p className="text-sm">Text</p>
            </div>

            <div
              className="p-4 border rounded-lg cursor-pointer hover:bg-gray-100"
              onClick={() => handleTimeline("Video")}
            >
              <img src={videoImag} className="w-6 mx-auto mb-2" />
              <p className="text-sm">Video</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);
};

export default FriendDetails;
