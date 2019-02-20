import React, { Component } from 'react';
import { Typography, withStyles } from '@material-ui/core';

const styles = {
  root: {
    display: 'flex',
    alignItems: 'center',
    '& > *:first-child': {
      marginRight: 15
    }
  },
  icon: {
    color: '#763626'
  }
};

function IconRow(props) {
  const { icon: Icon, text, classes } = props;
  return (
    <span className={classes.root}>
      <Icon className={classes.icon} />
      <Typography variant="overline">{text}</Typography>
    </span>
  );
}

export default withStyles(styles)(IconRow);
