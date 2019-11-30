import React, { Component } from 'react';
import './HeaderSection.css';
import headerImg from '../assets/headshot.png';
import { motion } from 'framer-motion';
import Resume from '../assets/brandon_best_resume.pdf';
import firebase from '../firebase';

export default class HeaderSection extends Component {
    resumeDownloaded = () => {
            firebase.analytics().logEvent('resume_downloaded', {
                date : new Date().toString()
            });
    };

    render() {    
        return (
            <div id="header-bg" className="container-fluid mx-auto shadow">
                <div className="row px-5 table-display">
                    <div className="col-md-6 col-lg-6 text-left y-center">
                        <h1 className="name-header">Brandon Best</h1>
                        <h2 className="title-header py-4">Software Developer & Entrepreneur</h2>
                        <div className="btn-holder">
                            <motion.div className="pt-3 shrink-wrap" whileHover={{ scale: 1.2, x: 5, rotate: [0, 2, -2, 0] }} transition={{ type: 'spring' }}>
                                <a className="resume-btn" onClick={() => this.resumeDownloaded()} href={Resume} download="">RESUMÉ</a>
                            </motion.div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-6 py-5">
                        <motion.div animate={{ opacity: 1, x: 0 }} initial={{ opacity: 0, x: 150 }} transition={{ duration: 2 }}>
                            <img className="img-fluid" src={headerImg} alt="BRANDON" />
                        </motion.div>
                    </div>
                </div>
            </div>
        )
    }
}
