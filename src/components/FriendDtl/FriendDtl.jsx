import React from 'react';
import { useLoaderData } from 'react-router-dom';

const FriendDtl = () => {
    const fnd= useLoaderData();

    return (
        <div>
            <h3>Friend Details {fnd.length}</h3>
            <h4>Name: {fnd.name}</h4>
            <p> Phone : {fnd.phone}   
            </p>
        </div>
    );
};

export default FriendDtl;