import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { HomePage } from './views/Main';
import { LoginPage, SignUpPage } from './views/Auth';
import './styles/App.scss';
import DashboardPage from './views/Dashboard/DashboardPage';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          {/* Main Pages */}
          <Route exact path="/" component={HomePage} />

          {/* Authentication Pages */}
          <Route path="/signin" component={LoginPage} />
          <Route path="/signup" component={SignUpPage} />

          {/* Dashboard Pages */}
          <Route exact path="/dashboard" component={DashboardPage} />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
