import React from 'react';
import './Login.css';
import AppContext from '../AppContext';
import config from '../config';

class Login extends React.Component {
    static contextType = AppContext;
    constructor(props) {
        super(props);
        this.state = {
            login: true
        }
        this.usernameInput = React.createRef();
        this.passwordInput = React.createRef();
        this.nameInput = React.createRef();
        this.lastNameInput = React.createRef();

    }
    onLogin(value) {
        this.context.setUserName(value);

    }
    toggleHidden() {
        this.setState({ login: !this.state.login })
    }
    registerNewUser(event) {
        event.preventDefault();
        const firstName = this.nameInput.current.value;
        const username = this.usernameInput.current.value;
        const password = this.passwordInput.current.value;
        const lastName = this.lastNameInput.current.value;
        fetch(config.API_ENDPOINT + '/api/users', {
            method: "post",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                username,
                firstName,
                lastName,
                password
            })
        })
            .then(response => response.json())
            .then(() => this.loginUser(event))

    }
    loginUser(event) {
        console.log('clicked');
        event.preventDefault();
        const username = this.usernameInput.current.value;
        const password = this.passwordInput.current.value;
        fetch(config.API_ENDPOINT + '/api/auth/login', {
            method: "post",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                username,
                password
            })
        })
            .then(response => response.json())
            .then(data => {
                localStorage.authToken = data.authToken
                window.location = '/profile'
            })

    }
    render() {
        if (this.state.login) {
            return (
                <section className="signin-register">

                    <form className="signin-form">
                        <h2 className="login-header">Log In</h2>
                        <label for="username"></label>
                        <input
                            className="form-input"
                            id="username"
                            type="text"
                            name="username"
                            placeholder="Username"
                            ref={this.usernameInput}
                            onChange={e => this.onLogin(e.target.value)} />
                        <br /><br />
                        <label></label>
                        <input for="password"
                            className="form-input"
                            id="password"
                            type="password"
                            name="password"
                            placeholder="Password"
                            ref={this.passwordInput}
                        />
                        <br /><br />
                        <button className="login-button" type="submit" onClick={e => this.loginUser(e)}>Log In</button><br /><br />

                        Don't have account?<a onClick={e => this.toggleHidden()} href="#" className="register" >&nbsp;Sign Up</a>

                    </form>
                </section>
            )
        }
        else {
            return (
                <section className="signin-register">
                    <form className="register-form">
                        <h2 className="register-header">Sign Up</h2>
                        <label for="userName"></label>
                        <input className="form-input" id="userName" type="text" name="userName" placeholder="Username" ref={this.usernameInput} /><br /><br />
                        <label for="firstName"></label>
                        <input className="form-input" id="firstName" type="text" name="firstName" placeholder="First name" ref={this.nameInput} /><br /><br />
                        <label for="lastName"></label>
                        <input className="form-input" id="lastName" type="text" name="lastName" placeholder="Last name" ref={this.lastNameInput} /><br /><br />
                        <label for="password"></label>
                        <input className="form-input" id="password" type="password" name="pass" placeholder="Password" ref={this.passwordInput} /><br /><br />
                        <label for="password"></label>
                        <input className="form-input" type="password" name="pass" placeholder="Confirm Password" /><br /><br />
                        <button className="register-button" type='submit' onClick={e => this.registerNewUser(e)}>Sign Up</button>
                        <button className="cancel" onClick={e => this.toggleHidden()}>Cancel</button>
                    </form>
                </section>
            )
        }
    }
}

export default Login; 