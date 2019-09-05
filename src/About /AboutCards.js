import React from 'react';
import config from '../config';

class AboutCards extends React.Component {
    handleDemo() {
        console.log('clicked')
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
            <div className="about-cards-container">
                <div className="about-card">

                    <h3 className="card-title">What is AutoFix?</h3>
                    <hr className="short-line cards-line" />
                    <p className="card-paragraph">
                        AutoFix is a web application that is intended for mechanics to keep a log of all of their client's
                        cars. Aswell the auto repairs that belong to each car. AutoFix is also useful for those car enthusiasts who love to keep track of the maintenance of their car.
                    </p>
                </div>
                <div className="about-card">

                    <h3 className="card-title">What does AutoFix do?</h3>
                    <hr className="short-line cards-line" />
                    <p className="card-paragraph">
                        AutoFix will register as many cars as a user likes and keep a log of their repairs. The repair log consist of the title of the repair, when the repair was
                        done, the cost of the repair and a small description on what was done.
                    </p>
                </div>
                <div className="about-card">

                    <h3 className="card-title">Try demo today!</h3>
                    <hr className="short-line cards-line" />
                    <p className="card-paragraph">
                        Are you still hesitant on signing up? Try our hassle-free working demo today by clicking
                        <a className="demo-link" onClick={() => this.handleDemo()}>&nbsp;Demo</a>
                    </p>
                </div>
            </div>
        );

    }
}

export default AboutCards;