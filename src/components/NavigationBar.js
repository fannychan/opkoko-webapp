import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import { withStyles } from '@material-ui/core/styles';
import { BottomNavigationAction } from '@material-ui/core';
import ScheduleIcon from '@material-ui/icons/Schedule';
import FavoriteIcon from '@material-ui/icons/Favorite';
import InformationIcon from '@material-ui/icons/Info';
import Main from '../Main/Schedule/schedule';

const styles = {
  stayAtBottom: {
    width: '100%',
    position: 'fixed',
    bottom: 0,
    borderTop: '1px solid #F8F8F8'
  }
};

class NavigationBar extends Component {
  state = {
    value: 'schedule'
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { classes } = this.props;
    const { value } = this.state;
    return (
      <BottomNavigation
        value={value}
        onChange={this.handleChange}
        className={classes.stayAtBottom}
      >
        <BottomNavigationAction
          component={Link}
          to="/schedule"
          label="Schema"
          value="schedule"
          icon={<ScheduleIcon />}
        />

        <BottomNavigationAction
          component={Link}
          to="/favorites"
          label="Favoriter"
          value="favorites"
          icon={<FavoriteIcon />}
        />
        <BottomNavigationAction
          label="Information"
          value="information"
          icon={<InformationIcon />}
        />
      </BottomNavigation>
    );
  }
}

export default withStyles(styles)(NavigationBar);
