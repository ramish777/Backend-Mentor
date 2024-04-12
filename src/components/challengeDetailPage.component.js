import React, { Component } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

const ChallengeDetailsPage = () => {
    let { title } = useParams();

    return (
        <div className="challenge-page">
            <div className="content">
                <div className="title">Challenges \ { title }</div>
                
            </div>
            
        </div>
    );
    
}

export default ChallengeDetailsPage;