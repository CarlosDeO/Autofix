import React, { Component } from 'react';
import LandingPage from '../LandingPage/LandingPage'
import About from '../About /About'


class HomePage extends Component {
    render() {
        return (

            <div>
                <LandingPage />
                <About {...this.props} />
            </div>

        );
    }
}

export default HomePage;