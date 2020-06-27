import React, { Component } from "react"
import * as emailjs from "emailjs-com"
import { Form } from "react-bootstrap"

class SignUpForm extends Component {
  state = {
    email: this.props.email,
    userName: "",
    businessName: "",
    location: "",
    existingWebsite: "",
  }
  handleSubmit(e) {
    e.preventDefault()
    const {
      email,
      userName,
      businessName,
      location,
      existingWebsite,
    } = this.state
    let templateParams = {
      from_name: email,
      to_name: "InjusTech",
      subject: "Get my business online!",
      message_html: "Name: "
        .concat(userName)
        .concat(" Business: ")
        .concat(businessName)
        .concat(" Location: ")
        .concat(location)
        .concat(" existingWebsite: ")
        .concat(existingWebsite),
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
      userName: "",
      businessName: "",
      location: "",
      existingWebsite: "",
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
            placeholder={this.state.email}
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>
        <Form.Group className="mr-4" controlId="formBasicEmail">
          <Form.Label>Full Name</Form.Label>
          <Form.Control
            value={this.state.github}
            onChange={this.handleChange.bind(this, "github")}
            placeholder="John Doe"
          />
        </Form.Group>
        <Form.Group className="mr-4">
          <Form.Label>Business Name</Form.Label>
          <Form.Control
            value={this.state.linkedIn}
            onChange={this.handleChange.bind(this, "linkedIn")}
            placeholder="Google"
          />
        </Form.Group>
        <Form.Group className="mr-4" controlId="formBasicEmail">
          <Form.Label>Where does your business operate?</Form.Label>
          <Form.Control
            value={this.state.github}
            onChange={this.handleChange.bind(this, "github")}
            placeholder="Boston, MA"
          />
        </Form.Group>
        <Form.Group className="mr-4" controlId="formBasicEmail">
          <Form.Label>
            Do you have an existing website? If so, provide the URL
          </Form.Label>
          <Form.Control
            value={this.state.github}
            onChange={this.handleChange.bind(this, "github")}
            placeholder="www.injustech.org"
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
export default SignUpForm
