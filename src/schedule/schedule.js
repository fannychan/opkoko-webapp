import React, { Component } from 'react';
import List from '@material-ui/core/List';
import { withStyles } from '@material-ui/core/styles';
import BottomNavigationBar from '../components/navigation';

import ScheduleItem from './components/scheduleItem';

const styles = () => ({
  list: {
    width: '100%'
  }
});

function Schedule(props) {
  const { classes } = props;

  return (
    <div>
      <List className={classes.list}>
        <ScheduleItem
          title="Design Fiction eller Hollywood"
          speaker="Fanny Chan"
          eventType="fika"
        />
        <ScheduleItem
          title="De jobbiga samtalen - eller Det är inte mig det är fel på, det är dig"
          speaker="Joel Harsten"
          eventType=""
        />
      </List>
      <BottomNavigationBar />
    </div>
  );
}

export default withStyles(styles)(Schedule);
