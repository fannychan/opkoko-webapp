import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Presentation from '../Presentation/presentation';
import Schedule from '../Schedule/schedule';
import Main from '../Main/Main';

function Root() {
  return (
    <Switch>
      <Route exact path="/" component={Main} />
      <Route path="/presentation/:id" component={Presentation} />
    </Switch>
  );
}

export default Root;
