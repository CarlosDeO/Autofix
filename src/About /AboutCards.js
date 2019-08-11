import React from 'react';

class AboutCards extends React.Component {
    render() {

        return (
            <div className="about-cards-container">
                <div className="about-card">
                    {/* <img className="about-icon" role="presentation" src="assets/images/review.png" /> */}
                    <h3>Lorem ipsum dolor</h3>
                    <hr className="short-line cards-line" />
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ullamcorper aliquet ex,
                         id condimentum lorem bibendum vitae. Duis at neque purus. Donec lacinia massa quis torto.</p>
                </div>
                <div className="about-card">
                    {/* <img className="about-icon" role="presentation" src="assets/images/filter.png" /> */}
                    <h3>Lorem ipsum dolor</h3>
                    <hr className="short-line cards-line" />
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ullamcorper aliquet ex,
                         id condimentum lorem bibendum vitae. Duis at neque purus. Donec lacinia massa quis torto.</p>
                </div>
                <div className="about-card">
                    {/* <img className="about-icon" role="presentation" src="assets/images/local.png" /> */}
                    <h3>Lorem ipsum dolor</h3>
                    <hr className="short-line cards-line" />
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ullamcorper aliquet ex,
                         id condimentum lorem bibendum vitae. Duis at neque purus. Donec lacinia massa quis torto. </p>
                </div>
            </div>
        );

    }
}

export default AboutCards;