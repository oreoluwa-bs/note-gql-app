import React from 'react';
import { NavLink } from 'react-router-dom';
import sprite from '../../assets/images/sprite.svg';

const Sidenav = () => {
  return (
    <div className="side-nav">
      <div className="side-nav__header">
        <h2 className="heading" style={{ color: '#fff' }}>
          My Notes
        </h2>
        <div>
          <button className="btn btn__primary">
            <svg className="side-nav__header__icon">
              <use xlinkHref={`${sprite}#icon-plus`} />
            </svg>
          </button>
          <button className="btn btn__primary">
            <svg className="side-nav__header__icon">
              <use xlinkHref={`${sprite}#icon-magnifying-glass`} />
            </svg>
          </button>
        </div>
      </div>
      <div className="side-nav__links">
        <NavLink
          to="/dashboard"
          className="side-nav__link"
          activeClassName="side-nav__link-active">
          <div className="side-nav__link__item">
            <h3>Lorem Ipsum</h3>
            <span>
              The quick, brown fox jumps over a lazy dog. DJs flock by when MTV
              ax quiz prog.
            </span>
          </div>
        </NavLink>
        <NavLink
          to="/dashboard/s"
          className="side-nav__link"
          activeClassName="side-nav__link-active">
          <div className="side-nav__link__item">
            <h3>Lorem Ipsum</h3>
            <span>
              The quick, brown fox jumps over a lazy dog. DJs flock by when MTV
              ax quiz prog.
            </span>
          </div>
        </NavLink>
      </div>
    </div>
  );
};

export default Sidenav;