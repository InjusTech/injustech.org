import React, {useState, useEffect} from "react"
import SignUpForm from "../components/sign-form"
import Layout from "../components/layout"

const SignUp = ({ location }) => {

  const [email, setEmail] = useState("");

  useEffect(() => {
    setEmail(window.history.state.email);
  });

  return (
    <Layout>
      <section className="landing-section">
        <div className="container">
          <h1 className="mb-4">Sign Up Your Business</h1>
          <div className="row">
            <div className="col-md-6">
              <div>
                <SignUpForm email={email}/>
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
  );
};

export default SignUp
