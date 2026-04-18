import React from "react";

const Cart = () => {
  return (
    <div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8 px-8 p-10">
        {/* Card 1 */}
        <div className="bg-white shadow rounded-xl p-5 text-center">
          <h2 className="text-3xl font-bold text-blue-500">12</h2>
          <p className="text-gray-600 mt-2">Total Friends</p>
        </div>

        {/* Card 2 */}
        <div className="bg-white shadow rounded-xl p-5 text-center">
          <h2 className="text-3xl font-bold text-red-500">4</h2>
          <p className="text-gray-600 mt-2">On Track</p>
        </div>

        {/* Card 3 */}
        <div className="bg-white shadow rounded-xl p-5 text-center">
          <h2 className="text-3xl font-bold text-yellow-500">6</h2>
          <p className="text-gray-600 mt-2">Need Attention</p>
        </div>

         {/* ddjd fdjddf dfdj */}
          {/* ACTION BUTTONS */}
          <div className="space-y-2 pt-3">
            <button className="w-full border rounded-lg py-2 text-sm">
              Snooze 2 Weeks
            </button>
            <button className="w-full border rounded-lg py-2 text-sm">
              Archive
            </button>
            <button className="w-full border rounded-lg py-2 text-sm text-red-500">
              Delete
            </button>
          </div>



         {/* dfkdjdf dfdsfdsfs dfkdds  */}

        {/* Card 4 */}
        <div className="bg-white shadow rounded-xl p-5 text-center">
          <h2 className="text-3xl font-bold text-green-500">12</h2>
          <p className="text-gray-600 mt-2">Interactions This Month</p>
        </div>
      </div>
    </div>
  );
};

export default Cart;
