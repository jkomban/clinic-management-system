import { ListItem, ListItemText, ListItemIcon } from '@material-ui/core'
import { Link } from 'react-router-dom'
import React from 'react'

const MenuItem = ({ routePath, listIcon, listText, toggleDrawer }) => {
    return (
        <Link to={routePath} style={{ textDecoration: 'none' }}>
            <ListItem button onClick={() => { toggleDrawer(false) }}>
                <ListItemIcon>{listIcon}</ListItemIcon>
                <ListItemText>{listText}</ListItemText>
            </ListItem>
        </Link>
    )
}

export default MenuItem