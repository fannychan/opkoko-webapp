import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Presentation from '../speaker/presentation';
import Schedule from '../schedule/schedule';

function Root() {
  return (
    <Switch>
      <Route exact path="/" component={Schedule} />
      <Route path="/presentation" component={Presentation} />
    </Switch>
  );
}

export default Root;
