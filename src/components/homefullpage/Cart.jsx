import React from 'react';


const Cart = () => {
    return (
  <div>
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8 px-8 p-10">

  {/* Card 1 */}
  <div className="bg-white shadow rounded-xl p-5 text-center">
    <h2 className="text-3xl font-bold text-blue-500">8</h2>
    <p className="text-gray-600 mt-2">Total Friends</p>
  </div>

  {/* Card 2 */}
  <div className="bg-white shadow rounded-xl p-5 text-center">
    <h2 className="text-3xl font-bold text-red-500">3</h2>
    <p className="text-gray-600 mt-2">Overdue</p>
  </div>

  {/* Card 3 */}
  <div className="bg-white shadow rounded-xl p-5 text-center">
    <h2 className="text-3xl font-bold text-yellow-500">2</h2>
    <p className="text-gray-600 mt-2">Almost Due</p>
  </div>

  {/* Card 4 */}
  <div className="bg-white shadow rounded-xl p-5 text-center">
    <h2 className="text-3xl font-bold text-green-500">3</h2>
    <p className="text-gray-600 mt-2">On Track</p>
  </div>

</div>
  </div>
    );
};

export default Cart;