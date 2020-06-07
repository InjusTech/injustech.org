import React from "react"
import { Row, Col, Container } from "reactstrap"
import Layout from "../components/layout"
import "../styles/about.css"
import Image from "react-bootstrap/Image"

const AboutPage = () => (
  <Layout>
    <div style={{ width: "%" }}>
      <h1>About Us</h1>
      <h2>
        The InjusTech Project's mission is to redistribute digital
        entrepeneurship, hoping to restore balance to a landscape
        underrepresented by BIPOC creators.
      </h2>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
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
          stagnant through the Dot-Com era. By removing the cost and time
          bottleneck to get on the internet, we hope to help that that 9% number
          skyrocket.
        </div>
        <Image id="first-strip-img" src={require("../images/chart.png")} />
      </div>
    </div>{" "}
    <Container>
      <Row className="py-5"></Row>
    </Container>
  </Layout>
)
export default AboutPage
