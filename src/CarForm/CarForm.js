import React from 'react';
import "./CarForm.css"

class CarForm extends React.Component {
    constructor(props) {
        super(props);
    }
    // handleData(data) {
    //     fetch('http://api.carmd.com/v3.0/year', {
    //         method: 'GET',
    //         headers: {

    //             "content-type": "application/json",
    //             "authorization": "Basic M2JhZGU3ODYtOTUwYi00YzA3LWI2NGYtNjIzZWUzMTcyMDFj",
    //             "partner-token": "704b94e43de74b549366d3c2a58645be"

    //         }
    //     })
    //         .then(response => response.json())
    //         .then(response => console.log(response))

    // }
    onSubmit(event) {
        event.preventDefault();
        const { year, make, model } = event.target;
        // console.log(year.value, make.value, model.value)
        fetch('http://localhost:8080/api/cars', {
            method: "post",
            headers: {
                "Content-Type": "application/json",
                authorization: "bearer " + localStorage.authToken
            },
            body: JSON.stringify({
                vehicle: {
                    year: year.value,
                    make: make.value,
                    model: model.value
                }
            })
        })
            .then(response => response.json())
            .then(response =>
                console.log(response),
                window.location = '/profile')
    }
    render() {

        return (
            <div className="form-container">
                <form className="car-form" onSubmit={e => this.onSubmit(e)}>
                    <ul class="flex-outer">
                    <li>
                    <label for="year">Year</label>
                    <input type="number" for="year" name="year" required/>
                    </li>
                    <li>
                    <label for="make">Make</label>
                    <input type="text" for="make" name="make" required/>
                    </li>
                    <li>
                    <label for="model">Model</label>
                    <input for="model" type="text" name="model" required/>
                    </li>
                    <button className="car-submit" type="submit">Submit</button>
                    </ul>
                </form>
            </div>
        )
    }
}

export default CarForm;