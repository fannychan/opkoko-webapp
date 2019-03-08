import React, { Component } from 'react';
import BottomNavigationBar from '../Components/navigation';
import Schedule from '../Schedule/schedule';

class Main extends Component {
  render() {
    return (
      <div>
        <Schedule />
        <BottomNavigationBar />
      </div>
    );
  }
}

export default Main;
