import React from 'react';

const DashboardHome = () => {
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
        <button className="btn btn__primary">Create a note</button>
      </div>
    </div>
  );
};

export default DashboardHome;
