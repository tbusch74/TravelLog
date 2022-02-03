import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <nav>
        <Link to="/profile">Profile</Link>
        <Link to="/">Home</Link>
    </nav>
  )
}

export default Nav;