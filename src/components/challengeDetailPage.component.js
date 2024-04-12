import React, { Component } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import '../css/challengeDetail.css';


const ChallengeDetailsPage = () => {
    let { title } = useParams();

    return (
        <div className="challenge-page">
            <div className="top">
                <div className="firstTitle">Challenges \ { title }</div>
                <div className="title">{ title } </div> 
            </div>
            <div className="TitleDetail">
                <p>This will test your skills with basic form structure, validation, and submission. The success state will also be an excellent opportunity to work with DOM manipulation.</p>
            </div>
            <div className="flex-container">
                <div className="box1">
                    <h1>Brief</h1>
                    <p>Your challenge is to build out this Hangman game and get it looking as close to the design as possible.</p> 
                    <p>You can use any tools you like to help you complete the challenge. So, if you've got something you'd like to practice, feel free to give it a go.</p>                     
                    <p>    You can use any tools you like to help you complete the challenge. So, if you've got something you'd like to practice, feel free to give it a go.</p>
                    <p>    We provide the data in a local data.json file for you to use for word selections.</p>
                    <p>    Your users should be able to:</p>
                    <ul>
                        <li>Learn how to play Hangman from the main menu.</li>
                        <li>Start a game and choose a category.</li>
                        <li>Play Hangman with a random word selected from that category.</li>
                        <li>See their current health decrease based on incorrect letter guesses.</li>
                        <li>Win the game if they complete the whole word.</li>
                        <li>Lose the game if they make eight wrong guesses.</li>
                        <li>Pause the game and choose to continue, pick a new category, or quit.</li>
                        <li>View the optimal layout for the interface depending on their device's screen size.</li>
                        <li>See hover and focus states for all interactive elements on the page.</li>
                        <li>Navigate the entire game only using their keyboard.</li>
                    </ul>
                    <p>Download the project and go through the README.md file. This will provide further details about the project and help you get set up.
                        Want some support on the challenge? Join our community and ask questions in the help channel.</p>
                </div>

                <div className="box2">
                    <div className="inside-box">
                        <h1>Assest provided</h1>  
                        <ul>
                            <li>Sketch and Figma design files</li>
                            <li>Mobile, tablet & desktop layouts</li>
                            <li>Professional design system for colors, fonts, etc.</li>
                            <li>Optimized image assets</li>
                            <li>README file to help you get started</li>
                            <li>HTML file with pre-written content</li>
                        </ul>
                    </div>

                    <div className="inside-box">
                        <h1>Ideas to test yourself</h1>  
                        <ol>
                            <li>Try using the JSON data to choose words based on category selection</li>
                            <li>Ensure the game is fully accessible for people using only keyboard navigation</li>
                            <li>Use a JavaScript framework/library to practice building using components</li>
                        </ol>
                    </div>
                    
                </div>
            </div>
            
        </div>
    );
    
}

export default ChallengeDetailsPage;