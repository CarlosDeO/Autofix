import React from 'react';
import { Link } from "react-router-dom";
import Fix from '../Fix/Fix';
import './FixList.css';
import config from '../config';
import Header from '../Header/Header';

class FixList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            fix: []
        }
    }
    componentDidMount() {
        console.log("fetch")
        fetch(config.API_ENDPOINT + '/api/fixs/' + this.props.match.params.carsId, {
            method: "Get",
            headers: {
                "Content-Type": "application/json",
                authorization: "bearer " + localStorage.authToken
            }
        })
            .then(response => response.json())
            .then(data => this.setState({ fix: data }))
    }

    handleDeleteFix(id) {
        console.log("delete")
        fetch(config.API_ENDPOINT + `/api/fixs/${id}`, {
            method: "delete",
            headers: {
                "Content-Type": "application/json",
                authorization: "bearer " + localStorage.authToken
            }
        })
            .then(() => this.componentDidMount())
    }

    render() {
        const fixs = this.state.fix.map(item => {

            return (
                <Fix item={item} handleDeleteFix={id => this.handleDeleteFix(id)} />
            )
        });

        return (
            <>
                <Header {...this.props} />
                <div className="fix-wrapper">
                    <h1 className="fix-title">Fix List</h1>
                    <ul className="fix-list">
                        {fixs}
                    </ul>
                    <Link className="add-fix" to={'/fix-form/' + this.props.match.params.carsId}>Add Fix</Link>
                </div>
            </>
        )
    }
}

export default FixList;