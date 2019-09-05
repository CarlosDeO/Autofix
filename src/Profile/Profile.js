import React from 'react';  
import config from '../config';
import RegisteredList from '../RegisteredList/RegisteredList'
import Header from '../Header/Header';
import AppContext from '../AppContext';




class Profile extends React.Component {
    static contextType = AppContext;
    componentDidMount() {
        this.getCars();
    }
    getCars = () => {
        fetch(config.API_ENDPOINT +'/api/cars', {
            method: "Get",
            headers: {
                "Content-Type": "application/json",
                authorization: "bearer " + localStorage.authToken
            }
        })
            .then(response => response.json())
            .then(data => {
                console.log(data)
                this.context.setCars(data)
            })
    }

    render() {
      
        return (
            
         
            <div className="profile-container">
               
                <Header {...this.props} />
                <RegisteredList getCars={this.getCars} />
              
            </div>
          
        )
    }
}

export default Profile;