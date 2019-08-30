import React from 'react';

class FixForm extends React.Component {
    handleSubmit(event) {
        const title = event.target.title.value;
        const date = event.target.date.value;
        const description = event.target.description.value;
        const cost = event.target.cost.value;
        event.preventDefault();
        fetch('http://localhost:8080/api/fixs', {
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
            .then(response => response.json())
            .then(response => window.location = '/cars/' + this.props.match.params.carsId)
    }
    render() {
        return (
            <>
            {/* <button>View up coming repairs</button>
            <button>Register a fix</button> */}
            <form onSubmit={e => this.handleSubmit(e)}>
                <input type="text" name="title"></input>
                <input type="date" name="date"></input>
                <input type="text" name="cost"></input>
                <textarea name="description" ></textarea>
                <button type="submit">Submit</button>
            </form>
            </>
        )
    }
}

export default FixForm; 
