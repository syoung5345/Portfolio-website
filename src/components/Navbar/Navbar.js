import React from 'react';
import PropTypes from 'prop-types';

import { 
    AppBar,
    Toolbar,
    Typography,
    Button,
    IconButton,
    withStyles
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

import { HashLink as Link } from 'react-router-hash-link';


const styles = theme =>  ({
    root: {
        flexGrow: 1,
    },
    flex: {
        flexGrow: 1
    },
    menuButton: {
        marginLeft: -12,
        marginRight: 20,
    },
    appBar: {
        padding: theme.spacing.unit,
        backgroundColor: 'transparent',
        boxShadow: 'none',
    },
    scroll: {

    }
    
});

window.onscroll = () => {
    // const nav = document.getElementById('navbar');
    // console.log(document.body);
    // if (this.scrollY <= 10 ) {
    //     nav.className = '';
    // }
    // else {
    //     nav.className = 'scroll';
    // }
    if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 30) {
        document.getElementById("navbar").style.display = 'none';
    }
    else {
      document.getElementById("navbar").style.color = 'white';
    }
}

const navbar = (props) => {
    const { classes } = props;
    return (
        <header id="navbar" className={classes.root}>
            <AppBar position="fixed" className={props.classes.appBar}>
                <Toolbar>
                    <IconButton 
                        className={classes.menuButton} 
                        color="inherit" 
                        aria-label="Menu"
                        component={Link}
                        to="/"
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography 
                        variant="title" 
                        color="inherit" 
                        className={classes.flex} 
                        noWrap
                    >
                        Samuel Young
                    </Typography>
                    <Button color="inherit" component={Link} to="/#about">About</Button>
                    <Button color="inherit"component={Link} to="/#portfolio">Portfolio</Button>
                </Toolbar>
            </AppBar>
        </header>
    );
}

navbar.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(navbar);