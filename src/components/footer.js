import "../styles/footer.scss"
import React from "react"
import { Link } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLinkedin } from "@fortawesome/free-brands-svg-icons"

export default function Footer() {
  return (
    <div className="primary">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-3 mt-5 mb-5">
            <h5>Navigate</h5>
            <div>
              <div className="mb-2">
                <Link className="link" to={"/"}>
                  Home
                </Link>
              </div>
              <div className="mb-2">
                <Link className="link mb-3" to={"/about"}>
                  About
                </Link>
              </div>
              <div className="mb-2">
                <Link className="link mb-3" to={"/signup"}>
                  Sign Up
                </Link>
              </div>
              <div className="mb-2">
                <Link className="link mb-3" to={"/#contribute_anchor"}>
                  Contribute
                </Link>
              </div>
            </div>
          </div>
          <div className="col-md-3 mt-5 mb-5">
            <h5>Contact</h5>
            <div>
              <p className="pfoot mb-2">injustech@gmail.com</p>
              <p className="pfoot mb-2">(612) 805-8554</p>
            </div>
          </div>
          <div className="col-md-3 mt-5 mb-5">
            <h5>Social</h5>
            <div>
              <a href="https://linkedin.com/company/injustech">
                <FontAwesomeIcon icon={faLinkedin} size="3x" color="#78C0E0" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
