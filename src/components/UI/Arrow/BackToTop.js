import React from 'react';

import { 
    Button,
    withStyles
} from '@material-ui/core';

const styles = theme => ({
    fab: {
        margin: theme.spacing.unit,
        position: 'fixed',
        bottom: 20,
        right: 30,
        zIndex: 1500,
        '&:hover': {
            color: '#ccf',
        },
        
    }
});

window.onscroll = function() {
    handleScroll();
}
  
const handleScroll = () => {
    if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 30) {
        document.getElementById("scrollBtn").style.display = 'block';
    }
    else {
      document.getElementById("scrollBtn").style.display = 'none';
    }
}

const topFunction = () => {
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
}

const backToTop = ( props ) => {
    const { classes } = props;
    return (
        <div className={classes.fab}>
            <Button 
                id="scrollBtn"
                variant="fab"
                color="secondary"
                onClick={topFunction}
            >
                <i className="fas fa-angle-double-up"></i>
            </Button>
        </div>
    );
};

export default withStyles(styles)(backToTop);