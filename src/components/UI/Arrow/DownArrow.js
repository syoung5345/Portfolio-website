import React from 'react';

import { 
    withStyles,
    Grid,
    IconButton
} from '@material-ui/core';

const styles = theme => ({
    downArrow: {
        '&:hover': {
            color: 'black',
            backgroundColor: '',
        },
    },
});

const downArrow = ( props ) => {
    const { classes } = props;
    return (
        <Grid container justify='center' spacing={8}>
            <Grid item> 
                <IconButton className={props.classes.downArrow}>
                    <i className="fas fa-angle-down"></i>
                </IconButton>
            </Grid>
        </Grid>
    );
};

export default withStyles(styles)(downArrow);