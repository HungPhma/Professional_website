import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from './ProjectCard';
// import colorSharp2 from '../assets/img/color-sharp2.png';
import project1 from '../assets/img/Inventory.png';
// import project2 from '../assets/img/project2.png';
import project3 from '../assets/img/project3.png';
import project4 from '../assets/img/game1.png';
import project5 from '../assets/img/botbot.jpg';
// import project6 from '../assets/img/project-img3.png';
import noproject1 from '../assets/img/noproject1.png';

export const Projects = () => {
    const projects = [
    {
        title: "Botbotphotography.com",
        description: "A modern photography portfolio showcasing stunning visuals, responsive design, and seamless user experience. Explore creative galleries and connect through an intuitive contact form.",
        imgUrl: project5,
        role: "Developer",
        technologies: ["JavaScript", "HTML", "CSS (SCSS)", "Node.js", "Express.js", "Github"],
        frameworks: ["React"],
        dates: "July 2024 – August 2024",
        tasks: [
            "Developed a React-based frontend with SCSS for custom styling and mobile responsiveness.",
            "Built a Node.js + Express.js backend to handle contact form submissions securely.",
            "Hosted the frontend on GitHub Pages and integrated it with the backend.",
            "Optimized performance with lazy loading and media queries for an improved user experience."
        ]
    },
    {
        title: "Hung’s Hotel game",
        description: "An immersive horror/puzzle game where players solve puzzles to escape a liminal hotel environment.",
        imgUrl: project4,
        role: "Game Developer",
        technologies: ["C#", "Unity", "Git"],
        frameworks: [],
        dates: "Feb 2024 – Apr 2024",
        tasks: [
            "Engaged players in a captivating storyline set in a liminal hotel environment, blurring the lines between reality and the supernatural.",
            "Designed intricate puzzles for each room, offering players a mix of logic, exploration, and problem-solving challenges.",
            "Optimized game performance using Unity’s profiling tools to ensure smooth gameplay across various hardware configurations.",
            "Managed development using Git for version control and seamless collaboration."
        ]
    },
    {
        title: "Retail-Store Inventory",
        description: "A local database system to manage product information, stock levels, sales transactions, and user credentials for a retail store.",
        imgUrl: project1,
        role: "Software Developer",
        technologies: ["C++", "Github"],
        frameworks: [],
        dates: "Feb 2024 – Apr 2024",
        tasks: [
            "Designed and implemented an efficient local database system to manage product information, stock levels, sales transactions, and user credentials.",
            "Conducted thorough testing and troubleshooting to ensure the system's reliability and accuracy.",
            "Maintained memory management quality by using Valgrind to prevent memory leaks.",
            "Implemented a basic login system to secure access to the inventory system."
        ]
    },
    {
        title: "Traffic Conviction",
        description: "This research analyzes traffic conviction records from the NYS DMV to identify trends in violations across various laws. It examines types of offenses, offender demographics, and geographic distribution, using data to predict likely violations based on factors like age, sex, year, and court name. The goal is to find patterns that can help allocate resources to prevent traffic violations in specific demographic groups.",
        imgUrl: project3,
        role: "Data Analyst",
        technologies: ["Python", "Pandas", "Matplotlib"],
        frameworks: [],
        dates: "March 2024 – June 2024",
        tasks: [
            "Analyzed traffic conviction records from the NYS DMV to identify trends in violations.",
            "Explored types of offenses, offender demographics, and geographic distribution of violations.",
            "Used statistical models to predict likely violations based on demographic and temporal factors.",
            "Created visualizations to communicate findings using Matplotlib and Pandas."
        ]
    },
    // Add more projects as needed
];    

    const noprojects = [
        {
            title: "",
            description: "",
            imgUrl: noproject1,
            technologies: [],
            frameElement: [],
            dates: "",
            task: []
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
        </section>
    )
}
