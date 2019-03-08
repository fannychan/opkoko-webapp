import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import BottomNavigationBar from '../Components/NavigationBar';
import Schedule from '../Schedule/schedule';
import Favorites from './Favorites/Favorites';

class Main extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route path="/schedule" component={Schedule} />
          <Route path="/favorites" component={Favorites} />
        </Switch>
        <BottomNavigationBar />
      </div>
    );
  }
}

export default Main;
