import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from './ProjectCard';
// import colorSharp2 from '../assets/img/color-sharp2.png';
import project1 from '../assets/img/Inventory.png';
import project2 from '../assets/img/project2.png'; // Make sure these paths are correct
import project3 from '../assets/img/project3.png';
import project4 from '../assets/img/game.png';
// import project5 from '../assets/img/project-img2.png';
// import project6 from '../assets/img/project-img3.png';
import noproject1 from '../assets/img/noproject1.png';

export const Projects = () => {
    const projects = [
        {
            title: "Inventory-Retail",
            description: "This project involves developing a robust database system for managing the stock of a retail store. The primary goal is to create a solution that addresses the complexities of inventory management, especially in large retail environments with a diverse range of products and frequent sales transactions.",
            imgUrl: project1,
        },
        {
            title: "SportSync",
            description: "SportSync is an online platform that helps people who love sports get together by making it easier to organize, share, and create local sporting events. Our platform allows users to plan and take part in sports-related events in their communities, such as watch parties, pickup basketball games, and neighborhood soccer matches.",
            imgUrl: project2,
        },
        {
            title: "Traffic Conviction",
            description: "This research analyzes traffic conviction records from the NYS DMV to identify trends in violations across various laws. It examines types of offenses, offender demographics, and geographic distribution, using data to predict likely violations based on factors like age, sex, year, and court name. The goal is to find patterns that can help allocate resources to prevent traffic violations in specific demographic groups.",
            imgUrl: project3,
        },
        {
            title: "Hung's Hotel",
            description: "Our game is a liminal horror/puzzle game that takes place in a single floor hotel. The player starts with being able to access his room and within each of the rooms of the hotel is a puzzle. After a puzzle is completed, the player receives a piece of the key to exit the hotel. Once all the puzzles/rooms are explored and completed, the player can finally exit the hotel and win the game.",
            imgUrl: project4,
        },
        // {
        //     title: "Project 5",
        //     description: "Description here",
        //     imgUrl: project5,
        // },
        // {
        //     title: "Project 6",
        //     description: "Description here",
        //     imgUrl: project6,
        // },
    ];

    const noprojects = [
        {
            title: "",
            description: "",
            imgUrl: noproject1,
        },
    ];

    return (
        <section className="project" id="projects">
            <Container>
                <Row>
                    <Col>
                        <h2>Projects</h2>
                        {/* <p>This is where you show your project</p> */}
                        <Tab.Container id="projects-tabs" defaultActiveKey="first">
                            <Nav variant="pills" className="nav-pills mb-5 justify-content align-items-center" id="pills-tab">
                                <Nav.Item>
                                    <Nav.Link eventKey="first">Tab One</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="second">Tab Two</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="third">Tab Three</Nav.Link>
                                </Nav.Item>
                            </Nav>
                            <Tab.Content>
                                <Tab.Pane eventKey="first">
                                    <Row>
                                        {projects.map((project, index) => (
                                            <ProjectCard key={index} {...project} />
                                        ))}
                                    </Row>
                                </Tab.Pane>
                                <Tab.Pane eventKey="second">
                                    <Row >
                                        {noprojects.map((project, index) => (
                                            <ProjectCard key={index} {...project} />
                                        ))}
                                    </Row>
                                </Tab.Pane>
                                <Tab.Pane eventKey="third">
                                    <Row>
                                        {noprojects.map((project, index) => (
                                            <ProjectCard key={index} {...project} />
                                        ))}
                                    </Row>
                                </Tab.Pane>
                            </Tab.Content>
                        </Tab.Container>
                    </Col>
                </Row>
            </Container>
            {/* <img className='background-image-right' src={colorSharp2} alt="Background decoration" /> */}
        </section>
    )
}
