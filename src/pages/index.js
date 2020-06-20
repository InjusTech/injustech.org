import React from "react"
import Layout from "../components/layout"
import LandingIllustration from "../images/landing_illustration.svg"
import { Card, Form, Button } from "react-bootstrap"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faWindowMaximize } from "@fortawesome/free-regular-svg-icons"
import { faHeadset, faServer } from "@fortawesome/free-solid-svg-icons"
import ContactForm from "../components/contact"
import DonateForm from "../components/donate"

const IndexPage = () => (
  <Layout>
    <section className="has-section-divider">
      <div className="container">
        <div className="row justify-content-center align-items-center justify-content-between">
          <div className="col-md-6 pr-xl-5">
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
            <form class="d-sm-flex mb-2 mt-4">
              <input
                type="email"
                class="form-control form-control-lg mr-sm-2 mb-2 mb-sm-0"
                placeholder="your-email@email.com"
              />
              <button class="btn-lg btn btn-primary text-nowrap" type="submit">
                Sign Up
              </button>
            </form>
          </div>
          <div className="col-md-5">
            <img
              alt="hanging"
              className="img-fluid"
              src={LandingIllustration}
            />
          </div>
        </div>
      </div>
      <div>
        <svg
          className="divider"
          id="Layer_1"
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          height="96"
          width="100%"
          viewBox="0 0 1920 96"
        >
          <defs>
            <style>{".cls-1{fill:#f1f6fd;}"}</style>
          </defs>
          <path
            className="cls-1"
            d="M1945.5,158.5H-37.5v-78a3353.9,3353.9,0,0,1,591-46c261.66,2.78,384,34.75,614,46,180.07,8.81,446,5.9,778-58"
          />
        </svg>
      </div>
    </section>
    <section className="landing-section alt-primary">
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
                    color="#84CEEB"
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
                  <FontAwesomeIcon icon={faHeadset} size="4x" color="#84CEEB" />
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
                  <FontAwesomeIcon icon={faServer} size="4x" color="#84CEEB" />
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
          <div className="col-md-7">
            <img
              alt="collaborate"
              className="img-fluid"
              src={require("../images/collaborate.png")}
            />
          </div>
        </div>
        <div className="row mb-4">
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
