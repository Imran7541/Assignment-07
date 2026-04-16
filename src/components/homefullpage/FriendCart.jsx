import React, { useEffect, useState } from "react";
import { PacmanLoader } from "react-spinners";

const FriendCart = () => {
  const [friend, setFriend] = useState([]);
  const [loading,setLoading]=useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("/images/friends.json");
      const data = await res.json();

     setTimeout(()=>{
      setFriend(data);
      setLoading(false);
     },2000)

      
    };

    fetchData();
  }, []);
  console.log(friend,"friend");
  console.log(loading,"loading");

  const statusMap = {
    "on-track": "bg-green-800 text-white",
    overdue: "bg-red-600 text-white",
    "almost due": "bg-yellow-400 text-black",
  };

  return (
    <div className="items-center">
      <h2 className="font-bold text-2xl">Your Friends</h2>

      <div className="flex justify-center items-center">
        {loading?( <PacmanLoader color="#ad46ff"/> 
        ):
       
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-10 ">
        {friend.map((friend, ind) => (
          <div
            key={ind}
            className="card bg-white border border-gray-100 shadow-md p-10 items-center text-center rounded-2xl min-h-[300px] flex flex-col justify-between"
          >
            <figure>
              <div>
                <img
                  src={friend.picture}
                  alt={friend.name}
                  className="w-full h-full object-cover rounded-full shadow-sm"
                />
              </div>
            </figure>

            <div className=" font-bold text-xl">
              <div className="">
                <h2 className="">{friend.name}</h2>
              </div>
              <p className="text-gray-400 text-xs">62d ago</p>

              <div className=" ">
                <div className="btn btn-dash btn-accent rounded-full py-2
                ">{friend.tags}</div>
                 
                 <div className="mt-3 pb-3">
                <div
                  className={`px-4 py-1 rounded-full text-xs font-semibold inline-block  ${
                    statusMap[friend.status]
                  }`}
                >
                  {friend.status}
                </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>}
      </div> 
    </div>
  );
};

export default FriendCart;
