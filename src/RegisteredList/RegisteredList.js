import React from 'react';
import { NavLink, Link } from "react-router-dom";
import AppContext from '../AppContext';
import './RegisteredList.css'
import Car from '../Car/Car'

class RegisteredList extends React.Component {
    static contextType = AppContext;
    constructor(props) {
        super(props);
        this.state = {
            confirm: {}
        }
    }
    handleDelete(id) {

        fetch(`http://localhost:8080/api/cars/${id}`, {
            method: "delete",
            headers: {
                "Content-Type": "application/json",
                authorization: "bearer " + localStorage.authToken
            }
        })
            .then(() => this.props.getCars())
    }

    render() {
        
        const cars = this.context.cars.map(car => {
            return (
                <Car car={car} /> 
            )
        });

        return (
            <div className="car-wrapper">

                {/* <div className="folderList"> */}
                <h1 className="car-title">Cars</h1>
                <ul className="car-list">
                    {cars}

                    <Link to='/form' className="add-car">Add Car</Link>
                </ul>
                {/* <Link to='/form' className="addCar">Add Car</Link> */}
                {/* </div> */}
            </div>
        );
    }
}

export default RegisteredList;