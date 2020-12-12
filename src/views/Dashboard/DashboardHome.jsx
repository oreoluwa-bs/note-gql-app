import { useMutation } from '@apollo/client';
import React, { useContext } from 'react';
import { useRouteMatch } from 'react-router-dom';
import { AuthContext } from '../../store/context/auth';
import { CREATE_NOTE } from '../../store/schema/noteQueries';

const DashboardHome = ({ history }) => {
  const { auth } = useContext(AuthContext);
  let currentMatch = useRouteMatch();
  const [handleCreateNote] = useMutation(CREATE_NOTE, {
    ignoreResults: false
  });

  const handleNoteCreation = async () => {
    const res = await handleCreateNote({
      variables: { author: auth._id }
    });

    const { slug } = res.data.createNote.record;
    history.push(`${currentMatch.path}note/${slug}`, { isNew: true });
  };

  return (
    <div>
      <div className="welcome">
        <h2 className="welcome__status">Welcome back to Note-gql</h2>
        <p className="welcome__message">
          {/* eslint-disable-next-line react/no-unescaped-entities */}
          Why don't you start off by creating a note or,
        </p>
        {/* <p className="welcome__message">Or</p> */}
        <p className="welcome__message">
          View an existing note by clicking on the title in the side navigation
        </p>
        <button className="btn btn__primary" onClick={handleNoteCreation}>
          Create a note
        </button>
      </div>
    </div>
  );
};

export default DashboardHome;
