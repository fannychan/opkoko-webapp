import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import Divider from '@material-ui/core/Divider';

import TimeIcon from '@material-ui/icons/AccessTime';
import RoomIcon from '@material-ui/icons/Place';
import SubjectIcon from '@material-ui/icons/Subject';
import axios from 'axios';
import IconRow from './iconRow';
import Speaker from './SpeakerCard';

const styles = {
  root: {
    backgroundColor: 'white'
  },
  hero: {
    width: '100%',
    borderTop: '17px solid #90AFC5',
    padding: '20px 20px 10px'
  },
  typography: {
    color: '#2E2E2E'
  },

  wrapper: {
    padding: '10px 20px'
  },
  abstract: {
    marginTop: 25,
    marginBottom: 25
  }
};

class PresentationInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      abstract: '',
      title: '',
      targetGroup: '',
      speakers: []
    };
  }

  componentDidMount() {
    axios
      .get(`/presentation/5c38ee2cb0435b3b6eda8de2`, {
        headers: {
          authorization: 'Basic d2ViOnN1cGVyc2VjcmV0'
        }
      })
      .then(res => {
        console.log(res);
        this.setState({
          abstract: res.data.abstract,
          title: res.data.title,
          targetGroup: res.data.targetGroup,
          speakers: res.data.speakers
        });
      })
      .catch(function(error) {
        console.log(error);
      });
  }

  render() {
    const { classes } = this.props;
    const { title, abstract, targetGroup, speakers } = this.state;
    return (
      <div className={classes.root}>
        <div className={classes.hero}>
          <div>
            <Typography
              className={classes.typography}
              component="h6"
              variant="headline"
              gutterBottom
            >
              {title}
            </Typography>
          </div>
        </div>

        <Divider variant="middle" />

        <div className={classes.wrapper}>
          <IconRow text="9.30 - 10.00" icon={TimeIcon} />
          <IconRow text="Salongen" icon={RoomIcon} />
          <IconRow text="Security" icon={SubjectIcon} />
          <Typography className={classes.abstract} variant="body1">
            {abstract}
          </Typography>

          <Speaker className={classes.abstract} speakers={speakers} />
          <Speaker speakers={speakers} />
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(PresentationInfo);
