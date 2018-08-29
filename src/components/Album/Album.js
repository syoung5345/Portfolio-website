import React from 'react';
import PropTypes from 'prop-types';

import images from '../../assets/tileData';
import './Album.css';
import { 
  withStyles,
  Grid
} from '@material-ui/core';

import './Album.css';

const styles = theme => ({
    // root: {
    //   flexGrow: 1
    // }

});

const album = ( props ) => {
  const { classes } = props;

  return (
    <div className="container">
      {/* {images.map(image => (
        <div>
          <img src={image.img}/>
        </div>
      ))} */}
      <div><img src="./img/normal1.jpg"/></div>
      <div class="vertical"><img src="img/vertical1.jpg"/></div>
      <div class="horizontal"><img src="img/horizontal1.jpg"/></div>
      <div><img src="img/normal2.jpg"/></div>
      <div><img src="img/normal3.jpg"/></div>
      <div class="big"><img src="img/big1.jpg"/></div>
      <div><img src="img/normal4.jpg"/></div>
      <div class="vertical"><img src="img/vertical2.jpg"/></div>
      <div><img src="img/normal5.jpg"/></div>
      <div class="horizontal"><img src="img/horizontal2.jpg"/></div>
      <div><img src="img/normal6.jpg"/></div>
      <div class="big"><img src="img/big2.jpg"/></div>
      <div><img src="img/normal7.jpg"/></div>
      <div class="horizontal"><img src="img/horizontal3.jpg"/></div>
      <div><img src="img/normal8.jpg"/></div>
      <div class="big"><img src="img/big3.jpg"/></div>
      <div><img src="img/normal9.jpg"/></div>
      <div class="vertical"><img src="img/vertical3.jpg"/></div>
    </div>
  );
}

album.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(album);