import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
// import fakeAuth from '../../services/auth/fakeAuth'
import Header from '../../containers/Header/Header'
import { resetUserSession } from '../../actions/usersession-action'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

class Dashboard extends Component {
    state = {
        isLoggedIn: true
    }
    handleClick = async () => {
        console.log(`Clicked... ${this.state.isLoggedIn}`)
        await this.props.resetUserSession()

    }
    render() {
        console.log(`Dashboard.jsx render called ${this.state.isLoggedIn}`)
        if (this.props.userSession.isAuthenticated === true)
            return <div><Header /> <h1> Inside dashboard </h1> <button onClick={this.handleClick}> logout </button></div>
        else
            return <Redirect to='/login' />
    }
}

function mapStateToProps(state) {
    console.log(`dashboard.jsx:mapStateToProps() - ${JSON.stringify(state)}`)
    return state
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ resetUserSession }, dispatch)
}


export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)
