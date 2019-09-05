import React from 'react';
import Header from '../Header/Header';
import "./CarForm.css"
import config from '../config';

class CarForm extends React.Component {
    onSubmit(event) {
        event.preventDefault();
        const { year, make, model } = event.target;
        // console.log(year.value, make.value, model.value)
        fetch(config.API_ENDPOINT +'/api/cars', {
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
            .then(response => {
                console.log(response);
                this.props.history.push('/profile');
            })
    }
    render() {

        return (
         <>
          <Header {...this.props}/>
            <div className="car-form-container">
                
                <form className="car-form" onSubmit={e => this.onSubmit(e)}>
                    <ul class="flex-outer">
                    <li>
                    <label for="year">Year</label>
                    <input type="number" id="year" name="year" required/>
                    </li>
                    <li>
                    <label for="make">Make</label>
                    <input type="text" id="make" name="make" required/>
                    </li>
                    <li>
                    <label for="model">Model</label>
                    <input id="model" type="text" name="model" required/>
                    </li>
                    <button className="car-submit" type="submit">Submit</button>
                    </ul>
                </form>
            </div>
            </>
        )
    }
}

export default CarForm;


// add config