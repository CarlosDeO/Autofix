import React from 'react';
import { Route, Link } from 'react-router-dom'
import AppContext from './AppContext';
import HomePage from './HomePage/HomePage';
import Login from './Login/Login';
import Profile from './Profile/Profile';
import CarForm from './CarForm/CarForm';
import FixForm from './FixForm/FixForm';
import STORE from './STORE';
import FixList from './FixList/FixList';



class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      cars: [],
      fixes: [],
      selectedCar: '',
      selectedFix: ''
    }
  }
  setCars = (value) => {
   this.setState({ cars: value})
  }
  setUserName = (value) => {
    this.setState({ username: value })
  }
  render() {
    const contextValue = {
      username: this.state.username,
      setCars: this.setCars,
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
          <Route exact
            path='/profile'
            render={() => (
              <Profile 
               selectedCar={this.state.selectedCar}/>
            )}
             />
          <Route 
            path='/form'
            component={CarForm}
          />
          <Route 
            path='/cars/:carsId'
            component={FixList}/>
          <Route 
            path='/fix-form/:carsId'
            component={FixForm}
          />
        </main>
      </AppContext.Provider>
    );
  }
}

export default App;