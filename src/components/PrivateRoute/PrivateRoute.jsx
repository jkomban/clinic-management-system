import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import fakeAuth from '../../services/auth/fakeAuth'

const PrivateRoute = ({ component: Component, ...rest }) => {
    console.log(`Inside PrivateRoute.jsx`);
    return <Route {...rest} render={(props) => {
        // console.log(`Inside of inside private route... ${fakeAuth.isAuthenticated} ${JSON.stringify(props)}`)
        return fakeAuth.isAuthenticated === true
            ? <Component {...props} />
            : <Redirect to='/login' />
    }} />
}

export default PrivateRoute
