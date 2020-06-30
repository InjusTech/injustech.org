import React from "react"
import { Nav, Navbar } from "react-bootstrap"
import Image from "react-bootstrap/Image"
import { Link } from "gatsby"
import "../styles/nav.scss"

const icon = (
  <span class="logo">
    <Link to={"/"}>
      <img src="logo.png" height="50" width="120" />
    </Link>
  </span>
)

const Header = () => (
  <div>
    <Navbar
      className="justify-content-between"
      fixed="top"
      bg="white"
      expand="lg"
    >
      <div className="container">
        <Navbar.Brand>
          <Link to={"/"}>
            <Image
              src={require("../images/logo.png")}
              width="125"
              height="40"
              rounded
            />
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Nav className="ml-auto">
            <Link className=" nav-link link" to={"/"}>
              Home
            </Link>
            <Link className="nav-link" to={"/about"}>
              About
            </Link>
            <Link className="nav-link" to={"/signup"}>
              Sign Up
            </Link>
            <Link className="nav-link" to={"/#contribute_anchor"}>
              Contribute
            </Link>
          </Nav>
        </Navbar.Collapse>
      </div>
    </Navbar>
  </div>
)

export default Header
