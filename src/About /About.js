import React from 'react';
import {Link} from 'react-router-dom';
import { hashHistory } from 'react-router';
import AboutHeader from './AboutHeader';
import AboutCards from './AboutCards';
import './About.css'

class About extends React.Component {
    render() {
        return (
            <div className="about-page">
                <AboutHeader />
                <AboutCards />
                <Link className="enter-app-link" to="/login">Sign In;</Link>
            </div>
        )
    }
}

export default About;

