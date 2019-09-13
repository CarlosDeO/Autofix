import React from 'react';
import './Header.css'
import { Link } from "react-router-dom"; 

export default class Header extends React.Component {
logout() {
   
        console.log("logout")
        localStorage.clear();
        this.props.history.push('/')
}
    render () {
        return (
            <nav className="header-nav"> 
                <ul className="nav-list">
                    <li><Link className="nav-link" to="/"><h1>CarFix</h1></Link></li>
                    <li>
                        <Link className="nav-link" to="/profile">
                        Profile
                        </Link>
                    </li>
                    <li><button className="nav-link" href="#" onClick={() => this.logout()}>Signout</button></li>
                </ul>
            </nav>
        )
    }
}

