import React from 'react';
import { Link } from 'react-router-dom';


const Header = () => {
  return (
    <header className="">
      
      <div className="">
      <Link to="/">
          <h1>Travel Log</h1>
        </Link>
        <nav className="nav">
            {/* <>
              <Link to="/profile">Me</Link>
              <a href="/" onClick={logout}>
                Logout
              </a>
            </> */}
            <>
              <Link to="/login" >Login</Link>
              <Link to="/signup">Signup</Link>
            </> 
        </nav>
      </div>
    </header>
  );
};

export default Header;
