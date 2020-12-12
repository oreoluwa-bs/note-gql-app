import React, { useContext } from 'react';
import { useMutation, useQuery } from '@apollo/client';
import { Link, NavLink, useHistory, useRouteMatch } from 'react-router-dom';
import sprite from '../../assets/images/sprite.svg';
import { AuthContext } from '../../store/context/auth';
import { CREATE_NOTE, GET_MY_NOTES } from '../../store/schema/noteQueries';
import { convertFromRaw } from 'draft-js';

const NavLinkss = ({ currentMatch, author }) => {
  const { loading, error, data } = useQuery(GET_MY_NOTES, {
    variables: { author },
    pollInterval: 1000
  });

  if (loading) return 'Loading...';
  if (error) return `Error! ${error.message}`;
  return (
    <div>
      {data.getNotes.map(({ slug, title, content }) => {
        const contentFromRaw = convertFromRaw(JSON.parse(content));
        const contentText = contentFromRaw.getPlainText();
        return (
          <NavLink
            key={slug}
            exact
            to={{
              pathname: `${currentMatch.path}/note/${slug}`,
              state: { isNew: false }
            }}
            className="side-nav__link"
            activeClassName="side-nav__link-active">
            <div className="side-nav__link__item">
              <h3>{title}</h3>
              {content && <span>{contentText.substring(0, 25) + '...'}</span>}
            </div>
          </NavLink>
        );
      })}
    </div>
  );
};

const Sidenav = () => {
  const { auth } = useContext(AuthContext);
  const history = useHistory();
  let currentMatch = useRouteMatch();

  const [handleCreateNote] = useMutation(CREATE_NOTE, {
    ignoreResults: false
  });

  const handleNoteCreation = async () => {
    const res = await handleCreateNote({
      variables: { author: auth._id }
    });

    const { slug } = res.data.createNote.record;
    history.push(`${currentMatch.path}/note/${slug}`, { isNew: true });
  };

  return (
    <div className="side-nav">
      <div className="side-nav__header">
        <h2 className="heading" style={{ color: '#fff' }}>
          <Link to={`${currentMatch.path}/`}>My Notes</Link>
        </h2>
        <div>
          <button className="btn btn__primary" onClick={handleNoteCreation}>
            <svg className="side-nav__header__icon">
              <use xlinkHref={`${sprite}#icon-plus`} />
            </svg>
          </button>
          {/* <button className="btn btn__primary">
            <svg className="side-nav__header__icon">
              <use xlinkHref={`${sprite}#icon-magnifying-glass`} />
            </svg>
          </button> */}
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
