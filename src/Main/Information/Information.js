import React from 'react';
import { Typography, CardContent, Card } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

const styles = () => ({
  root: {
    padding: '10px 20px',
    backgroundColor: 'white'
  },
  card: {
    display: 'flex',
    margin: '7px 0px'
  }
});

function Information(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <Typography variant="h5">Information</Typography>

      <Card className={classes.card}>
        <CardContent>
          <Typography variant="h6" component="h2">
            Hotell
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}
export default withStyles(styles)(Information);
