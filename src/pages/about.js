import React from "react"
import { Row, Col, Container } from "reactstrap"
import Layout from "../components/layout"
import "../styles/about.scss"
import Image from "react-bootstrap/Image"
import Carousel from "react-bootstrap/Carousel"

const AboutPage = () => (
  <Layout>
    <section className="has-section-divider">
      <div className="container">
        <div className="row justify-content-center align-items-center justify-content-between">
          <div className="col-md-6 pr-xl-5">
            <h1 className="display-4">
              Redistributing Digital Entrepeneurship
            </h1>
            <h3 className="lead" style={{ fontSize: "32px" }}>
              The InjusTech Project's mission is to restore balance to a
              landscape underrepresented by BIPOC creators. With growing
              national support for black-owned businesses, we believe no company
              should get left in the analog age.
            </h3>
          </div>
          <div className="col-md-5">
            <img className="img-fluid" src={require("../images/blmlogo.png")} />
          </div>
        </div>
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 200">
        <path
          fill="#f1f6fd"
          fill-opacity="1"
          d="M0,96L60,112C120,128,240,160,360,170.7C480,181,600,171,720,144C840,117,960,75,1080,74.7C1200,75,1320,117,1380,138.7L1440,160L1440,200L1380,200C1200,200,1200,200,1080,200C960,200,840,200,720,200C600,200,480,200,360,200C240,200,120,200,60,200L0,200Z"
        ></path>
      </svg>
    </section>
    <section className="landing-section alt-primary">
      <div className="container">
        <div class="row">
          <div className="col-md-6">
            <p className="lead" style={{ fontSize: "28px" }}>
              Digital integration is integral for growing businesses in the 21st
              century, but the growth of black entrepeneurship has remained
              fairly stagnant through the dot-com era. By removing the cost and
              time bottleneck to get on the internet, we hope to help that 9%
              number skyrocket.
            </p>
          </div>
          <div className="col-md-6">
            <img className="img-fluid" src={require("../images/chart.png")} />
          </div>
        </div>
      </div>
    </section>
    <section>
      <div className="container">
        <div className="row justify-content-center align-items-center justify-content-between">
          <div className="mt-5">
            <h2 className="mb-3">Who We Are</h2>
            <p className="lead">
              Our team brings years of website and app development experience.
              With experience ranging from internships at Fortune 50 companies
              to roles as the Chief Technology Officer for a series-A startup,
              we bring the tools needed to get your business where it wants to
              go. Check out samples of some of the past websites we've developed
              below!{" "}
            </p>
          </div>
          <div className="row justify-content-center">
            <div className="col-md-10 mt-3">
              <Carousel>
                <Carousel.Item>
                  <img
                    className="img-fluid"
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
          </div>
        </div>
        <Container>
          <Row className="py-5"></Row>
        </Container>
      </div>
    </section>
  </Layout>
)
export default AboutPage
