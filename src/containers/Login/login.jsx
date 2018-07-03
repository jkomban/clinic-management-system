import { AppBar, Button, TextField, Typography, Toolbar } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'

import React, { Component } from 'react'

const loginStyles = theme => ({
    container: {
        padding: '5px'
    },
    root: {
        display: 'flex',
        flexDirection: 'column',
        width: '30em',
        margin: 'auto',
        marginTop: '5em',
        boxShadow: '4px 2px 11px 2px rgba(0,0,0,0.25)'
    },
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
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
        margin: '1px'
    },
});

class Login extends Component {

    render() {
        const { classes } = this.props;
        // console.log(classes)
        return (
            <form>
                <div className={classes.root}>
                    <AppBar position="static">
                        <Toolbar
                            color="primary">
                            <Typography
                                variant="title"
                                color="inherit"
                                className={classes.flex}>Login
                        </Typography>
                        </Toolbar>
                    </AppBar>
                    <TextField
                        placeholder="Enter your Username"
                        label="Username"
                        className={classes.textField} />
                    <TextField
                        placeholder="Enter your Password"
                        label="Password"
                        margin="normal"
                        type="password"
                        className={classes.textField} />
                    <div className={classes.buttonRoot}>
                        <Button
                            label="Cancel"
                            variant="outlined"
                            color="secondary"
                            size="large"
                            className={classes.submitButton} >
                            Cancel
                    </Button>
                        <Button
                            label="Submit"
                            variant="raised"
                            color="primary"
                            size="large"
                            className={classes.submitButton} >
                            Submit
                    </Button>
                    </div>

                </div >
            </form>

        );
    }

}

export default withStyles(loginStyles)(Login)
