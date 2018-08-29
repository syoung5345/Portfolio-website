import React from 'react';

import {
    withStyles,
    Card,
    CardContent
} from '@material-ui/core';
import Logo from '../Logo/Logo';

const styles = theme => ({
    hero: {
        backgroundColor: '#212121',
        height: '100%',
        width: '100%',
        maxheight: 600,
        maxwidth: 50,
        padding: theme.spacing.unit * 8,
    },
});

const hero = ( props ) => {
    const { classes } = props;
    return (
        <div>
            <Logo />  
        </div>
    );
};

export default withStyles(styles)(hero);