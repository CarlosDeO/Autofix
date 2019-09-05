import React from 'react';
import './FixForm.css'
import Header from '../Header/Header';
import config from '../config';

class FixForm extends React.Component {
    handleSubmit(event) {
        const title = event.target.title.value;
        const date = event.target.date.value;
        const description = event.target.description.value;
        const cost = event.target.cost.value;
        event.preventDefault();
        fetch(config.API_ENDPOINT + '/api/fixs', {
            method: "post",
            headers: {
                "Content-Type": "application/json",
                authorization: "bearer " + localStorage.authToken
            },
            body: JSON.stringify({
                title: title,
                date: date,
                description: description,
                cost: cost,
                car: this.props.match.params.carsId
            })
        })
            .then(() => this.props.history.push('/cars/' + this.props.match.params.carsId))
    }
    render() {
        return (
            <>
                <Header {...this.props} />
                <div className="fix-form-container">
                    <form className="fix-form" onSubmit={e => this.handleSubmit(e)}>
                        <ul class="flex-outer">
                            <li>
                            <label for="title">Fix Title</label>
                            <input id="title" type="text" name="title"></input>
                            </li>
                            <li>
                            <label for="date">Date</label>
                            <input id="date" type="date" name="date"></input>
                            </li>
                            <li>
                            <label for="cost">Cost</label>
                            <input id="cost" type="text" name="cost"></input>
                            </li>
                            <label className="text-label" for="discription">Discription</label>
                            <textarea id="discription" name="description" ></textarea>
                            <button className="fix-submit" type="submit">Submit</button>
                        </ul>
                    </form>
                </div>
            </>
        )
    }
}

export default FixForm; 
