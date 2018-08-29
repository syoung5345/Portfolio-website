import React from 'react';

import { 
    withStyles,
    GridList,
    GridListTile
} from '@material-ui/core';
import ImageOverlay from '../../ImageOverlay/ImageOverlay';
import imageData from '../../../assets/tileData';

const styles = theme => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        minWidth: 300,
        width: '100%',
        // overflow: 'hidden',
        // justifyContent: 'space-around',
        // backgroundColor: theme.palette.background.paper,
      },
});

const portfolioItems = ( props ) => {
    const { classes } = props;
    return (
        <div className={classes.root}>
            {/* <GridList cellHeight={160} cols={3} className={classes.gridList}> */}
                {imageData.map( image => (
                    // <GridListTile key={image.title} cols={image.cols || 1}>
                        <ImageOverlay 
                            key={image.title}
                            imgTitle={image.title}
                            imgWidth={image.width}
                            imgUrl={image.img} />
                    // </GridListTile>
                ))} 
            {/* </GridList> */}
        </div>
    );
}

export default withStyles(styles)(portfolioItems);