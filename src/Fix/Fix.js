import React from 'react';
import moment from 'moment';

export default class Fix extends React.Component {
    render() {
        const date = moment(this.props.item.date).format('DD/MM/YYYY')
        return (
            
            <li className="fix-item">
                <h2 className="fix-name">{this.props.item.title}</h2>
                <p>{date}</p>
                <p>{this.props.item.cost}</p>
                <p>{this.props.item.description}</p>
                <button className="fix-delete" onClick={() => this.props.handleDeleteFix(this.props.item._id)}>delete</button>
            </li>
        )
    }
}