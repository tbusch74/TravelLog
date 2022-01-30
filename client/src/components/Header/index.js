import React from 'react';
import { Link } from 'react-router-dom';



const Header = () => {

  return (
    <header className="align-center">
      <div className="header">
        <Link to="/">
          <h1>Travel Log</h1>
        </Link>

        <nav className="logged-in">
            <><Link to="/login">Login</Link>         
            <Link to="/signup">Signup</Link></>
        </nav>

      </div>
    </header>
  );
};

export default Header;
