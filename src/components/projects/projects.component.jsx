import React from "react";
import { Timeline, Events, UrlButton, ImageEvent } from "@merc/react-timeline";


// projects
import trader_pro from "../../assets/img/projects/trader_pro.png";
import trails from "../../assets/img/projects/Trails.png";
import userdirectory from "../../assets/img/projects/userdirectory.png";
import burger from "../../assets/img/projects/Burger.png";
import scheduler from "../../assets/img/projects/scheduler_app.png";
import weather_dashboard from "../../assets/img/projects/Weather-Dashboard.png";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import "./projects.css";

{/* Projects being shown in a timeline manner */}
const TimeLine = () => {
  return (
    <div id="projects">
      <h1 className="pt-3 text-center font-details-b pb-3">PROJECTS</h1>
      <Timeline>
        <Events>
        <ImageEvent
            className="text-center"
            text="Trader Pro App"
            src={trader_pro}
            alt="Trader Pro App"
          >
            <div className="d-flex justify-content-between flex-column mt-1">
              <div>
                <Accordion>
                  <Card>
                    <Accordion.Toggle
                      as={Card.Header}
                      eventKey="0"
                      className="p-2 text-center accordian-main"
                    >
                      PROJECT DETAILS
                    </Accordion.Toggle>

                    <Accordion.Collapse eventKey="0" className="text-left">
                      <Card.Body>
                        <strong>Description:</strong> This is an application that allows user to select a stock they will like to watch and receive real time stock market info for the stock of their choosing
                        <hr />
                        <strong>Features:</strong>
                        <ul className="list-styles pt-1">
                          <li>Real Time Stock Info</li>
                          <li>Tracking of Stocks</li>
                          <li>Respoisive Design</li>
                        </ul>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </div>
              <div className="d-flex justify-content-between flex-nowrap text-center">
                <UrlButton
                  href="https://obscure-river-40422.herokuapp.com/"
                  target="_blank"
                >
                  View Project
                </UrlButton>
                <UrlButton
                  href="https://github.com/kamara-moses/trader-pro"
                  target="_blank"
                >
                  GitHub
                </UrlButton>
              </div>
            </div>
          </ImageEvent>

<ImageEvent
            className="text-center"
            text="Trails App"
            src={trails}
            alt="Trails App"
          >
            <div className="d-flex justify-content-between flex-column mt-1">
              <div>
                <Accordion>
                  <Card>
                    <Accordion.Toggle
                      as={Card.Header}
                      eventKey="0"
                      className="p-2 text-center accordian-main"
                    >
                      PROJECT DETAILS
                    </Accordion.Toggle>

                    <Accordion.Collapse eventKey="0" className="text-left">
                      <Card.Body>
                        <strong>Description:</strong> This applications allows users to search for any trail they would like to walk within the city or state of their choice.
                        <hr />
                        <strong>Features:</strong>
                        <ul className="list-styles pt-1">
                          <li>Enter City/State name</li>
                          <li>Real-time API calls with Backend features that renders Trails Information</li>
                          <li>Styled with  CSS3</li>
                        </ul>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </div>
              <div className="d-flex justify-content-between flex-nowrap text-center">
                <UrlButton
                  href="https://kamara-moses.github.io/Trails/"
                  target="_blank"
                >
                  View Project
                </UrlButton>
                <UrlButton
                  href="https://github.com/kamara-moses/trails"
                  target="_blank"
                >
                  GitHub
                </UrlButton>
              </div>
            </div>
          </ImageEvent>

          <ImageEvent
            className="text-center"
            text="Team Directory App"
            src={userdirectory}
            alt="User Directory App"
          >
            <div className="d-flex justify-content-between flex-column mt-1">
              <div>
                <Accordion>
                  <Card>
                    <Accordion.Toggle
                      as={Card.Header}
                      eventKey="0"
                      className="p-2 text-center accordian-main"
                    >
                      PROJECT DETAILS
                    </Accordion.Toggle>

                    <Accordion.Collapse eventKey="0" className="text-left">
                      <Card.Body>
                        <strong>Description:</strong> Application that allows owners/manager quickly finds their employees in their system.
                        <hr />
                        <strong>Features:</strong>
                        <ul className="list-styles pt-1">
                          <li>Search any employee name</li>
                          <li>Real-time API calls</li>
                        </ul>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </div>
              <div className="d-flex justify-content-between flex-nowrap text-center">
                <UrlButton
                  href="https://kamara-moses.github.io/UserDirectory/"
                  target="_blank"
                >
                  View Project
                </UrlButton>
                <UrlButton
                  href="https://github.com/kamara-moses/UserDirectory"
                  target="_blank"
                >
                  GitHub
                </UrlButton>
              </div>
            </div>
          </ImageEvent>

          <ImageEvent
            className="text-center"
            text="Burger App"
            src={burger}
            alt="Burger App"
          >
            <div className="d-flex justify-content-between flex-column mt-1">
              <div>
                <Accordion>
                  <Card>
                    <Accordion.Toggle
                      as={Card.Header}
                      eventKey="0"
                      className="p-2 text-center accordian-main"
                    >
                      PROJECT DETAILS
                    </Accordion.Toggle>

                    <Accordion.Collapse eventKey="0" className="text-left">
                      <Card.Body>
                        <strong>Description:</strong> Eat-Da-Burger! is a restaurant app that lets users input the names of burgers they'd like to eat. Whenever a user submits a burger's name, the app will display the burger on the left side of the page -- waiting to be devoured. Each burger in the waiting area also has a `Devour it!` button. When the user clicks it, the burger will move to the right side of the page.
The app will store every burger in a database, whether devoured or not.
                        <hr />
                        <strong>Features:</strong>
                        <ul className="list-styles pt-1">
                          <li>Enter new burger</li>
                          <li>Deletes burgers</li>
                          <li>Can add and restore devoured burgers</li>
                        </ul>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </div>
              <div className="d-flex justify-content-between flex-nowrap text-center">
                <UrlButton
                  href="https://k-burger.herokuapp.com/"
                  target="_blank"
                >
                  View Project
                </UrlButton>
                <UrlButton
                  href="https://github.com/kamara-moses/Burger"
                  target="_blank"
                >
                  GitHub
                </UrlButton>
              </div>
            </div>
          </ImageEvent>

          <ImageEvent
            className="text-center"
            text="Scheduler App"
            src={scheduler}
            alt="Scheduler App"
          >
            <div className="d-flex justify-content-between flex-column mt-1">
              <div>
                <Accordion>
                  <Card>
                    <Accordion.Toggle
                      as={Card.Header}
                      eventKey="0"
                      className="p-2 text-center accordian-main"
                    >
                      PROJECT DETAILS
                    </Accordion.Toggle>

                    <Accordion.Collapse eventKey="0" className="text-left">
                      <Card.Body>
                        <strong>Description:</strong> An application that allows a user to save activities to a calender and be able to retrieve the data at a later time.
                        <hr />
                        <strong>Features:</strong>
                        <ul className="list-styles pt-1">
                          <li>Enter an activity into a date and time</li>
                          <li>Reference the scheduler to see what activity is plan for that date and time</li>
                          <li>Use the colors to determine past, present and future activity</li>
                        </ul>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </div>
              <div className="d-flex justify-content-between flex-nowrap text-center">
                <UrlButton
                  href="https://kamara-moses.github.io/Day-Planner/"
                  target="_blank"
                >
                  View Project
                </UrlButton>
                <UrlButton
                  href="https://github.com/kamara-moses/Day-Planner"
                  target="_blank"
                >
                  GitHub
                </UrlButton>
              </div>
            </div>
          </ImageEvent>

          <ImageEvent
            className="text-center"
            text="Weather Dashboard App"
            src={weather_dashboard}
            alt="Weather Dashboard"
          >
            <div className="d-flex justify-content-between flex-column mt-1">
              <div>
                <Accordion>
                  <Card>
                    <Accordion.Toggle
                      as={Card.Header}
                      eventKey="0"
                      className="p-2 text-center accordian-main"
                    >
                      PROJECT DETAILS
                    </Accordion.Toggle>

                    <Accordion.Collapse eventKey="0" className="text-left">
                      <Card.Body>
                        <strong>Description:</strong> An application that allows users to search for the weather within a city/state of their choosing. They will see the current and five day forecast for that city that they chose.
                        <hr />
                        <strong>Features:</strong>
                        <ul className="list-styles pt-1">
                          <li>Weathe Details by State</li>
                          <li>UV Index of each state according to the weather</li>
                          <li>Five day forecast</li>
                        </ul>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </div>
              <div className="d-flex justify-content-between flex-nowrap text-center">
                <UrlButton
                  href="https://kamara-moses.github.io/Weather-Dashboard/"
                  target="_blank"
                >
                  View Project
                </UrlButton>
                <UrlButton
                  href="https://github.com/kamara-moses/Weather-Dashboard"
                  target="_blank"
                >
                  GitHub
                </UrlButton>
              </div>
            </div>
          </ImageEvent>
          </Events>
          </Timeline>
    </div>
  );
};

export default TimeLine;