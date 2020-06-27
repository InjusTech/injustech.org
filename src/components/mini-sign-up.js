import React, { Component } from "react"
import { Link } from "gatsby"

class MiniSignUp extends Component {
  state = {
    email: "",
  }
  handleSubmit(e) {
    e.preventDefault()
    const { email } = this.state
    this.resetForm()
  }
  resetForm() {
    this.setState({
      email: "",
    })
  }
  handleChange = (param, e) => {
    this.setState({ [param]: e.target.value })
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit.bind(this)} class="d-sm-flex mb-2 mt-4">
        <input
          type="email"
          value={this.state.email}
          class="form-control form-control-lg mr-sm-2 mb-2 mb-sm-0"
          onChange={this.handleChange.bind(this, "email")}
          placeholder="your-email@email.com"
        />
        <Link to={`/signup`} state={{ email: this.state.email }}>
          <button
            class="btn-lg btn primary text-nowrap"
            style={{ color: "#ffffff" }}
            type="submit"
          >
            Sign Up
          </button>
        </Link>
      </form>
    )
  }
}

export default MiniSignUp
