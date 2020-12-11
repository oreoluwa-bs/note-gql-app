import React, { useContext } from 'react';
import { gql, useQuery } from '@apollo/client';
import { NavLink, useRouteMatch } from 'react-router-dom';
import sprite from '../../assets/images/sprite.svg';
import { AuthContext } from '../../store/context/auth';

const GET_MY_NOTES = gql`
  query GetMyNotes($author: MongoID!) {
    getNotes(filter: { author: $author }) {
      _id
      title
      slug
      content
      author {
        _id
      }
    }
  }
`;

// eslint-disable-next-line no-unused-vars
const GET_MY_NOTE = gql`
  query GetMyNote($slug: String!) {
    getNoteByField(filter: { slug: $slug }) {
      _id
      title
      slug
      content
      author {
        _id
      }
    }
  }
`;

const NavLinkss = ({ currentMatch, author }) => {
  const { loading, error, data } = useQuery(GET_MY_NOTES, {
    variables: { author },
    pollInterval: 1000000
  });

  if (loading) return 'Loading...';
  if (error) return `Error! ${error.message}`;
  return (
    <div>
      {data.getNotes.map(({ slug, title, content }) => (
        <NavLink
          key={slug}
          exact
          to={`${currentMatch.path}/note/${slug}`}
          className="side-nav__link"
          activeClassName="side-nav__link-active">
          <div className="side-nav__link__item">
            <h3>{title}</h3>
            <span>{content.substring(0, 8) + '...'}</span>
          </div>
        </NavLink>
      ))}
    </div>
  );
};

const Sidenav = () => {
  const { auth } = useContext(AuthContext);
  let currentMatch = useRouteMatch();
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
        {auth?._id && (
          <NavLinkss author={auth._id} currentMatch={currentMatch} />
        )}
      </div>
    </div>
  );
};

export default Sidenav;
