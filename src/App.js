import React from 'react';
import { Route, Link } from 'react-router-dom'
import AppContext from './AppContext';
import HomePage from './HomePage/HomePage'
import Login from './Login/Login';
import Profile from './Profile/Profile'
import STORE from './STORE';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      cars: STORE.Cars,
      fixes: [],
      selectedCar: '',
      selectedFix: ''
    }
  }
  handleSubmit(event) {
    event.preventDefault();
  }
  setUserName = (value) => {
    this.setState({ username: value })
  }
  render() {
    const contextValue = {
      username: this.state.username,
      setUserName: this.setUserName,
      cars: this.state.cars
    }
    return (
      <AppContext.Provider value={contextValue}>
        <main className='App'>
          <Route exact
            path='/'
            component={HomePage} />
          <Route
            path='/login'
            component={Login} />
          <Route
            path='/profile'
            component={Profile} />
        </main>
      </AppContext.Provider>
    );
  }
}

export default App;