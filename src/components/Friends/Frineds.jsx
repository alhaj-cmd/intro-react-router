import React from 'react';
import './Friends.css'
import { Link } from 'react-router-dom';

const Frineds = ({friend}) => {
    // console.log(friend)
    const {name, email, phone, id } =friend
    return (
        <div className='friends-list'>
            <div className="list">
            <h3>{name}</h3>
            <p>{email}</p>
            <p>{phone}</p>
            <p><Link to={`/friend/${id}`}>Show me Details</Link></p>
            </div>
        </div>
    );
};

export default Frineds;