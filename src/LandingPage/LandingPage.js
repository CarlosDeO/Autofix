import React, { Component } from 'react';
import './LandingPage.css'

class LandingPage extends Component {
    render() {
        return (
            <div className="landingpage-container">
			<div className="landingpage-details-container">
				<h1 className="welcome-header">AutoFix</h1>
				<h2>Keep track of all of your Auto fixs</h2>
			</div>
			<div className="homepage-scroll-container">
				<img className="homepage-scroll-arrow" role="none" alt="pointer" src="https://raw.githubusercontent.com/hjmccain/maplyful/gh-pages/client/assets/images/scroll-arrow.png" />
			</div>
		</div>
        )
    }
}

export default LandingPage;