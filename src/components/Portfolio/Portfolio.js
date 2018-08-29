import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import classNames from 'classnames';

import { 
    Typography,
    Grid,
    Modal
} from '@material-ui/core';
import MediaCard from '../MediaCard';
import tileData from '../../assets/tileData';
import DownArrow from '../UI/Arrow/DownArrow';

const styles = theme => ({
    layout: {
        width: 'auto',
        marginLeft: theme.spacing.unit * 3,
        marginRight: theme.spacing.unit * 3,
        [theme.breakpoints.up(1100 + theme.spacing.unit * 3 * 2)]: {
          width: 1100,
          marginLeft: 'auto',
          marginRight: 'auto',
        },
    },
    cardGrid: {
        padding: `${theme.spacing.unit * 8}px 0`,
    },
    cardMedia: {
        paddingTop: '56.25%', // 16:9
    },
    spacing: {
        margin: theme.spacing.unit * 8
    },
    arrowSpacing: {
        marginTop: theme.spacing.unit * 16
    }
});

class Portfolio extends Component {
    state = {
        open: false,
    }

    handleOpen = () => {
        this.setState({open: true});
    }

    handleClose = () => {
        this.setState({open: false});
    }

    render () {

        if (this.state.open) {
            //display modal
        }
        else {
            //hide modal
        }

        const { classes } = this.props;
        return (
            <div id="portfolio" className={classNames(classes.layout, classes.cardGrid)}>
                <Typography 
                    variant="display2" 
                    align="center" 
                    gutterBottom
                    className={classes.spacing}>
                    Projects
                </Typography>
                <Grid container spacing={40}>
                    {tileData.map( tile => (
                        <Grid item key={tile.title} sm={6} md={6} lg={4}> 
                            <MediaCard 
                                src={tile.img}
                                mediaTitle={tile.title}
                                title={tile.title}
                                content={tile.content}
                                btnText="View"
                                clicked={this.handleOpen} />
                        </Grid>
                    ))}
                </Grid>
                <div className={classes.arrowSpacing}>
                    <DownArrow />
                </div>
                {/* <Typography 
                    variant="display2" 
                    align="center" 
                    gutterBottom>
                    Pictures and other art
                </Typography> */}
            </div>
        );
    }
}

export default withStyles(styles)(Portfolio);