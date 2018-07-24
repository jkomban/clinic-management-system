import { AppBar, Toolbar, Typography, IconButton } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'
import MenuIcon from '@material-ui/icons/Menu'
import React, { Component } from 'react'
import toggleSideDrawer from '../../actions/sidedrawer-actions'
import { SideDrawer } from '../SideDrawer/SideDrawer'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

const styles = {
    root: {
        flexGrow: 1,
    },
    flex: {
        flex: 1
    },
    menuButton: {
        marginLeft: -12
    },
};

class Header extends Component {
    state = {
        isOpen: false
    }

    toggleSideMenu = (isOpen) => {

        console.log(`Header.jsx:toggleSideMenu() - Clicked ${isOpen} [${JSON.stringify(this.props.drawerState)}]`)
        // console.log(this.props)
        this.props.toggleSideDrawer(isOpen)
        // this.setState(state => { isOpen: !state.isOpen })
        // console.log(`Header.jsx:toggleSideMenu() - Clicked ${this.state.isOpen}`)
    }
    render() {
        const { classes } = this.props
        return (
            <AppBar position="static">
                <Toolbar>
                    <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
                        <MenuIcon onClick={() => { this.toggleSideMenu(true) }} />
                    </IconButton>
                    <Typography variant="title" color="inherit" className={classes.flex}>
                        -  Management System
                    </Typography>
                    {/* <Button color="inherit">Login</Button> */}
                </Toolbar>
                <SideDrawer open={this.props.drawerState.isOpen} toggleDrawer={this.toggleSideMenu} />
            </AppBar>
        )
    }
}

function mapStateToProps(state) {
    console.log(`Header.jsx:mapStatetoProps() - ${JSON.stringify(state)}`)
    return state
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        toggleSideDrawer
    }, dispatch)
}


export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(Header))