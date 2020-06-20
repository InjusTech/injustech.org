import React, { Component } from "react"
import * as emailjs from "emailjs-com"
import { Card, Form, Button } from "react-bootstrap"

class ContactForm extends Component {
  state = {
    email: "",
    github: "",
    linkedIn: "",
  }
  handleSubmit(e) {
    e.preventDefault()
    const { email, github, linkedIn } = this.state
    let templateParams = {
      from_name: email,
      to_name: "InjusTech",
      subject: "Looking to Join Injustech Team",
      message_html: "Github: "
        .concat(github)
        .concat(" LinkedIn: ")
        .concat(linkedIn),
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
      github: "",
      linkedIn: "",
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
          <Form.Label>Github</Form.Label>
          <Form.Control
            value={this.state.github}
            onChange={this.handleChange.bind(this, "github")}
            placeholder="Github profile URL"
          />
        </Form.Group>
        <Form.Group className="mr-4">
          <Form.Label>LinkedIn</Form.Label>
          <Form.Control
            value={this.state.linkedIn}
            onChange={this.handleChange.bind(this, "linkedIn")}
            placeholder="LinkedIn URL"
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
export default ContactForm
