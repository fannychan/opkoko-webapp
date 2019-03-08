import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Presentation from '../Presentation/presentation';
import Schedule from '../Schedule/schedule';
import Main from '../Main/Main';
import Favorites from '../Main/Favorites/Favorites';

function Root() {
  return (
    <Switch>
      <Route path="/presentation/:id" component={Presentation} />
      <Route path="/" component={Main} />
    </Switch>
  );
}

export default Root;
