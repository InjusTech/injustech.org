import "../styles/footer.scss"
import React from "react"
import Nav from "react-bootstrap/Nav"

const mapIcon = (
  <svg
    class="bi bi-map"
    width="1em"
    height="1em"
    viewBox="0 0 16 16"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill-rule="evenodd"
      d="M15.817.613A.5.5 0 0 1 16 1v13a.5.5 0 0 1-.402.49l-5 1a.502.502 0 0 1-.196 0L5.5 14.51l-4.902.98A.5.5 0 0 1 0 15V2a.5.5 0 0 1 .402-.49l5-1a.5.5 0 0 1 .196 0l4.902.98 4.902-.98a.5.5 0 0 1 .415.103zM10 2.41l-4-.8v11.98l4 .8V2.41zm1 11.98l4-.8V1.61l-4 .8v11.98zm-6-.8V1.61l-4 .8v11.98l4-.8z"
    />
  </svg>
)

export default function Footer() {
  return (
    <div className="footer-container">
      <div className="first-half">
        <div className="subcontainer">
          <h5>Navigate</h5>
          <a className="link-item" href="/">
            Home
          </a>
          <a className="link-item" href="/about">
            About
          </a>
          <a className="link-item" href="/">
            Contribute
          </a>
        </div>
        <div className="subcontainer">
          <h5>Contact</h5>
          <p className="sub-item">jaweiler5454@gmail.com</p>
          <p className="sub-item">(612) 805-8554</p>
          <p className="sub-item">LinkedIn</p>
        </div>
      </div>
      <div className="second-half">
        <div className="subcontainer">
          <h5>Donate</h5>
        </div>
      </div>
    </div>
  )
}
