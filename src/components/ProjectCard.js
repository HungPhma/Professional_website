import React, { useState } from "react";
import { Col, Button, Modal } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl, role, technologies, frameworks, dates, tasks }) => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <Col sm={6} md={4}>
            <div className="proj-imgbx">
                <img src={imgUrl} alt={title} />
                <div className="proj-txtx">
                    <h4>{title}</h4>
                    <Button className="details-button" onClick={handleShow}>
                        View Details
                    </Button>
                </div>
            </div>

            {/* Modal for project details */}
            <Modal show={show} onHide={handleClose} centered>
                <Modal.Header closeButton>
                    <Modal.Title>{title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <img src={imgUrl} alt={title} className="modal-img" />
                    <p>{description}</p>
                    <p><strong>Role:</strong> {role}</p>
                    <p><strong>Technologies:</strong> {technologies && technologies.length > 0 ? technologies.join(", ") : "N/A"}</p>
                    <p><strong>Frameworks:</strong> {frameworks && frameworks.length > 0 ? frameworks.join(", ") : "N/A"}</p>
                    <p><strong>Dates:</strong> {dates}</p>
                    <ul>
                        {tasks && tasks.map((task, index) => (
                            <li key={index}>{task}</li>
                        ))}
                    </ul>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </Col>
    );
};
