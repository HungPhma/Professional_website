import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import meter1 from "../assets/img/icons8-html-5.svg"
import meter2 from "../assets/img/icons8-c.svg"
import meter3 from "../assets/img/icons8-python.svg"
import meter4 from "../assets/img/icons8-react-js-512.png"
import meter5 from "../assets/img/icons8-node-js.svg"
import meter6 from "../assets/img/mongodb-svgrepo-com.svg"
import colorSharp from "../assets/img/white.jpg"
export const Skills = () => {
    const responsive = {
        superLargeDesktop: {  
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },  
            items: 1
        }
    };

    return (
        <section className="skill" id="skills">
            <Container>
                <Row>
                    <Col>
                        <div className='skill-bx'>
                            <h2>
                                Skills
                            </h2>
                            <p>This is where I put the skill to</p>
                            <Carousel responsive = {responsive} infinite = {true} className="skill-slider">
                                <div className='item'>
                                    <img src={meter1} alt = "Image" />
                                    {/* <h5> Web Developement</h5> */}
                                </div>

                                <div className='item'>
                                    <img src={meter2} alt = "Image" />
                                    {/* <h5> Software Developement</h5> */}
                                </div>

                                <div className='item'>
                                    <img src={meter3} alt = "Image" />
                                    {/* <h5> Data Analysis</h5> */}
                                </div>

                                <div className='item'>
                                    <img src={meter4} alt = "Image" />
                                    {/* <h5> Web Development</h5> */}
                                </div>

                                <div className='item'>
                                    <img src={meter5} alt = "Image" />
                                    {/* <h5> Web Development</h5> */}
                                </div>

                                <div className='item'>
                                    <img src={meter6} alt = "Image" />
                                    {/* <h5> Web Development</h5> */}
                                </div>
                            </Carousel>
                        </div>
                    </Col>
                </Row>
            </Container>
            {/* <img classN ame='background-imagine-left' src={colorSharp} /> */}
        </section>
    );
}
