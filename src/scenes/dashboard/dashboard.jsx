import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
// import fakeAuth from '../../services/auth/fakeAuth'
import Header from '../../containers/Header/Header'
// import { resetUserSession } from '../../actions/login-actions'
class Dashboard extends Component {
    state = {
        isLoggedIn: true
    }
    handleClick = async () => {
        console.log(`Clicked... ${this.state.isLoggedIn}`)
        // await fakeAuth.logout()
        // this.setState({ isLoggedIn: false })

    }
    render() {
        console.log(`Dashboard.jsx render called ${this.state.isLoggedIn}`)
        if (this.state.isLoggedIn === true)
            return <div><Header /> <h1> Inside dashboard </h1> <button onClick={this.handleClick}> logout </button></div>
        else
            return <Redirect to='/login' />
    }
}

export default Dashboard
