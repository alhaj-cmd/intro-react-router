import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Frineds from './Frineds';


const Friend = () => {
    const friends = useLoaderData();
    console.log(friends) 
    return (
        <div>
            <h3>You are my Friends : {friends.length}</h3>
          <div style={{marginBottom:'2px'}}>
          {
                friends.map(friend => <Frineds
                key={friend.id}
                friend={friend}
                ></Frineds>)
            }
          </div>
        </div>
    );
};

export default Friend;