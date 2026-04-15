import React from 'react';
import Banner from '../../components/homefullpage/Banner';
import Cart from '../../components/homefullpage/Cart'
import FriendCart from '../../components/homefullpage/FriendCart';



const HomePage = () => {
   
    return (
        <>
 <div className="px-3 md:px-6">
    <div className="max-w-6xl mx-auto">
      
      <Banner/>
      <Cart/>
      <FriendCart/>

    </div>
  </div>
        </>
    );
};

export default HomePage;