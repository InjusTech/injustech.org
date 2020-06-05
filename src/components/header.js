// import { Link } from "gatsby"
import React from "react"
import { Nav, Navbar } from "react-bootstrap"

const Header = () => (
  <Navbar bg="white" expand="md">
    <Navbar.Brand href="/">Test</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="ml-auto">
        <Nav.Link href='/' className="nav-item">Home</Nav.Link>
        <Nav.Link href='/' className="nav-item">Home</Nav.Link>
        <Nav.Link href='/' className="nav-item">Home</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);

export default Header;
