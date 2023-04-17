import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/food.jpg";
import projImg2 from "../assets/img/spa.jpg";
import projImg3 from "../assets/img/mac.jpg";
import projImg4 from "../assets/img/todo.jpg";
import projImg5 from "../assets/img/tic.jpg";


import projImg6 from "../assets/img/cart.jpg";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Food Ordering Website",
      description: "Food delivery",
      imgUrl: projImg1,
    },
    {
      title: "Spa Salon",
      description: "Beautiful website for spa salon",
      imgUrl: projImg2,
    },
    {
      title: "McDonald's",
      description: "Clone of the famous McDonald's website",
      imgUrl: projImg3,
    },
    {
      title: "To Do App",
      description: "Time managament and efficiency",
      imgUrl: projImg4,
    },
    {
      title: "Tic Tac Toe",
      description: "Entertainment",
      imgUrl: projImg5,
    },
    {
      title: "Shopping Website",
      description: "Design & Development",
      imgUrl: projImg6,
    },
  ];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2>Projects</h2>
                  <p>
                    My projects tab showcases my portfolio of web development
                    and design projects, each demonstrating my skills in various
                    technologies and design principles.
                  </p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav
                      variant="pills"
                      className="nav-pills mb-5 justify-content-center align-items-center"
                      id="pills-tab"
                    >
                      <Nav.Item>
                        <Nav.Link eventKey="first">Tab 1</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Tab 2</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Tab 3</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content
                      id="slideInUp"
                      className={
                        isVisible ? "animate__animated animate__slideInUp" : ""
                      }
                    >
                      <Tab.Pane eventKey="first">
                        <Row>
                          {projects.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="section">
                        <p>
                        My portfolio of web development projects encompasses diverse domains, ranging from an intuitive food ordering application to a stylish website for a spa salon, a sophisticated tweeting app, a playful tic-tac-toe game, and a functional to-do list application. Currently, I am working on several other projects to expand my horizons and explore new opportunities in the field.
                        </p>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <p>
                        My portfolio of web development projects encompasses diverse domains, ranging from an intuitive food ordering application to a stylish website for a spa salon, a sophisticated tweeting app, a playful tic-tac-toe game, and a functional to-do list application. Currently, I am working on several other projects to expand my horizons and explore new opportunities in the field.
                        </p>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  );
}
