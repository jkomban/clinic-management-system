import { AppBar, Button, TextField, Typography, Toolbar } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'

import React, { Component } from 'react'
import { Link, BrowserRouter, Redirect } from 'react-router-dom'
import fakeAuth from '../../services/auth/fakeAuth'

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
    state = {
        isLoggedIn: false,
    }

    componentDidMount() {
        console.log(`Login.jsx:componentDidMount- ${fakeAuth.isAuthenticated} ${this.state.isLoggedIn}`)
    }

    handleClick = async (e) => {
        console.log(`Login.jsx:handleClick -  ${fakeAuth.isAuthenticated} ${this.state.isLoggedIn}`)
        await fakeAuth.authenticate()
        this.setState({ isLoggedIn: true })
        console.log(`Login.jsx:handleClick - ${fakeAuth.isAuthenticated} ${this.state.isLoggedIn}`);

    }

    render() {
        const { classes } = this.props;
        // console.log(classes)
        let myLoginForm = <form>
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
                        className={classes.submitButton}
                        onClick={this.handleClick}>
                        Submit
                </Button>
                </div>
            </div >
        </form>
        if (this.state.isLoggedIn === true)
            return <Redirect to='/dashboard' />
        else
            return myLoginForm


    }

}

export default withStyles(loginStyles)(Login)
