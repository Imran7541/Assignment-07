import React, { useEffect, useState } from "react";

const FriendCart = () => {
  const [friend, setFriend] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("/friends.json");
      const data = await res.json();
      setFriend(data);
    };

    fetchData();
  }, []);

  const statusMap = {
    "on-track": "bg-green-800 text-white",
    "overdue": "bg-red-600 text-white",
    "almost due": "bg-yellow-400 text-black",
  };

  return (
    <div>
      <h2 className="font-bold text-2xl">Your Friends</h2>

      <p>Total friend: {friend.length}</p>

      <div className="grid gap-4 mt-4">
        {friend.map((friend, ind) => (
          <div key={ind} className="card bg-base-100 w-96 shadow-sm">

            <figure>
              <img src={friend.picture} alt={friend.name} />
            </figure>

            <div className="card-body">
              <h2 className="card-title">
                {friend.name}
                <div className="badge badge-secondary">NEW</div>
              </h2>

              <div className="card-actions justify-end">
                <div className="btn btn-dash btn-accent">
                  {friend.tags}
                </div>

                <div
                  className={`px-3 py-1 rounded-full text-sm mt-2 inline-block ${
                    statusMap[friend.status]
                  }`}
                >
                  {friend.status}
                </div>
              </div>
            </div>

          </div>
        ))}
      </div>
    </div>
  );
};

export default FriendCart;