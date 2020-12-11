import React from 'react';

const PageNoteFoundPage = ({ history }) => {
  const handleGoBack = () => history.goBack();
  return (
    <div>
      <div className="error">
        <h2 className="error__status">404</h2>
        <p className="error__message">Page Not found</p>
        <button className="btn btn__primary" onClick={handleGoBack}>
          Go Back
        </button>
      </div>
    </div>
  );
};

export default PageNoteFoundPage;
