import React from 'react';
import {Link} from 'react-router-dom';
import config from '../config'; 
import AboutHeader from './AboutHeader';
import AboutCards from './AboutCards';
import './About.css'

class About extends React.Component {
    render() {
        return (
            <div className="about-page">
                <AboutHeader />
                <AboutCards {...this.props}  />
                <Link className="signin-button" to="/login">Sign In</Link>
            </div>
        )
    }
}

export default About;

