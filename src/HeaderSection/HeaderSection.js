import React, { Component } from 'react';
import './HeaderSection.css';
import headerImg from '../assets/headshot.png';
import { motion } from 'framer-motion';

export default class HeaderSection extends Component {
    render() {
        return (
            <div className="header-bg container-fluid">
                <div className="row table-display">
                    <div className="col-md-6 col-lg-6 text-center y-center">
                        <h1 className="name-header">Brandon Best</h1>
                        <h2 className="title-header">Software Developer & Entrepreneur</h2>
                        <div className="btn-holder">
                            <motion.div className="pt-3 shrink-wrap" whileHover={{ scale: 1.2, x: 5, rotate: [0, 2, -2, 0] }} transition={{ type: 'spring' }}>
                                <button className="resume-btn" type="button">RESUME</button>
                            </motion.div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-6 py-5 r-bg">
                        <motion.div animate={{ opacity: 1, x: -1, rotate: [0, -360] }} initial={{ opacity: 0, x: 400 }} transition={{ duration: 3 }}>
                            <img className="img-fluid" src={headerImg} alt="BRANDON" />
                        </motion.div>
                    </div>
                </div>
            </div>
        )
    }
}
