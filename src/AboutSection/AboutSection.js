import React, { Component } from 'react'
import './AboutSection.css';
import aboutImg from '../assets/header_img.png';
export default class AboutSection extends Component {
    render() {
        return (
            <div id="about-section" className="container-fluid my-bg mx-auto pr-0 shadow">
                <div className="row">
                    <div className="col-md-12 col-lg-6 text-left pl-5">
                        <h1 id="about-title"className="pt-5">About Me</h1>
                        <h2 id="about-header" className="py-5">Engineering Value</h2>
                        <p>A software engineer with a love of product development and a serious case of serial entreprenuerism. There is nothing more
                        gratifying than seeing people interact with products that I made. Trying to uncover the right value proposition to
                        satisy that key pain-point, uncovering design choices to influence user behaviour, and finding the right technical solution to meet the expectations
                        of users. These are the things that make me so passionate about creating technology products. </p>
                    </div>
                    <div className="col-md-12 col-lg-6 text-right">
                        <img src={aboutImg} alt="Brandon"/>
                    </div>
                </div>


            </div>
        )
    }
}
