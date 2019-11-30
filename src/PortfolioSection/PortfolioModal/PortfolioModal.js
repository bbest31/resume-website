import React from 'react'
import './PortfolioModal.css';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Carousel from 'react-bootstrap/Carousel';
import skillSearch from '../../assets/skillsearch_prototype.png';
import skillRecognition from '../../assets/recognition_prototype.png';
import skillAnalysis from '../../assets/skillanalysis_prototype.png';
import skillPerformance from '../../assets/performance_prototype.png';
import slackProfileCommand from '../../assets/slackprofilecommand.png';
import slackSearchCommand from '../../assets/slacksearchcommand.png';
import slackHighFiveCommand from '../../assets/slackhighfivecommand.png';
import podcastOne from '../../assets/podcast1.jpg';
import podcastTwo from '../../assets/podcast2.jpg';
import podcastThree from '../../assets/podcast3.jpg';

export default function PortfolioModal(props) {

    let proj = props.project;
    if (proj === "xpertz") {
        return (
            <Modal {...props} size="lg" aria-labelledby="container-modal-title-vcenter" centered>
                <Modal.Header className="px-0 py-0">
                    <Carousel indicators={false}>
                        <Carousel.Item>
                            <img className="d-block w-100" src={skillSearch} alt="Skill Based Search For Collaboration" />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img className="d-block w-100" src={skillPerformance} alt="Display Your Skills & Track Your Progress" />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img className="d-block w-100" src={skillRecognition} alt="Skill Leveling With Peer-to-peer Recognition" />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img className="d-block w-100" src={skillAnalysis} alt="Skill Analytics & Leaderboards" />
                        </Carousel.Item>
                    </Carousel>
                </Modal.Header>
                <Modal.Body>
                    <h4>Xpertz Web Application</h4>
                    <p className="modal-text">
                        <strong>Role: Founder, Product Lead & Designer</strong>
                        <br />
                        Xpertz is an application for large businesses to streamline collaboration on a large scale and montior the collaborative efforts of it's employees.
                        The application provided the ability to display your skillset to your colleagues. This gave companies fresh data on what skills were possessed within the organization.
                        A peer-to-peer recognition system was used to validate peoples ability to solve problems with their skills and gave members high-fives and leveled thier skills up.
                        This gave insight to the companies strengths and weaknesss when it came to skills and an insight to the most or least collaborative people, positions, teams or even departments.
                    </p>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={props.onHide}>Close</Button>
                </Modal.Footer>
            </Modal>
        );
    } else if (proj === "slack") {
        return (
            <Modal {...props} size="lg" aria-labelledby="container-modal-title-vcenter" centered>
                <Modal.Header className="px-0 py-0">
                    <Carousel indicators={false}>
                        <Carousel.Item>
                            <img className="d-block w-100" src={slackProfileCommand} alt="Display Your Skills In Slack" />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img className="d-block w-100" src={slackHighFiveCommand} alt="High Five Others In Slack" />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img className="d-block w-100" src={slackSearchCommand} alt="Search For Skills In Slack" />
                        </Carousel.Item>
                    </Carousel>
                </Modal.Header>
                <Modal.Body>
                    <h4>Xpertz Slack Bot</h4>
                    <p className="modal-text">
                        <strong>Role: Product Lead & Developer</strong>
                        <br />
                        The Xpertz Slack bot was an integration of the Xpertz application to allow people to utilize some base features within their Slack workspace.
                        This included configuring your skill profile, skill searching, and giving high-fives to others for their help!
                    </p>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={props.onHide}>Close</Button>
                </Modal.Footer>
            </Modal>
        );
    } else if (proj === "podcast") {
        return (
            <Modal {...props} size="lg" aria-labelledby="container-modal-title-vcenter" centered>
                <Modal.Header className="px-0 py-0">
                    <Carousel indicators={false}>
                        <Carousel.Item>
                            <img className="d-block w-100" src={podcastOne} alt="Podcast One" />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img className="d-block w-100" src={podcastTwo} alt="Podcast Two" />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img className="d-block w-100" src={podcastThree} alt="Podcast Three" />
                        </Carousel.Item>
                    </Carousel>
                </Modal.Header>
                <Modal.Body>
                    <h4>The Startups Podcast</h4>
                    <p className="modal-text">
                        <strong>Role: Main Host</strong>
                        <br />
                        Weekly podcast I did with 3 friends talking about young entreprenuership and trying to break into the professional world.
                        Often interviews young people with their own businesses and talked to them about their journey and things they learned along the way.
                    </p>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={props.onHide}>Close</Button>
                </Modal.Footer>
            </Modal>
        );
    }


}
