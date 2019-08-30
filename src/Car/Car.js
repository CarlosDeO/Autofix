import React from 'react'
import { NavLink, Link } from "react-router-dom"; 
import './Car.css'

export default class Car extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            confirm: false
        }
    }
    render() {
        let button;
        if (this.state.confirm) {
            button = (
                <div className="button-container">
                    <button onClick={() => this.handleDelete(this.props.car._id)} className='car-delete-yes' type='button'>
                        {/* <FontAwesomeIcon icon='trash-alt' /> */}
                        {' '}
                        yes
                         </button>
                    <button onClick={() => this.setState({ confirm: false })} className='car-delete-no' type='button'>
                        {/* <FontAwesomeIcon icon='trash-alt' /> */}
                        {' '}
                        no
                         </button>
                </div>
            )
        }
        else {
            button = (
                <button onClick={() => this.setState({ confirm: true })} className='car-delete' type='button'>
                    {/* <FontAwesomeIcon icon='trash-alt' /> */}
                    {' '}
                    remove
                    </button>
            )
        }
        return (

            <li
        
                to={`/cars/${this.props.car._id}`}
                key={this.props.car._id}
                className="car-item"
            >
                <NavLink className="nav-link" to={`/cars/${this.props.car._id}`}>
                    
                    {this.props.car.vehicle.year}
                    {' '}
                    {this.props.car.vehicle.make}
                    {' '}
                    {this.props.car.vehicle.model}

                </NavLink>
                {button}
            </li>

        );
            
        
    }
}

