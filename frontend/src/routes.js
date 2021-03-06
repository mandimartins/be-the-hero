import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Logon from './pages/Logon';
import Register from './pages/Register';
import Profile from './pages/Profile';
import NewIncident from './pages/NewIncident';

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/incidents/new" component={NewIncident}></Route>
        <Route path="/profile" component={Profile}></Route>
        <Route path="/register" component={Register}></Route>
        <Route path="/" component={Logon}></Route>
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
