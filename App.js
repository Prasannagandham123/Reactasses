// App.js
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ProvideAuth } from './auth';
import Dashboard from './Dashboard';
import Login from './Login';

function App() {
  return (
    <Router>
      <ProvideAuth>
        <Switch>
          <Route path="/dashboard">
            <Dashboard />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
        </Switch>
      </ProvideAuth>
    </Router>
  );
}

export default App;
