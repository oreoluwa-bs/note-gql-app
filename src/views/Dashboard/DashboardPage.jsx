import React from 'react';
import { Link } from 'react-router-dom';
import Sidenav from '../../components/Dashboard/Sidenav';

import Logo from '../../components/Logo';

const DashboardPage = () => {
  return (
    <div>
      <header className="header">
        <nav className="app-navbar" style={{}}>
          <Link className="logo" to="/">
            <Logo color="#fff" width={35} height={57} />
          </Link>
          <button className="btn">Logout</button>
        </nav>
      </header>
      <div style={{ display: 'flex' }}>
        <Sidenav />
        <div className="note-page">
          <div className="task"></div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
