import React from 'react'
import {
    Route,
    Switch
} from 'react-router-dom'
import Login from './scenes/Login'
import Dashboard from './scenes/dashboard'
import PrivateRoute from './components/PrivateRoute/PrivateRoute'

const routes = () => {
    return (
        <Switch>
            {/* <Route exact={true} path='/' component={Login} /> */}
            <Route path='/login' component={Login} />
            <PrivateRoute path='/dashboard' component={Dashboard} />
            <Route exact={true} path='/' component={Login} />
        </Switch>
    )
}


export default routes
