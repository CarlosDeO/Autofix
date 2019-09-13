import React from 'react';
import { Link } from "react-router-dom";
import AppContext from '../AppContext';
import './RegisteredList.css'
import Car from '../Car/Car'
import config from '../config';

class RegisteredList extends React.Component {
    static contextType = AppContext;
    constructor(props) {
        super(props);
        this.state = {
            confirm: {}
        }
    }
    handleDelete(id) {

        fetch(config.API_ENDPOINT + `/api/cars/${id}`, {
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
                <Car key={car._id} handleDelete={(id) => this.handleDelete(id)} car={car} />
            )
        });

        return (
            <div className="car-wrapper">


                <h1 className="car-title">Cars</h1>
                <ul className="car-list">
                    {cars}
                    <Link to='/form' className="add-car">Add Car</Link>
                </ul>



            </div>
        );
    }
}

export default RegisteredList;