import React from 'react';
import { Link, Route, Switch, useRouteMatch } from 'react-router-dom';
import { DashboardHome, NotePage } from '.';
import { Sidenav } from '../../components/Dashboard';
import Logo from '../../components/Logo';
import { PageNotFoundPage } from '../Main';

const DashNavHeader = () => {
  return (
    <header className="header">
      <nav className="app-navbar">
        <Link className="logo" to="/">
          <Logo color="#fff" width={35} height={45} />
        </Link>
        <button className="btn">Logout</button>
      </nav>
    </header>
  );
};

const DashboardPage = () => {
  let currentMatch = useRouteMatch();
  return (
    <div>
      <DashNavHeader />
      <div style={{ display: 'flex' }}>
        <Sidenav />
        <div className="note-page">
          <div className="task">
            <Switch>
              <Route
                exact
                path={`${currentMatch.path}/`}
                component={DashboardHome}
              />
              <Route
                exact
                path={`${currentMatch.path}/note/:noteSlug`}
                component={NotePage}
              />
              <Route component={PageNotFoundPage} />
            </Switch>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
