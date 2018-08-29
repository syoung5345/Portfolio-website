import React from 'react';
import { withStyles } from '@material-ui/core/styles';

import { 
    Typography,
    Grid,
    IconButton
} from '@material-ui/core';
import Intro from '../Intro/Intro';
import DownArrow from '../UI/Arrow/DownArrow';
import { HashLink as Link } from 'react-router-hash-link'; 


const styles = theme => ({
    content: {
        maxWidth: 800,
        margin: '0 auto',
        padding: `${theme.spacing.unit * 8}px 0 ${theme.spacing.unit * 6}px`,
    },
    social: {
        marginBottom: theme.spacing.unit * 4,
    },
    [theme.breakpoints.down('sm')]: {
        margin: theme.spacing.unit * 8
    },
    spacing: {
      marginTop: theme.spacing.unit * 16,
    },
});

const about = (props) => {
    const { classes } = props;
    return (
        <div id="about">
          <div className={classes.content}>
            <Intro />
            <Link component={Link} to="/#aboutParagraph"><DownArrow /></Link>
            <div id="aboutParagraph" className={classes.spacing}>
              <Typography variant="display3" color="textPrimary" gutterBottom>
                About
              </Typography>
              <Typography variant="title" align="left" color="textSecondary" paragraph>
                Something short and leading about the collection below—its contents, the creator, etc.
                Make it short and sweet, but not too short so folks don&apos;t simply skip over it
                entirely.<br /><br />
                Something short and leading about the collection below—its contents, the creator, etc.
                Make it short and sweet, but not too short so folks don&apos;t simply skip over it
                entirely.Something short and leading about the collection below—its contents, the creator, etc.
                Make it short and sweet, but not too short so folks don&apos;t simply skip over it
                entirely.
              </Typography>
              <div className={classes.spacing}>
                <Link component={Link} to="/#portfolio"><DownArrow /></Link>
              </div>
            </div>
          </div>
        </div>
    );
}

export default withStyles(styles)(about);