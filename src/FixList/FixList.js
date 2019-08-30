import React from 'react';
import moment from 'moment';
import { NavLink, Link } from "react-router-dom";

class FixList extends React.Component {
    constructor(props) {
        super(props); 
        this.state = {
            fix: []
        }
    }
    componentDidMount() {
        console.log("fetch")
        fetch('http://localhost:8080/api/fixs/' + this.props.match.params.carsId, {
            method: "Get",
            headers: {
                "Content-Type": "application/json",
                authorization: "bearer " + localStorage.authToken
            }
        })
            .then(response => response.json())
            .then(data => this.setState({fix: data}))     
    }

    handleDeleteFix(id) {
        console.log("delete")
        fetch(`http://localhost:8080/api/fixs/${id}`, {
            method: "delete",
            headers: {
                "Content-Type": "application/json",
                authorization: "bearer " + localStorage.authToken
            }
        })
            .then(() => this.componentDidMount())
    }

    render() {
        const fixList = this.state.fix.map(item => {
        const date = moment(item.date).format('DD/MM/YYYY')
            return (
                <li>
                    <h2>{item.title}</h2>
                    <p>{date}</p>
                    <p>{item.cost}</p>
                    <p>{item.description}</p>
                    <button onClick={() => this.handleDeleteFix(item._id)}>delete</button>
                </li>
            )
        });
        
        return(
            <div>
            <h1>Fix List</h1>
            {fixList}
            <Link to={'/fix-form/' + this.props.match.params.carsId} className="addCar">Add Fix</Link>
            </div>
        )
    }
}

export default FixList;