import React from 'react';

import { withStyles, Typography } from '@material-ui/core';

const styles = theme => ({
    footer: {
        backgroundColor: '#eee',
        padding: theme.spacing.unit * 2,
        marginTop: theme.spacing.unit * 6
    },
    spacing: {
        padding: theme.spacing.unit * 2
    }
});

const footer = ( props ) => {
    const { classes } = props;
    return (
        <footer className={classes.footer}>
            <Typography 
                variant="subheading" 
                component="p" 
                color="textSecondary"
                align="center"
                className={classes.spacing}>
                &copy; Samuel Young 2018
            </Typography>
        </footer>
    );
}

export default withStyles(styles)(footer);