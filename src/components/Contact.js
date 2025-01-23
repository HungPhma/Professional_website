import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import contactImg from "../assets/img/teamwork-svgrepo-com.svg";
import emailjs from 'emailjs-com';

export const Contact = () => {
    const formInitialDetails = {
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        message: ''
    }

    const [formDetails, setFormDetails] = useState(formInitialDetails);
    const [buttonText, setButtonText] = useState('Send');
    const [status, setStatus] = useState({});

    const onFormUpdate = (category, value) => {
        setFormDetails({
            ...formDetails,
            [category]: value
        })
    };

    const handlePhoneInput = (value) => {
        const numericValue = value.replace(/[^0-9]/g, '');
        setFormDetails({
            ...formDetails,
            phone: numericValue
        });
    };

    const handleEmail = (value) => {
        const emailInput = value.replace(/[^a-zA-Z0-9@.]/g, '');
        setFormDetails({
            ...formDetails,
            email: emailInput
        });
    };
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        setButtonText('Sending...');

        if (!/\S+@\S+\.\S+/.test(formDetails.email)) {
            setStatus({ success: false, message: 'Invalid email format!' });
            setButtonText('Send');
            return;
        }

        try {
            await emailjs.send('service_ruvq791', 'template_ncyimya', formDetails, 'fkHpl6vaHwGI1Fjog');
            setButtonText("Send");
            setFormDetails(formInitialDetails);
            setStatus({ success: true, message: 'Message sent successfully' });
        } catch (error) {
            setButtonText("Send");
            setStatus({ success: false, message: 'Something went wrong, please try again later.' });
        }
    };

    return (
        <section className="contact" id="connect">
            <Container>
                <Row className="align-items-center">
                    <Col md={6}>
                        <img src={contactImg} alt="Contact Us" />
                    </Col>
                    <Col md={6}>
                        <h2>Get In Touch</h2>
                        <form onSubmit={handleSubmit}>
                            <Row>
                                <Col sm={6} className="px-1">
                                    <input
                                        type="text"
                                        value={formDetails.firstName}
                                        placeholder="First Name"
                                        onChange={(e) => onFormUpdate('firstName', e.target.value)}
                                    />
                                </Col>
                                <Col sm={6} className="px-1">
                                    <input
                                        type="text"
                                        value={formDetails.lastName}
                                        placeholder="Last Name"
                                        onChange={(e) => onFormUpdate('lastName', e.target.value)}
                                    />
                                </Col>
                                <Col sm={6} className="px-1">
                                    <input
                                        type="text"
                                        value={formDetails.email}
                                        placeholder="Email Address"
                                        onChange={(e) => handleEmail(e.target.value)}
                                    />
                                </Col>
                                <Col sm={6} className="px-1">
                                    <input
                                        type="text"
                                        value={formDetails.phone}
                                        placeholder="Phone Number"
                                        onChange={(e) => handlePhoneInput(e.target.value)}
                                    />
                                </Col>
                                <Col>
                                    <textarea
                                        rows="6"
                                        value={formDetails.message}
                                        placeholder="Message"
                                        onChange={(e) => onFormUpdate('message', e.target.value)}
                                    />
                                    <button type="submit">
                                        <span>{buttonText}</span>
                                    </button>
                                </Col>
                                {
                                    status.message &&
                                    <Col>
                                        <p className={status.success === false ? "danger" : "success"}>{status.message}</p>
                                    </Col>
                                }
                            </Row>
                        </form>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}
