import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import Avatar from '@material-ui/core/Avatar';
import ListItemText from '@material-ui/core/ListItemText';
import FlashIcon from '@material-ui/icons/FlashOn';
import ListSubheader from '@material-ui/core/ListSubheader';
import WorkshopIcon from '@material-ui/icons/Build';
import LunchIcon from '@material-ui/icons/Restaurant';
import GroupIcon from '@material-ui/icons/Group';
import FikaIcon from '@material-ui/icons/FreeBreakfast';
import { Typography } from '@material-ui/core';

const styles = () => ({
  details: {
    display: 'flex'
  },
  link: {
    textDecoration: 'none'
  }
});

function ScheduleItem(props) {
  const { classes, title, eventType, speaker, id } = props;
  return (
    <Link className={classes.link} to={`/presentation/${id}`}>
      <ListItem alignItems="flex-start">
        <Avatar>
          <ScheduleAvatar eventType={eventType} />
        </Avatar>
        <ListItemText
          primary={title}
          secondary={
            <React.Fragment>
              <Typography color="textPrimary">{speaker}</Typography>
              <Typography className={classes.details} variant="caption">
                Rum: Salongen Tid: 9.30 - 10.00
              </Typography>
            </React.Fragment>
          }
        />
      </ListItem>
    </Link>
  );
}

function ScheduleAvatar(props) {
  const { eventType } = props;
  if (eventType === 'fika') {
    return <FikaIcon />;
  }

  if (eventType === 15) {
    return <FlashIcon />;
  }

  if (eventType === 'workshop') {
    return <WorkshopIcon />;
  }

  if (eventType === 'lunch') {
    return <LunchIcon />;
  }

  return <GroupIcon />;
}

export default withStyles(styles)(ScheduleItem);
