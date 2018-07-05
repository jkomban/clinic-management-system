import React from 'react'
import {
    createMuiTheme,
    MuiThemeProvider
} from '@material-ui/core/styles'

const greenTheme = createMuiTheme({

    palette: {
        primary: {
            main: '#4CAF50'
        },
        secondary: {
            main: '#FFC107'
        }
    }

})

const appTheme = (props) => {
    return (
        <MuiThemeProvider theme={greenTheme} >
            {props.children}
        </MuiThemeProvider >
    )
}

export default appTheme
