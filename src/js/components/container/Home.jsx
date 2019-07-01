import React, { Component } from 'react';

class Home extends Component {
    constructor() {
        super();
        this.state = {
            meetups: []
        };
    }

    componentDidMount() {
        const url = "https://questioner-v3.herokuapp.com/api/meetups/";
        fetch(url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then((response) => {
                return response.json();
            })
            .then((data => {
                this.setState({
                    meetups: data.results
                })
            }
            ))
    }
    render() {
        const { meetups } = this.state;
        const loaded = meetups.length ? (
            meetups.map(meetup => {
                return (
                  <div className="main">
                    <div className="container" key={meetup.id}>
                        <div className="card text-center">
                            <div className="card-body">
                                <h4 className="card-title">{meetup.title}</h4>
                                <p className="card-text">{meetup.body}</p>
                            </div>
                            <div className="card-footer">
                                <a href="#" className="btn btn-success">{meetup.created_on}</a>
                            </div>
                        </div>
                    </div>
                  </div>
                )
            })
        ) : (
                <div>No meetup available</div>
            );
        return (
            <div>
                <h3>Meetup's</h3>
                {loaded}
            </div>
        );
    }
}
export default Home;