import { Button, TextField, Typography } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'

import React, { Component } from 'react'

const loginStyles = {
    root: {
        display: 'flex',
        flexDirection: 'column',
        width: '300px',
        margin: 'auto',
        marginTop: '5em',
        boxShadow: '4px 2px 11px 2px rgba(0,0,0,0.25)'
    },
    flex: {
        flex: 1,
    },
    buttonRoot: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly'

    },
    submitButton: {
        width: '30%',
        marginTop: '1px'
    },
};

class Login extends Component {

    render() {
        const { classes } = this.props;
        // console.log(classes)
        return (
            <div className={classes.root}>
                <Typography
                    variant="title"
                    color="inherit"
                    className={classes.flex}>
                    Login
                </Typography>
                <TextField
                    placeholder="Enter your Username"
                    label="Username" />
                <TextField
                    placeholder="Enter your Password"
                    label="Password"
                    type="password" />
                <div className={classes.buttonRoot}>
                    <Button
                        label="Cancel"
                        variant="flat"
                        color="secondary"
                        className={classes.submitButton} >
                        Cancel
                    </Button>
                    <Button
                        label="Submit"
                        variant="raised"
                        color="primary"
                        className={classes.submitButton} >
                        Submit
                    </Button>
                </div>

            </div >
        );
    }

}

export default withStyles(loginStyles)(Login)
