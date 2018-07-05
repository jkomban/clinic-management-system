import React, {
  Component
} from 'react';
// import logo from '../../resources/logo.svg';
import { BrowserRouter } from 'react-router-dom'
import './App.css';
import AppTheme from '../../theme/theme'
// import { Login } from '../../scenes/Login'
// import AppRoutes from '../../routes'

class App extends Component {
  render() {
    console.log(`Inside App.jsx ${JSON.stringify(this.props)}`)
    return (
      <AppTheme>
        <BrowserRouter basename='/'>
          {this.props.children}
        </BrowserRouter>
      </AppTheme>
    );
  }
}

export default App;