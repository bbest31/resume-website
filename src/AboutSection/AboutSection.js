import React, { Component} from 'react'
import './AboutSection.css';
import ControlledCarousel from './ControlledCarousel/ControlledCarousel';

export default class AboutSection extends Component {
    render() {
        return (
            <div id="about-section" className="container-fluid my-bg mx-auto pr-0 shadow">
                <div className="row d-flex">
                    <div className="col-md-12 col-lg-12 col-xl-6 text-left pl-5">
                        <h1 id="about-title" className="pt-5">About Me</h1>
                        <h2 id="about-header" className="py-5">Engineering Value</h2>
                        <p>A software engineer with a love of product development and a serious case of serial entreprenuerism. There is nothing more
                        gratifying than seeing people interact with products that I made. Trying to uncover the right value proposition to
                        satisy that key pain-point, uncovering design choices to influence user behaviour, and finding the right technical solution to meet the expectations
                        of users. These are the things that make me so passionate about creating technology products. </p>
                    </div>
                    <div className="col-md-12 col-lg-12 col-xl-6 flex-grow-1 pl-0">
                       <ControlledCarousel/>
                    </div>
                </div>


            </div>
        )
    }
}
