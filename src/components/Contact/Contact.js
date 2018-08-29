import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';

import {
    Paper,
    Typography,
    Button,
    TextField,
    Card,
    CardActions,
    CardContent
} from '@material-ui/core';

const styles = theme => ({
    root: {
      margin: theme.spacing.unit * 3,
      padding: theme.spacing.unit * 3,
      maxWidth: 300
    },
    form: {
      display: 'flex',
      alignItems: 'baseline',
      justifyContent: 'center'
    }
  });

class contact extends Component {
    state = {
        email: ''
      }
    
      handleFormSubmit = event => {
        event.preventDefault();
    
        if (this.state.email) {
          this.setState({ email: event.target.value }); 
        }
      }
    
      handleInputChange = ( { target: { email}}) => {
        this.setState({ email: email });
      }

    render() {
        const { classes } = this.props;
        return (
            <Card classes={classes.root}>
                <Typography 
                    variant="display1"
                    align="center"
                    gutterBottom>Contact</Typography>
                <CardContent>
                    <form 
                        className={classes.form}
                        onSubmit={this.props.handleSubmit}>
                        <TextField 
                            margin="normal"
                            value={this.props.email}
                            name="email"
                            label="Email"
                            onChange={this.props.handleChange} />
                    </form>
                </CardContent>
                <CardActions>
                    <Button 
                        type="submit"
                        color="primary"
                        variant="raised">Submit</Button>
                </CardActions>
            </Card>
        );
    }
}

export default withStyles(styles)(contact);