import React from 'react';
import { MDBCarousel, MDBCarouselInner, MDBCarouselItem, MDBView, MDBContainer, MDBCarouselCaption } from 'mdbreact';
import slide1 from '../../assets/slide1.png';
import slide2 from '../../assets/slide2.jpg';
import slide3 from '../../assets/slide3.jpg';
import slide4 from '../../assets/slide4.jpg';
import slide5 from '../../assets/slide5.jpg';
import './ControlledCarousel.css';

const ControlledCarousel = () => {
    return (
        <MDBContainer className="px-0">
            <MDBCarousel
                activeItem={1}
                length={5}
                showControls={false}
                showIndicators={true}
                className="z-depth-1"
            >
                <MDBCarouselInner>
                    <MDBCarouselItem itemId="1">
                        <MDBView>
                            <img
                                className="d-block w-100"
                                src={slide1}
                                alt="First slide"
                            />
                        </MDBView>
                        <MDBCarouselCaption>
                            {/* <h3 className="h3-responsive">The Brandon Best Podcast</h3> */}
                            <p>Started a podcast about new tech and science</p>
                        </MDBCarouselCaption>
                    </MDBCarouselItem>
                    <MDBCarouselItem itemId="2">
                        <MDBView>
                            <img
                                className="d-block w-100"
                                src={slide2}
                                alt="Second slide"
                            />
                        </MDBView>
                        <MDBCarouselCaption>
                            <h3 className="h3-responsive">The Grind</h3>
                            <p>Working on my first startup summer 2018</p>
                        </MDBCarouselCaption>
                    </MDBCarouselItem>
                    <MDBCarouselItem itemId="3">
                        <MDBView>
                            <img
                                className="d-block w-100"
                                src={slide3}
                                alt="Third slide"
                            />
                        </MDBView>
                        <MDBCarouselCaption>
                            <h3 className="h3-responsive">Ready Player One</h3>
                            <p>Obessing over VR</p>
                        </MDBCarouselCaption>
                    </MDBCarouselItem>
                    <MDBCarouselItem itemId="4">
                        <MDBView>
                            <img
                                className="d-block w-100"
                                src={slide4}
                                alt="Fourth slide"
                            />
                        </MDBView>
                        <MDBCarouselCaption>
                            <h3 className="h3-responsive">Neurotech Conference</h3>
                            <p>Attended a conference to learn about BCI's</p>
                        </MDBCarouselCaption>
                    </MDBCarouselItem>
                    <MDBCarouselItem itemId="5">
                        <MDBView>
                            <img
                                className="d-block w-100"
                                src={slide5}
                                alt="Fifth slide"
                            />
                        </MDBView>
                        <MDBCarouselCaption>
                            <h3 className="h3-responsive">The Climb</h3>
                            <p>Fun hiking in the rockies</p>
                        </MDBCarouselCaption>
                    </MDBCarouselItem>
                </MDBCarouselInner>
            </MDBCarousel>
        </MDBContainer>
    );
}

export default ControlledCarousel;