import React from "react";
import { Tab, Nav, Col, Row, NavDropdown } from "react-bootstrap";
import { DataComp } from "./DataComp";
import dummy from "../Images/pppppp.webp";
import { CardComp } from "./CardComp";
import TextCard from "../Component/TextCard";

const initialData = [
  {
    id: 1,
    name: "Omega trial versionActian Launches Zen 16.0, the Newest Version of its Embedded Database",
    src: "https://ondot-enterprisetalk.b-cdn.net/uploads/2024/06/1718889469645-Vyopta%20Analysis%20of%20Hybrid%20Collaboration%20Shows%20Strong%20Correlation%20Between%20Meeting%20Engagement%20Metrics%20@0.5x.webp?width=500",
    dateData: "12 jan 2024",
  },
  {
    id: 2,
    name: "Newctian Launches Zen 16.0, the Newest Version of its Embedded Database",
    src: "https://ondot-enterprisetalk.b-cdn.net/uploads/2024/06/1718889469645-Vyopta%20Analysis%20of%20Hybrid%20Collaboration%20Shows%20Strong%20Correlation%20Between%20Meeting%20Engagement%20Metrics%20@0.5x.webp?width=500",
    dateData: "12 jan 2024",
  },
  {
    id: 3,
    name: "Welltian Launches Zen 16.0, the Newest Version of its Embedded Database",
    src: "https://ondot-enterprisetalk.b-cdn.net/uploads/2024/06/1718889469645-Vyopta%20Analysis%20of%20Hybrid%20Collaboration%20Shows%20Strong%20Correlation%20Between%20Meeting%20Engagement%20Metrics%20@0.5x.webp?width=500",
    dateData: "12 jan 2024",
  },
  {
    id: 4,
    name: "Newctian Launches Zen 16.0, the Newest Version of its Embedded Database",
    src: "https://ondot-enterprisetalk.b-cdn.net/uploads/2024/06/1718889469645-Vyopta%20Analysis%20of%20Hybrid%20Collaboration%20Shows%20Strong%20Correlation%20Between%20Meeting%20Engagement%20Metrics%20@0.5x.webp?width=500",
    dateData: "12 jan 2024",
  },
  {
    id: 5,
    name: "Newctian Launches Zen 16.0, the Newest Version of its Embedded Database",
    src: "https://ondot-enterprisetalk.b-cdn.net/uploads/2024/06/1718889469645-Vyopta%20Analysis%20of%20Hybrid%20Collaboration%20Shows%20Strong%20Correlation%20Between%20Meeting%20Engagement%20Metrics%20@0.5x.webp?width=500",
    dateData: "12 jan 2024",
  },
  {
    id: 6,
    name: "Action Launches Zen 16.0, the Newest Version of its Embedded Database",
    src: "https://ondot-enterprisetalk.b-cdn.net/uploads/2024/06/1718889469645-Vyopta%20Analysis%20of%20Hybrid%20Collaboration%20Shows%20Strong%20Correlation%20Between%20Meeting%20Engagement%20Metrics%20@0.5x.webp?width=500",
    dateData: "12 jan 2024",
  },
  {
    id: 7,
    name: "Newctian Launches Zen 16.0, the Newest Version of its Embedded Database",
    src: "https://ondot-enterprisetalk.b-cdn.net/uploads/2024/06/1718889469645-Vyopta%20Analysis%20of%20Hybrid%20Collaboration%20Shows%20Strong%20Correlation%20Between%20Meeting%20Engagement%20Metrics%20@0.5x.webp?width=500",
    dateData: "12 jan 2024",
  },
];

const ContentCategory = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <h1 className="fw-bold py-1 mt-3">Articles</h1>
          <div className="hr"></div>
          <Tab.Container id="tabs-with-dropdown" defaultActiveKey="first">
            <Row className="clearfix mt-2">
              <Col sm={12}>
                <Nav variant="tabs">
                  <Nav.Item>
                    <Nav.Link eventKey="Filter" className="tabButton" disabled>
                      Filter :
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link
                      className="tabButton text-black backgRed"
                      href="/"
                    >
                      News
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <NavDropdown
                      title="More"
                      id="nav-dropdown-within-tab"
                      className="droptabs text-black colorblack"
                      style={{position:"static"}}
                    >
                      <NavDropdown.Item
                        Key="index"
                        className="colorblack backgRed"
                        href="/"
                      ></NavDropdown.Item>
                    </NavDropdown>
                  </Nav.Item>
                </Nav>
              </Col>
              <Col sm={12}>
                <Tab.Content>
                  <Tab.Pane eventKey="first">
                    <div className="row">
                      {Array.from({ length: 3 }).map((_, index) => (
                        <div className="col-md-4" key={index}>
                          <div className="mainSecondBox mt-3">
                            <DataComp src={dummy} alt="second" />
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="container mt-5 mb-5 borderT">
                      <div className="row">
                        <div className="col-md-8 col-12">
                          {initialData.map((item) => (
                            <div
                              key={item.id}
                              className="d-flex justify-content-evenly mt-2"
                            >
                              <div className="row align-items-center">
                                <div className="col-md-3 col-12 mt-3">
                                  <CardComp src={item.src} alt={item.name} />
                                </div>
                                <div className="col-md-9 col-12">
                                  <TextCard title={item.name} />
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                        <div className="col-md-4 col-12">
                          <CardComp src="https://ondot-enterprisetalk.b-cdn.net/uploads/pixel_img/talk_fintek_1.jpg?width=300" alt="content-card"/>
                        </div>
                      </div>
                    </div>
                  </Tab.Pane>
                </Tab.Content>
              </Col>
            </Row>
          </Tab.Container>
        </div>
      </div>
    </div>
  );
};

export default ContentCategory;
