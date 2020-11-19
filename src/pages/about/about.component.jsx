import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./about.css";
import Profile from "../../assets/img/profile/me.jpg";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";
import Resume from "../../assets/MosesResumé.pdf";

const About = () => {
  return (
    <div id="about">
      <div className="about">
        <h1 className="pt-3 text-center font-details pb-3">ABOUT ME</h1>
        <Container>
          <Row className="pt-3 pb-5 align-items-center">
            <Col xs={12} md={6}>
              <Row className="justify-content-center mb-2 mr-2 ">
                <Image
                  className="profile justify-content-end"
                  alt="profile"
                  src={Profile}
                  thumbnail
                  fluid
                />
              </Row>
            </Col>
            <Col xs={12} md={6}>
              <Row className=" align-items-start p-2 my-details rounded">
                Hi! I am <strong>&nbsp;Moses Kamara</strong>
                <br />
                I'm a Full Stack Developer with extensive experience in
                information technology and responsive web development. Recently,
                I attended a Certification program in Full Stack Web Development
                through the University of Washington, where I learned best
                practices for designing powerful mobile-friendly websites and
                applications.
                <Col className="d-flex justify-content-center flex-wrap">
                  <h4>
                    <b>Technical Skills:</b>
                  </h4>
                  <ul>
                    <li>
                      <b>Programming Languages:</b> HTML, CSS, Javascript
                    </li>
                    <li>
                      <b>Database Management:</b> Mysql, Sequelize, MongoDb,
                      Mongoose
                    </li>
                    <li>
                      <b>Libraries / Frameworks: </b>jQuery, React.js, Redux,
                      Express.js, Bootstrap, Materialize
                    </li>
                    <li>
                      <b>Other Technologies: </b>Node.js, Passport.js,
                      Handlebars, Git, Heroku, JWT Auth, AJAX, IndexedDB API
                    </li>
                  </ul>
                  <div>
                    <a
                      href={Resume}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="resumeLink"
                    >
                      <Button className="m-2" variant="outline-primary">
                        Download Resumé
                      </Button>
                    </a>
                  </div>
                  <div>
                    <a
                      href="https://github.com/kamara-moses"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button className="m-2" variant="outline-dark">
                        GitHub
                      </Button>
                    </a>
                  </div>
                  <div>
                    <a
                      href="https://www.linkedin.com/in/moses-kamara/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button className="m-2" variant="outline-info">
                        LinkedIn
                      </Button>
                    </a>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default About;
