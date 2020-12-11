import React from 'react';
import Navbar from '../../components/Navbar';

const PageNoteFoundPage = ({ history, showNav }) => {
  const handleGoBack = () => history.goBack();
  return (
    <div>
      {showNav && <Navbar />}
      <div>
        <div className="error">
          <h2 className="error__status">404</h2>
          <p className="error__message">Page Not found</p>
          <button className="btn btn__primary" onClick={handleGoBack}>
            Go Back
          </button>
        </div>
      </div>
    </div>
  );
};

export default PageNoteFoundPage;
