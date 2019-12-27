import React from 'react';
import { Route, Switch } from 'react-router';

import Jokes from '../Screens/Jokes';
import About from '../Screens/About';

const Routes = () => (
  <Switch>
    <Route path="/" exact component={Jokes} />
    <Route path="/jokes" component={Jokes} />
    <Route path="/about" component={About} />
  </Switch>
);

export default Routes;
