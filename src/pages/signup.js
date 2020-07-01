import React, { useState, useEffect } from "react"
import SignUpForm from "../components/sign-form"
import Layout from "../components/layout"

let email = ""

const SignUp = ({ location }) => {
  if (location.state == null) {
    email = "your-email@email.com"
  } else {
    email = location.state.email
  }
  return (
    <Layout>
      <section style={{ paddingBottom: "6rem", paddingTop: "6rem" }}>
        <div className="container">
          <h1 className="mb-4 display-4">Sign Up Your Business</h1>
          <div className="row">
            <div className="col-md-6">
              <div>
                <SignUpForm email={email} />
              </div>
            </div>
            <div className="col-md-6">
              <div className="mt-4 ml-4">
                <img
                  alt="forms"
                  className="img-fluid mt-4"
                  src={require("../images/fill-forms.png")}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default SignUp
