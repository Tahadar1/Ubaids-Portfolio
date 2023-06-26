import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import animation1 from "../assets/Animations/Animations 1.jpeg";
import animation2 from "../assets/Animations/Animation 2.jpeg";
import animation3 from "../assets/Animations/animation 3.jpeg";
import video1 from "../assets/VideoEditing/video 1.jpeg";
import video2 from "../assets/VideoEditing/video 2.jpeg";
import video3 from "../assets/VideoEditing/video 3.png";
// import "animate.css";
import TrackVisibility from "react-on-screen";

export const Projects = () => {
  const animations = [
    {
      id: 1,
      title: "POCO F5 Series Countdown Animation",
      description: (
        <span>
          POCO F5 Series Countdown Animation: An enthralling animation
          masterpiece created with Adobe After Effects for your viewing
          pleasure.<br></br>
          <h4>
            <a href="https://youtube.com/shorts/_w1qyGfVQ4Q?feature=share">
              Go to Demo
            </a>
          </h4>
        </span>
      ),
      imgUrl: animation1,
    },
    {
      id: 2,
      title: "ChocoDaates Animation Assorted",
      description: (
        <span>
          ChocoDaates Animation Assorted: A delectable animation project
          featuring Chocodate creations, brought to life with Adobe After
          Effects.<br></br>
          <h4>
            <a href="https://youtube.com/shorts/tacQT-oEY0E?feature=share">
              Go to Demo
            </a>
          </h4>
        </span>
      ),
      imgUrl: animation2,
    },
    {
      id: 3,
      title: "Big 5 Saudi Animation Thanks to Speaker at Big 5 Exhibition",
      description: (
        <span>
          Big 5 Saudi Animation: A captivating project showcasing gratitude to
          speakers at Big 5 Saudi, meticulously crafted using Adobe After
          Effects. An immersive visual experience.<br></br>
          <h4>
            <a href=" https://youtube.com/shorts/tZpBUkAlTQU?feature=share">
              Go to Demo
            </a>
          </h4>
        </span>
      ),
      imgUrl: animation3,
    },
  ];

  const videoEditing = [
    {
      title: "CrossLine Agency Service",
      description: (
        <span>
          A recent real estate project I successfully completed, showcasing the
          exceptional services provided by the client. Experience the excellence
          of CrossLine Agency in the realm of real estate.<br></br>
          <h4>
            <a href="https://youtu.be/eUYmYxNnVUU">Go to Demo</a>
          </h4>
        </span>
      ),
      imgUrl: video1,
    },
    {
      title: "Explore Ismail Art Gallery",
      description: (
        <span>
          Discover the captivating world of art at Ismail Art Gallery, where
          creativity and inspiration come together in perfect harmony.<br></br>
          <h4>
            <a href=" https://youtu.be/x7B-N0Rz-rs">Go to Demo</a>
          </h4>
        </span>
      ),
      imgUrl: video2,
    },
    {
      title: "Coming Soon...",
      description: "",
      imgUrl: video3,
    },
  ];
  const projects = [
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg1,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg2,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg3,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg1,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg2,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg3,
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
                    As a professional in the field, I have extensive experience
                    in creating captivating visuals that bring ideas to life.
                    These are some of the projects I have done feel free to go
                    through them and many other are uploaded on my Youtube
                    channel make sure to check that out too.
                  </p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav
                      variant="pills"
                      className="nav-pills mb-5 justify-content-center align-items-center"
                      id="pills-tab"
                    >
                      <Nav.Item>
                        <Nav.Link eventKey="first">
                          Motion Graphics Projects
                        </Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">
                          Video Editing Projects
                        </Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">
                          Graphic Designing Projects
                        </Nav.Link>
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
                          {animations.map((project, index) => (
                            <ProjectCard key={index} {...project} />
                          ))}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <Row>
                          {videoEditing.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane
                        eventKey="third"
                        style={{
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                      >
                        <Row>
                          <h1>Updating...</h1>
                        </Row>
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
};
