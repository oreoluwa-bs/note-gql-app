import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import './styles/App.scss';
import { LoginPage, SignUpPage } from './views/Auth';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/"></Route>
          {/* Authentication Pages */}
          <Route path="/login" component={LoginPage} />
          <Route path="/signup" component={SignUpPage} />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
