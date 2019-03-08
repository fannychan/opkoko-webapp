import React from 'react';
import { Switch, Route } from 'react-router-dom';
import BottomNavigationBar from '../Components/NavigationBar';
import Schedule from './Schedule/Schedule';
import Favorites from './Favorites/Favorites';
import Information from './Information/Information';

function Main() {
  return (
    <div>
      <Switch>
        <Route path="/favorites" component={Favorites} />
        <Route path="/information" component={Information} />
        <Route path="/" component={Schedule} />
      </Switch>
      <BottomNavigationBar />
    </div>
  );
}

export default Main;
