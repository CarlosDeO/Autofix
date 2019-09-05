import React from 'react';
import {Link} from 'react-router-dom';
import config from '../config'; 
import AboutHeader from './AboutHeader';
import AboutCards from './AboutCards';
import './About.css'

class About extends React.Component {
    handleDemo() {
        fetch(config.API_ENDPOINT + '/api/auth/login', {
            method: "post",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                username: "Mike1",
                password: "demo123"
            })
        })
        .then(response => response.json())
        .then(data => {
            localStorage.authToken = data.authToken
            this.props.history.push('/profile')
        })
    }
    render() {
        return (
            <div className="about-page">
                <AboutHeader />
                <AboutCards />
                <Link className="signin-button" to="/login">Sign In</Link>
                <button onClick={() => this.handleDemo()}>demo</button>
            </div>
        )
    }
}

export default About;

