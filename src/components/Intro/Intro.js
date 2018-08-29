import React from 'react';
import { withStyles } from '@material-ui/core/styles';

import { 
    Typography,
    Grid,
    IconButton
} from '@material-ui/core';


const styles = theme => ({
    heroUnit: {
        backgroundColor: theme.palette.background.paper,
    },
    heroContent: {
        maxWidth: 600,
        margin: '0 auto',
        padding: `${theme.spacing.unit * 8}px 0 ${theme.spacing.unit * 6}px`,
    },
    heroSocial: {
        marginBottom: theme.spacing.unit * 4,
    },
    [theme.breakpoints.down('sm')]: {
        margin: theme.spacing.unit * 8
    },
    spacing: {
      marginTop: theme.spacing.unit * 8,
    }
});

const intro = (props) => {
    const { classes } = props;
    return (
        <div id="intro" className={classes.heroUnit}>
          <div className={classes.heroContent}>
            <div className={classes.spacing}>
              <Typography variant="display3" align="center" color="textPrimary" gutterBottom>
                Samuel Young
              </Typography>
            </div>
            <Typography variant="display1" align="center" gutterBottom>
              Designer | Developer | Adventurer
            </Typography>
            <div className={classes.heroSocial}>
              <Grid container spacing={16} justify="center">
                <Grid item>
                  <IconButton variant="outlined" color="secondary">
                    <i className="fab fa-github"></i>
                  </IconButton>
                </Grid>
                <Grid item>
                  <IconButton variant="outlined" color="secondary">
                    <i className="fab fa-linkedin"></i>
                  </IconButton>
                </Grid>
                <Grid item>
                  <IconButton variant="outlined" color="secondary">
                    <i className="fab fa-facebook"></i>
                  </IconButton>
                </Grid>
                <Grid item>
                  <IconButton variant="outlined" color="secondary">
                    <i className="fab fa-pinterest"></i>
                  </IconButton>
                </Grid>
              </Grid>
            </div>
          </div>
        </div>
    );
}

export default withStyles(styles)(intro);