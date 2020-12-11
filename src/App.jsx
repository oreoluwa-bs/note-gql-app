import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { HomePage, PageNotFoundPage } from './views/Main';
import { LoginPage, SignUpPage } from './views/Auth';
import './styles/App.scss';
import DashboardPage from './views/Dashboard/DashboardPage';
import RootProvider from './store/context';

const App = () => {
  return (
    <div>
      <RootProvider>
        <BrowserRouter>
          <Switch>
            {/* Main Pages */}
            <Route exact path="/" component={HomePage} />

            {/* Authentication Pages */}
            <Route path="/signin" component={LoginPage} />
            <Route path="/signup" component={SignUpPage} />

            {/* Dashboard Pages */}
            <Route path="/dashboard" component={DashboardPage} />

            <Route component={PageNotFoundPage} />
          </Switch>
        </BrowserRouter>
      </RootProvider>
    </div>
  );
};

export default App;
