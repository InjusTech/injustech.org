import React from "react"
import Layout from "../components/layout"
import { Card } from "react-bootstrap"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faWindowMaximize } from "@fortawesome/free-regular-svg-icons"
import { faHeadset, faServer } from "@fortawesome/free-solid-svg-icons"
import ContactForm from "../components/contact"
import DonateForm from "../components/donate"
import MiniSignUpForm from "../components/mini-sign-up"
import Collaboration from "../images/onlinecollaboration.svg"

const IndexPage = () => (
  <Layout>
    <section className="landing-section">
      <div className="container">
        <div className="row justify-content-center align-items-center justify-content-between">
          <div className="col-md-6 pr-xl-5 mt-4">
            <h1 className="display-4 mb-3">
              Getting black-owned businesses online
            </h1>
            <p className="lead">
              We provide black-owned businesses with free website development,
              tech support, and 3 months of web hosting to give your business
              the necessary tools to get digitally up and running. Add your
              email below and we will reach out to get to know your business
              needs!
            </p>
            <MiniSignUpForm></MiniSignUpForm>
          </div>
          <div className="col-md-5">
            <img
              alt="hanging"
              className="img-fluid"
              src={require("../images/homewebsite.png")}
            />
          </div>
        </div>
      </div>
    </section>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
      <path
        fill="#f1f6fd"
        fill-opacity="1"
        d="M0,192L80,202.7C160,213,320,235,480,234.7C640,235,800,213,960,208C1120,203,1280,213,1360,218.7L1440,224L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
      ></path>
    </svg>
    <section className="alt-primary" style={{ paddingBottom: "6rem" }}>
      <div className="container">
        <div className="row mb-4">
          <div className="col">
            <h1 className="h1">What we provide</h1>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4 mb-4">
            <Card className="rounded">
              <Card.Body className="px-4 py-4">
                <Card.Title className="mb-4">
                  <FontAwesomeIcon
                    icon={faWindowMaximize}
                    size="4x"
                    color="#78C0E0"
                  />
                </Card.Title>
                <Card.Text>
                  <h3>Website</h3>
                  <p>
                    Our experienced development team will design and code a
                    custom website for your organization. You simply tell us
                    what your company does, any design standards, or anything
                    else we need to know to make your business stand out on the
                    web.
                  </p>
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
          <div className="col-md-4 mb-4">
            <Card className="rounded">
              <Card.Body className="px-4 py-4">
                <Card.Title className="mb-4">
                  <FontAwesomeIcon icon={faHeadset} size="4x" color="#78C0E0" />
                </Card.Title>
                <Card.Text>
                  <h3>Tech Support</h3>
                  <p>
                    We will manage the whole process for you -- even after your
                    website is up-and-running. You can report any issues to us
                    and our team will fix them as soon as possible. We take the
                    needless stress off your hands, so you can focus on running
                    your business.
                  </p>
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
          <div className="col-md-4 mb-4">
            <Card className="rounded">
              <Card.Body className="px-4 py-4">
                <Card.Title className="mb-4">
                  <FontAwesomeIcon icon={faServer} size="4x" color="#78C0E0" />
                </Card.Title>
                <Card.Text>
                  <h3>Hosting</h3>
                  <p>
                    Owning a website is expensive. Between buying the domain and
                    paying monthly hosting costs, a webiste provides an extra
                    financial burden that is often unmanageable for small
                    businesses. That's why we are happy to handle those costs
                    for you.
                  </p>
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
    </section>
    <section className="landing-section">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-6 mb-5">
            <img alt="collaborate" className="img-fluid" src={Collaboration} />
          </div>
        </div>
        <div id="contribute_anchor" className="row mb-4">
          <div className="col-md-6">
            <div className="mb-5">
              <h2 className="text-center">Contribute</h2>
              <p className="lead">
                We are looking for talented developers looking to give back
                their skills. We welcome anyone with web development experience,
                preferably with the following tools: React, HTML, CSS, NodeJs,
                Bootstrap, Gatsby. Reach out today to use your coding skills to
                help bolster BIPOC organizations!
              </p>
            </div>
            <ContactForm></ContactForm>
          </div>
          <div className="col-md-6">
            <div className="mb-5">
              <h2 className="text-center">Donate</h2>
              <p className="lead">
                We're working on registering as a 501(c)(3) non-profit in order
                to accept official donations. In the mean time, feel free to
                shoot our developers a venmo @jack-weiler if you want to
                contribute directly to the hosting costs of our businesses.
                Venmo and fill out the below form to receive receipts!
              </p>
            </div>
            <DonateForm></DonateForm>
          </div>
        </div>
      </div>
    </section>
  </Layout>
)

export default IndexPage
