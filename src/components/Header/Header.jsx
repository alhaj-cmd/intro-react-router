import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'
import ActiveLink from '../ActiveLink/ActiveLink';

const Header = () => {
    return (
        <nav>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/friend">Friend</Link>
            <Link to="/contact">Contact</Link>
            {/* <Link to="/post">Post</Link> */}
            <ActiveLink to="/post">Post</ActiveLink>
            
        </nav>
    );
};

export default Header;