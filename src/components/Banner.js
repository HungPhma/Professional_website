import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { ArrowRightCircle } from 'react-bootstrap-icons';
import headerImg from '../assets/img//myselfpic.jpg';
import soccer from '../assets/img//soccer_ball.svg';
import run from '../assets/img//running.svg';
import game from '../assets/img//game.svg';
import camp from '../assets/img//camping.svg';
import resume from '../assets/resume//resume.pdf'
export const Banner = () => {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const toRotate = ["Software Developer","Web Developer", "Game Developer"];
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(300 - Math.random() * 100);
    const period = 2000;

    useEffect(() => {
        const ticker = setInterval(() => {
            tick();
        }, delta);

        return () => { clearInterval(ticker) };
    }, [text]);

    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

        setText(updatedText);

        if (isDeleting) {
            setDelta(prevDelta => prevDelta / 2);
        }

        if (!isDeleting && updatedText === fullText) {
            setIsDeleting(true);
            setDelta(period);
        } else if (isDeleting && updatedText === '') {
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setDelta(500);
        }
    }
    
    const handleConnectClick = () => {
        const connectSection = document.getElementById('connect');
        if (connectSection) {
            connectSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section className="banner" id="home">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7}>
                        <span className="tagline">Welcome to my Portfolio</span>
                        <h1>{`Hi, I'm Hung Pham! `}
                            <span className="wrap">{text}</span>
                        </h1>
                        <p>I am a Computer Science major with a strong foundation in programming, algorithms, and software development. I am passionate about technology, particularly in areas like artificial intelligence and cybersecurity. I thrive on solving complex problems and am eager to contribute to the tech industry.</p>
                        <button onClick={handleConnectClick}>
                            Let's connect<ArrowRightCircle size={25} />
                        </button>
                    </Col>
                    <Col xs={12} md={6} xl={5} className='about d-flex align-items-start'>
                        <div className="about-content">
                            <img src={headerImg} alt="Header picture" className="header-img align-self-start mx-auto d-block rounded"/>
                            <div className="summary">
                                <h3>Summary</h3>
                                <p>
                                    About me
                                </p>
                                <p>
                                    Career Goals: I am to become a skilled software developer, contributing to innovative projects that make a positive impact on society. I am particularly interested in exploring opportunities in AI and cybersecurity.
                                </p>
                                <p>
                                    Interested:
                                </p>
                                <div className="interests">
                                    <img src={soccer} alt="Interests" className="interests-img" />
                                    <img src={run} alt="Interests" className="interests-img" />
                                    <img src={game} alt="Interests" className="interests-img" />
                                    <img src={camp} alt="Interests" className="interests-img" />
                                </div>
                                <a href={resume} target="_blank" rel="noopener noreferrer" className="btn btn-primary custom">
                                    View My Resume
                                </a>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}
