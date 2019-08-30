import React from 'react';
import RegisteredList from '../RegisteredList/RegisteredList'
import FixList from '../FixList/FixList'
import { Route, Link } from 'react-router-dom'
import App from '../App';
import AppContext from '../AppContext';



class Profile extends React.Component {
    static contextType = AppContext;
    componentDidMount() {
        this.getCars();
        // fetch('http://localhost:8080/api/cars', {
        //     method: "Get",
        //     headers: {
        //         "Content-Type": "application/json",
        //         authorization: "bearer " + localStorage.authToken
        //     }
        // })
        //     .then(response => response.json())
        //     .then(data => {
        //         console.log(data)
        //         this.context.setCars(data)
        //     })
      
    }
    getCars = () => {
        fetch('http://localhost:8080/api/cars', {
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
        // const username = this.props.username;
        return (
            <div>
                {/* <h3>{username}</h3> */}
                <RegisteredList getCars={this.getCars} />
                {/* <FixList /> */}
            </div>
        )
    }
}

export default Profile;