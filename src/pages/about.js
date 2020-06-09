import React from "react"
import { Row, Col, Container } from "reactstrap"
import Layout from "../components/layout"
import "../styles/about.css"
import Image from "react-bootstrap/Image"
import Carousel from "react-bootstrap/Carousel"

const AboutPage = () => (
  <Layout>
    <div style={{ paddingBottom: "0%" }}>
      <h1>About Us</h1>
      <div class="flex-class">
        <h2 style={{ paddingRight: "0%", paddingBottom: "0%" }}>
          The InjusTech Project's mission is to redistribute digital
          entrepeneurship, hoping to restore balance to a landscape
          underrepresented by BIPOC creators. With the growing desire to support
          black-owned businesses, we believe no company should get overlooked.
          That's why we are so passionate about this project.
        </h2>
        <Image
          width="33%"
          height="350px"
          style={{ paddingRight: "10%" }}
          src={require("../images/blmlogo.png")}
        />
      </div>
      <svg
        style={{ paddingTop: "0%" }}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
      >
        <path
          fill="#f1f6fd"
          fill-opacity="1"
          d="M0,192L80,186.7C160,181,320,171,480,170.7C640,171,800,181,960,165.3C1120,149,1280,107,1360,85.3L1440,64L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
        ></path>
      </svg>
      <div class="first-strip">
        <div id="first-strip-text">
          Digital integration is integral for growing businesses in the 21st
          century, but the growth of black entrepeneurship has remained fairly
          stagnant through the dot-com era. By removing the cost and time
          bottleneck to get on the internet, we hope to help that 9% number
          skyrocket.
        </div>
        <Image id="first-strip-img" src={require("../images/chart.png")} />
      </div>
      <div>
        <h3>Who We Are</h3>
        <p id="team-style">
          Our team brings years of website and app development experience. With
          experience ranging from internships at Fortune 50 companies to roles
          as the Chief Technology Officer for a series-A startup, we bring the
          tools needed to get your business where it wants to go. Check out
          samples of some of the past websites we've developed below!{" "}
        </p>
        <Carousel
          style={{ width: "80%", paddingLeft: "20%", paddingTop: "2%" }}
        >
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={require("../images/nookPic.png")}
              alt="First slide"
            />
            <Carousel.Caption></Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={require("../images/openPlusPic.png")}
              alt="Third slide"
            />

            <Carousel.Caption></Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={require("../images/hobbyistPic.png")}
              alt="Third slide"
            />

            <Carousel.Caption></Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    </div>{" "}
    <Container>
      <Row className="py-5"></Row>
    </Container>
  </Layout>
)
export default AboutPage
