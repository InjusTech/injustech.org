import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import LandingIllustration from '../images/landing_illustration.svg';
import Divider from '../images/divider1.svg';
import { Card } from "react-bootstrap";
import { FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faWindowMaximize } from "@fortawesome/free-regular-svg-icons";
import { faHeadset, faServer } from "@fortawesome/free-solid-svg-icons";

const IndexPage = () => (
  <Layout>
    <section className="has-section-divider">
      <div className="container">
        <div className="row justify-content-center align-items-center justify-content-between">
          <div className="col-md-6">
            <h1 className="display-4 mb-3">Lorem ipsum dolor sit amet</h1>
            <p className="lead">Lorem ipsum dolor sit amet, consectetur adipiscing
              elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          </div>
          <div className="col-md-5">
            <img className="img-fluid" src={LandingIllustration} />
          </div>
        </div>
      </div>
      <div>
        <svg className="divider" id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" height="96" width="100%" viewBox="0 0 1920 96">
          <defs>
            <style>{".cls-1{fill:#f1f6fd;}"}</style>
          </defs>
          <path className="cls-1"
                d="M1945.5,158.5H-37.5v-78a3353.9,3353.9,0,0,1,591-46c261.66,2.78,384,34.75,614,46,180.07,8.81,446,5.9,778-58"/>
        </svg>
      </div>
    </section>
    <section className="landing-section alt-primary">
      <div className="container">
        <div className="row mb-5">
          <div className="col mx-auto">
            <h1 className="text-center">What we provide</h1>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4 mb-4">
            <Card className="rounded">
              <Card.Body className="px-4 py-4">
                <Card.Title className="mb-4">
                  <FontAwesomeIcon icon={faWindowMaximize} size="4x" color="#84CEEB"/>
                </Card.Title>
                <Card.Text>
                  <h3>Website</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco
                    laboris nisi ut aliquip ex ea commodo consequat.
                  </p>
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
          <div className="col-md-4 mb-4">
            <Card className="rounded">
              <Card.Body className="px-4 py-4">
                <Card.Title className="mb-4">
                  <FontAwesomeIcon icon={faHeadset} size="4x" color="#84CEEB"/>
                </Card.Title>
                <Card.Text>
                  <h3>Technical Support</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco
                    laboris nisi ut aliquip ex ea commodo consequat.
                  </p>
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
          <div className="col-md-4 mb-4">
            <Card className="rounded">
              <Card.Body className="px-4 py-4">
                <Card.Title className="mb-4">
                  <FontAwesomeIcon icon={faServer} size="4x" color="#84CEEB"/>
                </Card.Title>
                <Card.Text>
                  <h3>Hosting</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco
                    laboris nisi ut aliquip ex ea commodo consequat.
                  </p>
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
    </section>
  </Layout>
)

export default IndexPage
