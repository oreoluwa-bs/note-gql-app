import React from 'react';
import { NavLink } from 'react-router-dom';
import Navbar from '../../components/Navbar';

const DashboardPage = () => {
  return (
    <div style={{ display: 'flex' }}>
      <div
        className="side-nav"
        style={{
          flex: '0 0 25%',
          minHeight: '100vh',
          borderTopRightRadius: '10rem',
          backgroundColor: 'var(--color-primary)'
        }}>
        <div
          className="top"
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between'
          }}>
          <Navbar logoColor="#fff" />
          <h2>My Notes</h2>
          <div>
            <button className="btn">+</button>
            <button className="btn">+</button>
          </div>
        </div>
        <div>
          <NavLink to="/dashboard">
            <div style={{ padding: '4rem' }}>
              <h3>Lorem Ipsum</h3>
              <span>
                The quick, brown fox jumps over a lazy dog. DJs flock by when
                MTV ax quiz prog.
              </span>
            </div>
          </NavLink>
        </div>
      </div>
      <div
        style={{
          backgroundColor: 'orange',
          height: '100vh',
          width: '100%'
        }}></div>
    </div>
  );
};

export default DashboardPage;
