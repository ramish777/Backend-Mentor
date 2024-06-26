import React, { Component } from "react";
import { Link } from "react-router-dom";
import '../App.css';

export default class Navbar extends Component {
    render() {
        return (
            <div className="main">
                <nav className="navbar navbar-expand-lg navbar-dark">
            <div className="container">
                <div className="d-flex justify-content-between align-items-center w-100">
                    <Link className="navbar-brand" to="/">Backend Mentor</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                            <Link className="nav-link" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                            <Link className="nav-link" to="/challenge">Challenges</Link>
                            </li>
                            <li className="nav-item">
                            <Link className="nav-link" to="/solution">Solution</Link>
                            </li>
                            <li className="nav-item">
                               <Link className="nav-link" to="/MentorRoadmap">Mentor Roadmap</Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <Link to="/login" className="btn btn-primary mx-2">Login</Link>
                        <Link to="/signUp" className="btn btn-secondary">Sign Up</Link>
                    </div>
                </div>
            </div>
        </nav>  
        </div>
            
        );
    }
}
