import React from 'react';
import { Link, Route, Switch, useRouteMatch } from 'react-router-dom';
import { Sidenav } from '../../components/Dashboard';

import Logo from '../../components/Logo';
import NotePage from './NotePage';

const DashboardPage = () => {
  let currentMatch = useRouteMatch();
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
          <div className="task">
            <Switch>
              <Route exact path={`${currentMatch.path}/`}>
                <div>Create new note</div>
              </Route>
              <Route
                exact
                path={`${currentMatch.path}/note/:noteSlug`}
                component={NotePage}
              />
              <Route>
                <div>Page Not found</div>
              </Route>
            </Switch>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
