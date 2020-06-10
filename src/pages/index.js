import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import LandingIllustration from '../images/landing_illustration.svg';
import Divider from '../images/divider1.svg';

const IndexPage = () => (
  <Layout>
    <section className="landing-section">
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
    <section className="landing-section alt-primary h-100">
    </section>
  </Layout>
)

export default IndexPage
