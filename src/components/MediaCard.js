import React from 'react';
import { withStyles } from '@material-ui/core/styles';

import {
    Card,
    CardActions,
    CardContent,
    CardMedia,
    Typography,
    Button
} from '@material-ui/core';

import Butt from './UI/Button/Button';


const styles = theme => ({
    // wrapper: {  
    //     '&:hover': {
    //         opacity: 1.5
    //     }
    // },
    card: {
        '&:hover': {
            boxShadow: '0 4px 5px #808080'
        }
    },
    cardMedia: {
        height: 0,
        paddingTop: '56.25%',
    }
});

const card = ( props ) => {
    const { classes } = props;
    return (
        // <div className={classes.wrapper}>
            <Card className={classes.card}>
                <CardMedia 
                    className={classes.cardMedia}
                    image={props.src}
                    title={props.mediaTitle} />
                <CardContent>
                    <Typography gutterBottom variant="headline" component="h2">
                        {props.title}
                    </Typography>
                    <Typography>
                        {props.content}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button 
                        onClick={props.clicked}
                        variant="contained"
                        color="secondary"
                        fullWidth>{props.btnText}</Button>
                    {/* <Butt>
                        {props.btnText}
                    </Butt> */}
                </CardActions>
            </Card>
        // </div>
    );
}

export default withStyles(styles)(card);