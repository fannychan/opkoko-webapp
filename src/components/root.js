import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Presentation from '../Presentation/presentation';
import Schedule from '../Schedule/schedule';

function Root() {
  return (
    <Switch>
      <Route exact path="/" component={Schedule} />
      <Route path="/presentation" component={Presentation} />
    </Switch>
  );
}

export default Root;
