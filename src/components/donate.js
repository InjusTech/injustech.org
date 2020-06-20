import React, { Component } from "react"
import * as emailjs from "emailjs-com"
import { Card, Form, Button } from "react-bootstrap"

class DonateForm extends Component {
  state = {
    email: "",
    name: "",
    business: "",
  }
  handleSubmit(e) {
    e.preventDefault()
    const { email, name, business } = this.state
    let templateParams = {
      from_name: email,
      to_name: "InjusTech",
      subject: name.concat(" wants to donate!"),
      message_html: "Name: "
        .concat(name)
        .concat(" Business: ")
        .concat(business),
    }
    emailjs.send(
      "gmail",
      "template_E250JsFz",
      templateParams,
      "user_m60oJdTQRZjxaOD5xYXBe"
    )
    this.resetForm()
  }
  resetForm() {
    this.setState({
      email: "",
      name: "",
      business: "",
    })
  }
  handleChange = (param, e) => {
    this.setState({ [param]: e.target.value })
  }
  render() {
    return (
      <Form onSubmit={this.handleSubmit.bind(this)}>
        <Form.Group className="mr-4" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            value={this.state.email}
            onChange={this.handleChange.bind(this, "email")}
            type="email"
            placeholder="Enter email"
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>
        <Form.Group className="mr-4" controlId="formBasicEmail">
          <Form.Label>Name</Form.Label>
          <Form.Control
            value={this.state.github}
            onChange={this.handleChange.bind(this, "name")}
            placeholder="Full name"
          />
        </Form.Group>
        <Form.Group className="mr-4">
          <Form.Label>Businesses</Form.Label>
          <Form.Control
            value={this.state.linkedIn}
            onChange={this.handleChange.bind(this, "business")}
            placeholder="Specific business(es) you want to support"
          />
        </Form.Group>
        <button
          style={{ color: "#ffffff" }}
          className="btn mt-3 primary"
          back
          type="submit"
        >
          Submit
        </button>
      </Form>
    )
  }
}
export default DonateForm
