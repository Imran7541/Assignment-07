import { Link } from "react-router-dom";
import useFriend from "../../hooks/useFriend";

const FriendCart = () => {
  const { friend } = useFriend();

  const statusMap = {
    "on-track": "bg-green-800 text-white",
    overdue: "bg-red-600 text-white",
    "almost due": "bg-yellow-400 text-black",
  };

  return (
    <div className="items-center">
      <h2 className="font-bold text-2xl">Your Friends</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-10 ">
        {friend.map((singleFriend) => (
          <Link to={`/friend/${singleFriend.id}`} key={singleFriend.id}>
            <div className="card bg-white border border-gray-100 shadow-md p-10 items-center text-center rounded-2xl min-h-[300px] flex flex-col justify-between">
              <figure>
                <div>
                  <img
                    src={singleFriend.picture}
                    alt={singleFriend.name}
                    className="w-full h-full object-cover rounded-full shadow-sm"
                  />
                </div>
              </figure>

              <div className="font-bold text-xl">
                <h2>{singleFriend.name}</h2>
                <p className="text-gray-400 text-xs">62d ago</p>
                <div className="space-y-3 grid my-3">
                  <button className="bg-green-200 rounded-2xl p-2   items-center w-32">
                    {singleFriend.tags}
                  </button>

                  <button
                    className={`py-2 w-32 rounded-2xl ${statusMap[singleFriend.status]}`}
                  >
                    {singleFriend.status}
                  </button>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div> //
  );
};

export default FriendCart;
