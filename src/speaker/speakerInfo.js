import React from 'react';
import { Card, CardContent, Avatar, Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

import Me from '../images/me.jpg';
const styles = {
    card: {
        width: '90%',
        display: 'flex',
    },
    avatar: {
        margin: 10,
        width: 60,
        height: 60,
    },
    info: {
        display: 'flex',
        
    },
    content: {
        flex: '1 0 auto',
    },
    rightText: {
        flex: '0 0 auto',
    },
};

function SpeakerCard(props) {
    const { classes } = props;
    return(
        <Card className={classes.card}>
            <div className={classes.info}>
                <CardContent className={classes.content}>
                    <Avatar src={Me} className={classes.avatar}/>
                </CardContent>
                <div className={classes.rightText}>
                <Typography component="h5" variant="h5">
                        Fanny Chan
                    </Typography>
                </div>
            </div>
        </Card>
    )
}


export default withStyles(styles)(SpeakerCard);