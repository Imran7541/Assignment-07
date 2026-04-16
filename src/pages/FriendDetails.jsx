import React from 'react';
import { useParams } from 'react-router';

const FriendDetails = () => {
    const {id} = useParams();
    console.log(id,"id");
    return (
        <div>
            FriendDetails page
        </div>
    );
};

export default FriendDetails;