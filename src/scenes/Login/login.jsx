import { AppBar, Button, TextField, Typography, Toolbar } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'
import authenticate from '../../actions/login-actions'
import { setUserSession } from '../../actions/usersession-action'

import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

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
        user: '',
        pass: '',
        userSession: {
            isAuthenticated: false
        },
        loginState: {}
    }

    componentDidMount() {
        // console.log(`Login.jsx:componentDidMount- ${fakeAuth.isAuthenticated} ${this.state.isLoggedIn}`)
    }
    updateState = (event, stateProp) => {
        console.log(`updateState ${this.state}`)
        this.setState({
            [stateProp]: event.target.value
        })
    }

    handleClick = async (e) => {
        console.log(`calling authenticate`)
        const result = await this.props.authenticate(this.state.user, this.state.pass)
        console.log(`Currrent State before calling setUserSession ${JSON.stringify(this.state)}`)
        await this.props.setUserSession(result)
        console.log(`login.jsx:handleClick() - current props ${JSON.stringify(this.props)}`)
        console.log(`login.jsx:handleClick() - result of handleClick ${JSON.stringify(result)}`)
        console.log(`login.jsx:handleClick() - currentState  is ${JSON.stringify(this.state)}`)
        // this.setState({
        //     userSession: {
        //         isAuthenticated: true
        //     }
        // })
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
                    className={classes.textField}
                    onChange={event => this.updateState(event, 'user')}
                />
                <TextField
                    placeholder="Enter your Password"
                    label="Password"
                    margin="normal"
                    type="password"
                    className={classes.textField}
                    onChange={event => this.updateState(event, 'pass')}

                />
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
        console.log(`login.jsx:render() state -[${JSON.stringify(this.state)}]`)
        console.log(`login.jsx:render() props -[${JSON.stringify(this.props.userSession)}]`)
        if (this.props.userSession.isAuthenticated === true)
            return <Redirect to='/dashboard' />
        else
            return myLoginForm
    }

}

function mapStateToProps(state) {
    console.log(`login.jsx:mapStatetoProps() - ${JSON.stringify(state)}`)
    return state

}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        authenticate,
        setUserSession
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(loginStyles)(Login))
// export default withStyles(loginStyles)(Login)
