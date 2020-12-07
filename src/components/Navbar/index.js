import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../Logo';

// eslint-disable-next-line react/prop-types
const Navbar = ({ logoColor }) => {
  return (
    <header className="header">
      <nav className="navbar">
        {/* <img src={Logo} alt="Logo" className="logo" /> */}
        <Link className="logo" to="/">
          <Logo color={logoColor} />
        </Link>
      </nav>
    </header>
  );
};

export default Navbar;
