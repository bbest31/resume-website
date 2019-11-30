import React, { Component } from 'react';
import './FooterSection.css';
import firebase from '../firebase';

export default class FooterSection extends Component {
    linkedInClicked = () => {
        firebase.analytics().logEvent('linkedin_clicked', {date: new Date().toLocaleString()});
    }
    githubClicked = () => {
        firebase.analytics().logEvent('github_clicked', {date: new Date().toLocaleString()});
    }
    stackOverflowClicked = () => {
        firebase.analytics().logEvent('stackoverflow_clicked', {date: new Date().toLocaleString()});
    }
    render() {
        return (
            <div id="footer-section" className="container-fluid main-container mx-auto shadow">
                <div className="row py-5">
                    <div className="col-12">
                        <a href="https://github.com/bbest31"><i className="fab fa-github icon-light mx-3"></i></a>
                        <a href="https://www.linkedin.com/in/brandon-best-768297126/"><i className="fab fa-linkedin icon-light mx-3"></i></a>
                        <a href="https://stackoverflow.com/users/6495051/b-best"><i className="fab fa-stack-overflow icon-light mx-3"></i></a>
                    </div>
                </div>
                <div className="row pb-5">
                    <div className="col-12 text-center">
                        <a href="mailto:bbest.dev@gmail.com" className="email-text"><u>bbest.dev@gmail.com</u></a>
                    </div>
                </div>
            </div>
        )
    }
}

