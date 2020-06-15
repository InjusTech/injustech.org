// import { Link } from "gatsby"
import React from "react"
import { Nav, Navbar } from "react-bootstrap"
import Image from "react-bootstrap/Image"

const icon = (
  <span class="logo">
    <a href="/">
      <img src="logo.png" height="50" width="120" />
    </a>
  </span>
)

const Header = () => (
  <div className="container">
    <Navbar
      className="justify-content-between"
      fixed="top"
      bg="white"
      expand="lg"
    >
      <Navbar.Brand href="/">
        <Image
          src={require("../images/logo.png")}
          width="125"
          height="40"
          rounded
          className="navbar-right"
        />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/about">About</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </div>
)

export default Header
