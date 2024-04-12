import React, { Component } from "react";
import { Link } from "react-router-dom";
import '../css/landingPage.css';

export default class landingPage extends Component {
    render() {
        return (
            <div className="landing-page">
                <div className="button-container">
                    <button className="gradient-button">Helping people learn backend with ease</button>
                </div>
                <h1>Build Backends, Learn Concepts</h1>
                <h1>& Become the Expert</h1>
                <p>Build Backends, Learn Concepts & Become the Expert</p>
                <div className="frame14">
                    <button className="outline-button">Become the Expert</button>
                    <button className="outline-button view-challenges-button">
                        View Challenges
                    </button>
                    <div className="challenge-details">
                            <div>50+ challenges</div>
                            <div>for your skills</div>
                    </div>
                </div>
            </div>
        );
    }
}