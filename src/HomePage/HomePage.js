import React, { Component } from 'react';
import LandingPage from '../LandingPage/LandingPage'
import About from '../About /About'
import { StickyContainer } from 'react-sticky';

class HomePage extends Component {
    render() {
		return (
            // <StickyContainer> 
            <div>
				<LandingPage />
				<About />
                </div>
			// </StickyContainer>
		);
	}
}

export default HomePage;