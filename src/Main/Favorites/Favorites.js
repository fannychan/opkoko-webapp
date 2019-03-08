import React, { Component } from 'react';
import List from '@material-ui/core/List';
import { withStyles } from '@material-ui/core/styles';
import ScheduleItem from '../Schedule/components/scheduleItem';

const styles = () => ({
  list: {
    width: '100%'
  }
});

class Favorites extends Component {
  constructor(props) {
    super(props);
    this.state = {
      favorites: []
    };
  }

  componentDidMount() {
    this.setState({
      favorites: JSON.parse(localStorage.getItem('favorites'))
    });
  }

  render() {
    const { classes } = this.props;
    const { favorites } = this.state;
    return (
      <div>
        <List className={classes.list}>
          {favorites.map(favorite => (
            <ScheduleItem
              key={favorite._id}
              title={favorite.title}
              id={favorite._id}
              speaker="Fanny Chan"
              eventType={favorite.duration}
            />
          ))}
        </List>
      </div>
    );
  }
}

export default withStyles(styles)(Favorites);
