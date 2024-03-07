import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              My <span className="purple">Resume </span>
            </h1>
            <p className="home-about-body">
              <h4 className="purple"> Học vấn </h4>
              <br />
              <span className="purple">Lập trình web Cao đẳng FPT</span> 2022 -
              2024 Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Optio quo repudiandae.
              <br />
              <hr />
              <span className="purple">
                Trung học phổ thông Phan Bội Châu
              </span>{" "}
              2022 - 2024 Lorem ipsum dolor sit amet, consectetur adipisicing
              elit. Optio quo repudiandae.
              <br />
              <hr />
              <span className="purple">Lập trình web Cao đẳng FPT</span> 2022 -
              2024 Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Optio quo repudiandae.
              <br />
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
