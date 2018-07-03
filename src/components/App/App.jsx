import React, {
  Component
} from 'react';
// import logo from '../../resources/logo.svg';
import './App.css';
import { Login } from '../../containers/Login'
import Header from '../../containers/Header/Header'

class App extends Component {
  render() {
    // console.log(Login)
    return (
      <div className="App" >
        {/* <Header /> */}
        <Login />
      </div>
    );
  }
}

export default App;