import React, { useEffect, useState } from 'react';

const useFriend = () => {
    const [friend, setFriend] = useState([]);
    
      useEffect(() => {
        const fetchData = async () => {
          const res = await fetch("/images/friends.json");
          const data = await res.json();
          setFriend(data);
        };
    
        fetchData();
      }, []);
    return {friend};
};

export default useFriend;