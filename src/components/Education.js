import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import school from '../assets/img/ucr.png'
import mesa from '../assets/img/mesa.png'

export const Education = () => {
    return (
        <section className="education" id="education">
            <Container>
                <Row>
                    <Col>
                        <div className='main-bx'>
                            <h2>
                                My Education
                            </h2>
                            <div className='both-side'>
                                <div className='left-side'>
                                    <img src={school} alt="Image" />
                                </div>
                                <div className='right-side'>
                                    <h3>University of California, Riverside</h3>
                                    <p>Bachelor of Science in Computer Science</p>
                                    <p>Graduated in 2024</p>
                                </div>
                            </div>

                            <div className='both-side'>
                                <div className='left-side'>
                                    <img src={mesa} alt="Mesa College Logo" />
                                </div>
                                <div className='right-side'>
                                    <h3>San Diego Mesa College</h3>
                                    <p>Lower Division Courses</p>
                                    <p>2017-2022</p>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};
