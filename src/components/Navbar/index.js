import React from 'react';
import Logo from '../Logo';

// eslint-disable-next-line react/prop-types
const Navbar = ({ logoColor }) => {
  return (
    <header className="header">
      <nav className="navbar">
        {/* <img src={Logo} alt="Logo" className="logo" /> */}
        <span className="logo">
          <Logo color={logoColor} />
        </span>
      </nav>
    </header>
  );
};

export default Navbar;
