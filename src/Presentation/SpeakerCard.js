import React from 'react';
import { Card, CardContent, Avatar, Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

import Me from '../images/me.jpg';

const styles = {
  card: {
    display: 'flex',
    margin: '7px 0px'
  },
  avatar: {
    margin: 10
  },

  content: {
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    padding: 0,
    '&:last-child': {
      paddingBottom: 0
    }
  }
};

function SpeakerCard(props) {
  const { classes } = props;
  return (
    <Card className={classes.card} elevation={1}>
      <CardContent className={classes.content}>
        <Avatar src={Me} className={classes.avatar} />
        <Typography variant="subtitle1">Fanny Chan</Typography>
      </CardContent>
    </Card>
  );
}

export default withStyles(styles)(SpeakerCard);
