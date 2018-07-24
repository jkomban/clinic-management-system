import { Drawer, Divider } from '@material-ui/core'
import React from 'react'
import MenuItem from '../MenuItem/MenuItem'
import { Dashboard, Assignment, ExitToApp } from '@material-ui/icons'

// const sideDrawerStyle = {
//     oneStlyle: {
//         color: 'blue',
//         width: 250
//     }
// }

export const SideDrawer = ({ open, toggleDrawer }) => {
    console.log(`Inside sidedrawer ${JSON.stringify(open)} ${JSON.stringify(toggleDrawer)}`)
    return (
        <Drawer open={open} onClose={() => { toggleDrawer(false) }} >
            <MenuItem
                listIcon={<Dashboard />}
                listText='Dashboard'
                routePath={'/dashboard'}
                toggleDrawer={toggleDrawer}>
            </MenuItem>
            <Divider />
            <MenuItem
                listIcon={<Assignment />}
                listText='Appointments'
                routePath={'/appointments'}
                toggleDrawer={toggleDrawer}>
            </MenuItem>
            <Divider />
            <MenuItem
                listIcon={<ExitToApp />}
                listText='Exit'
                routePath={'/logout'}
                toggleDrawer={toggleDrawer}>
            </MenuItem>
        </Drawer>
    )
}
