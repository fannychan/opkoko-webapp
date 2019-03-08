import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button';
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
  },
  button: {
    width: '100%',
    color: '#336B87',
    boxShadow: 'none',
    padding: '10px 0'
  }
};

class PresentationInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      buttonText: 'Lägg till som favorit',
      buttonBackground: '#F8F8F8',
      abstract: '',
      title: '',
      targetGroup: '',
      id: props.match.params.id,
      presentationObject: '',
      favorites: [],
      speakers: []
    };
    this.addToFavorites = this.addToFavorites.bind(this);
    this.updateFavoriteButton = this.updateFavoriteButton.bind(this);
  }

  componentDidMount() {
    localStorage.getItem('favorites');
    const { id } = this.state;
    axios
      .get(`/presentation/${id}`, {
        headers: {
          authorization: 'Basic d2ViOnN1cGVyc2VjcmV0'
        }
      })
      .then(res => {
        this.setState({
          abstract: res.data.abstract,
          title: res.data.title,
          targetGroup: res.data.targetGroup,
          id: res.data._id,
          speakers: res.data.speakers,
          presentationObject: res.data
        });
      })
      .catch(function(error) {
        console.log(error);
      });
  }

  addToFavorites = () => {
    const { presentationObject, favorites } = this.state;
    const updated = [...favorites];
    updated.push(presentationObject);
    localStorage.setItem('favorites', JSON.stringify(updated));
    this.updateFavoriteButton();
  };

  updateFavoriteButton = () => {
    this.setState({
      buttonText: 'Ta bort från favoriter',
      buttonBackground: '#ffbaba'
    });
  };

  render() {
    const { classes } = this.props;
    const {
      title,
      abstract,
      targetGroup,
      speakers,
      buttonText,
      buttonBackground
    } = this.state;
    return (
      <div className={classes.root}>
        <div className={classes.hero}>
          <div>
            <Typography className={classes.typography} variant="title">
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

          <Button
            variant="contained"
            onClick={this.addToFavorites}
            className={classes.button}
            style={{ backgroundColor: buttonBackground }}
          >
            {buttonText}
          </Button>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(PresentationInfo);
