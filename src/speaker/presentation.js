import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import TimeIcon from '@material-ui/icons/AccessTime';
import RoomIcon from '@material-ui/icons/Place';

import Speaker from './speakerInfo';
const styles = {
    hero: {
        width: '100%',
        borderTop: '17px solid #5f0937',
        // backgroundColor: '#5f0937',
    },
    title: {
        padding: '80px 10px 10px',
    },
    // typography: {
    //     color: 'white',
    // },

    flexView: {
        display: 'flex',
    },
    abstract: {
        padding: '10px 30px 10px',
    },
}

class PresentationInfo extends Component {


    render() {
        const { classes } = this.props;
        const abstractText = 'body2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur' +
        'unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam' +
        'dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.';
        
        
        return (
        <div>
            <div className={classes.hero}>
                <div className={classes.title}>

                <Typography className={classes.typography} component="h2" variant="headline" gutterBottom>
                    Introduktion gill att testa REST API:er med Postman
                </Typography>
                </div>

            </div>
            <Speaker />

            <span className={classes.flexView}>
            <TimeIcon />
            <Typography variant="overline" gutterBottom>
                 9.30 - 10.00 
            </Typography>
            </span>
            <span className={classes.flexView}>
            <RoomIcon />
            <Typography variant="overline" gutterBottom>
                Salongen
            </Typography>
            </span>

            <Abstract abstract={abstractText}/>


        </div>
        );
    }
}



function Abstract(props) {

    return (
        <div>
            <Typography variant="body2" gutterBottom>
                {props.abstract}
            </Typography>
        </div>
    )
}

export default withStyles(styles)(PresentationInfo);