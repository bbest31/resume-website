import React, { Component } from 'react'
import PortfolioModal from './PortfolioModal/PortfolioModal';
import './PortfolioSection.css';
import xpertzImg from '../assets/xpertz.png';
import natImg from '../assets/neuralbertatech.png';
import startupsImg from '../assets/startupspodcast.jpg';
import slack from '../assets/slack.png';
import napchat from '../assets/napchat.png';
import personalwebsite from '../assets/personalwebsite.PNG';
import ctw from '../assets/clinicaltrialwatch.PNG';
import ownable from '../assets/ownablemobile.png';
import robot from '../assets/chessrobot.jpg';
import { motion } from 'framer-motion';
import firebase from '../firebase';

export default class PortfolioSection extends Component {

    constructor(props) {
        super(props);
        this.state = { isXpertzOpen: false, isSlackOpen: false, isPodcastOpen: false, isCTWOpen: false };
    }

    toggleXpertzModal = (event) => {
        if (!this.state.isXpertzOpen) {
            firebase.analytics().logEvent('xpertz_modal_opened', { date: new Date().toLocaleString() });
        }
        this.setState({
            isXpertzOpen: !this.state.isXpertzOpen
        });
    }
    toggleSlackModal = (event) => {
        if (!this.state.isSlackOpen) {
            firebase.analytics().logEvent('slack_modal_opened', { date: new Date().toLocaleString() });
        }
        this.setState({
            isSlackOpen: !this.state.isSlackOpen
        });
    }
    togglePodcastModal = (event) => {
        if (!this.state.isPodcastOpen) {
            firebase.analytics().logEvent('podcast_modal_opened', { date: new Date().toLocaleString() });
        }
        this.setState({
            isPodcastOpen: !this.state.isPodcastOpen
        });
    }
    toggleCTWModal = (event) => {
        if (!this.state.isCTWOpen) {
            firebase.analytics().logEvent('ctw_modal_opened', { date: new Date().toLocaleString() });
        }
        this.setState({
            isCTWOpen: !this.state.isCTWOpen
        });
    }
    neuralbertatechClicked = () => {
        firebase.analytics().logEvent('NeurAlbertaTech_clicked', {date: new Date().toLocaleString()})
    }
    cartesianRobotClicked = () => {
        firebase.analytics().logEvent('robot_clicked', {date: new Date().toLocaleString()})
    }
    napchatClicked = () => {
        firebase.analytics().logEvent('napchat_clicked', {date: new Date().toLocaleString()})
    }

    ownableClicked = () => {
        firebase.analytics().logEvent('ownable_clicked', {date: new Date().toLocaleString()})
    }

    render() {
        return (
            <div id="portfolio-section" className="main-container container-fluid mx-auto shadow">
                <PortfolioModal show={this.state.isXpertzOpen} project="xpertz" onHide={() => this.toggleXpertzModal()} />
                <PortfolioModal show={this.state.isPodcastOpen} project="podcast" onHide={() => this.togglePodcastModal()} />
                <PortfolioModal show={this.state.isSlackOpen} project="slack" onHide={() => this.toggleSlackModal()} />
                <PortfolioModal show={this.state.isCTWOpen} project="ctw" onHide={() => this.toggleCTWModal()}/>
                <div className="row text-center pb-5">
                    <div className="col-12">
                        <h3 className="portfolio-title pt-5">Portfolio</h3>
                        <h5 className="portfolio-subtext pt-4">Projects I've worked on and initiatives I've been a part of</h5>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 d-flex justify-content-center">
                        <div className="card-deck">
                            <motion.div whileHover={{ scale: 1.05 }}>
                                <div className="card" style={{ width: "18rem" }}>
                                    <img className="card-img-top" src={ownable} alt="Ownable" />
                                    <div className="card-body card-color">
                                        <h5 className="card-title">Ownable</h5>
                                        <p className="card-text">Fractional investment platform for real estate developments and properties.</p>
                                        <a href="https://getownable.co/" onClick={() => this.ownableClicked()} target="_blank" rel="noopener noreferrer" className="btn btn-outline-light" >Website</a>
                                    </div>
                                </div>
                            </motion.div>
                            <motion.div whileHover={{ scale: 1.05 }}>
                                <div className="card" style={{ width: "18rem" }}>
                                    <img className="card-img-top" src={ctw} alt="Clinical Trial Watch" />
                                    <div className="card-body card-color">
                                        <h5 className="card-title">Clinical Trial Watch</h5>
                                        <p className="card-text">Developed website to track clinical drug trial status of drugs targetting COVID-19.</p>
                                        <button className="btn btn-outline-light" onClick={() => this.toggleCTWModal()}>More</button>
                                    </div>
                                </div>
                            </motion.div>
                            <motion.div whileHover={{ scale: 1.05 }}>
                                <div className="card" style={{ width: "18rem" }}>
                                    <img className="card-img-top" src={personalwebsite} alt="Personal Website" />
                                    <div className="card-body card-color">
                                        <h5 className="card-title">Personal Website</h5>
                                        <p className="card-text">Created this personal website to show off my skills and portfolio. Made it using React.</p>
                                        <a href="https://github.com/bbest31/resume-website" className="btn btn-outline-light" >Repo</a>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
                <div className="row pt-4 pb-5">
                    <div className="col-12 d-flex justify-content-center">
                        <div className="card-deck">
                            <motion.div whileHover={{ scale: 1.05 }}>
                                <div className="card" style={{ width: "18rem" }}>
                                    <img className="card-img-top" src={xpertzImg} alt="Xpertz" />
                                    <div className="card-body card-color">
                                        <h5 className="card-title">Xpertz (Webapp)</h5>
                                        <p className="card-text">Skills management software that analyzed collaborative efforts within large companies.</p>
                                        <button className="btn btn-outline-light" onClick={() => this.toggleXpertzModal()}>More</button>
                                    </div>
                                </div>
                            </motion.div>
                            <motion.div whileHover={{ scale: 1.05 }}>
                                <div className="card" style={{ width: "18rem" }}>
                                    <img className="card-img-top" src={natImg} alt="Neuralbertatech" />
                                    <div className="card-body card-color">
                                        <h5 className="card-title">NeurAlbertaTech</h5>
                                        <p className="card-text">Co-founded a neurotechnology club at the UofA that made a BCI controlled game.</p>
                                        <a href="https://www.youtube.com/watch?v=32io4iy6L0k" onClick={() => this.neuralbertatechClicked()} target="_blank" rel="noopener noreferrer" className="btn btn-outline-light" >Video</a>
                                    </div>
                                </div>
                            </motion.div>
                            <motion.div whileHover={{ scale: 1.05 }}>
                                <div className="card" style={{ width: "18rem" }}>
                                    <img className="card-img-top" src={slack} alt="Xpertz Slack" />
                                    <div className="card-body card-color">
                                        <h5 className="card-title">Xpertz Slack Bot</h5>
                                        <p className="card-text">Allowing users in Slack to display their skills and search for others by skill.</p>
                                        <button className="btn btn-outline-light" onClick={() => this.toggleSlackModal()}>More</button>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
                <div className="row pt-4 pb-5">
                    <div className="col-12 d-flex justify-content-center">
                        <div className="card-deck">
                            <motion.div whileHover={{ scale: 1.05 }}>
                                <div className="card" style={{ width: "18rem" }}>
                                    <img className="card-img-top" src={robot} alt="Cartesian Chess Robot" />
                                    <div className="card-body card-color">
                                        <h5 className="card-title">Cartesian Chess Robot</h5>
                                        <p className="card-text">Cartesian robot built with Lego Mindstorm using computer vision to pickup and move pieces.</p>
                                        <a href="https://github.com/bbest31/Cartesian-Chess-Robot" onClick={() => this.cartesianRobotClicked()} target="_blank" rel="noopener noreferrer" className="btn btn-outline-light" >Repo</a>
                                    </div>
                                </div>
                            </motion.div>
                            <motion.div whileHover={{ scale: 1.05 }}>
                                <div className="card" style={{ width: "18rem" }}>
                                    <img className="card-img-top" src={startupsImg} alt="The Startups Podcast" />
                                    <div className="card-body card-color">
                                        <h5 className="card-title">The Startups Podcast</h5>
                                        <p className="card-text">Main host of a podcast talking about young entreprenuership and interviewing young entreprenuers.</p>
                                        <button className="btn btn-outline-light" onClick={() => this.togglePodcastModal()}>More</button>
                                    </div>
                                </div>
                            </motion.div>
                            <motion.div whileHover={{ scale: 1.05 }}>
                                <div className="card" style={{ width: "18rem" }}>
                                    <img className="card-img-top" src={napchat} alt="NapChat" />
                                    <div className="card-body card-color">
                                        <h5 className="card-title">NapChat</h5>
                                        <p className="card-text">Android alarm app to have auto-notifications to friends if you are trying to sleep.</p>
                                        <a href="https://github.com/bbest31/NCAlarms" onClick={() => this.napchatClicked()} target="_blank" rel="noopener noreferrer" className="btn btn-outline-light" >Repo</a>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
