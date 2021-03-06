import React, { Component } from 'react';
import List from '@material-ui/core/List';
import { withStyles } from '@material-ui/core/styles';
import axios from 'axios';
import ScheduleItem from './components/scheduleItem';

const styles = () => ({
  list: {
    width: '100%'
  }
});

class Schedule extends Component {
  constructor(props) {
    super(props);
    this.state = {
      presentations: []
    };
  }

  componentDidMount() {
    axios
      .get(`/presentations`, {
        headers: {
          authorization: 'Basic d2ViOnN1cGVyc2VjcmV0'
        }
      })
      .then(res => {
        this.setState({
          presentations: res.data
        });
        console.log(res.data);
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    const { classes } = this.props;
    const { presentations } = this.state;

    return (
      <div>
        <List className={classes.list}>
          {presentations.map(presentation => (
            <ScheduleItem
              key={presentation._id}
              title={presentation.title}
              id={presentation._id}
              speaker="Fanny Chan"
              eventType={presentation.duration}
            />
          ))}
        </List>
      </div>
    );
  }
}

export default withStyles(styles)(Schedule);
