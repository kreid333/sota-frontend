import { Alert } from "react-bootstrap"
import React, { useState } from "react"
import Layout from "../components/Layout"
import Reviews from "../components/Reviews/Reviews"
import "./styles/contact.css"

const Contact = () => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [phoneNumber, setPhoneNumber] = useState("")
  const [message, setMessage] = useState("")
  const [show, setShow] = useState(false)

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   if (name !== "" && email !== "" && phoneNumber !== "" && message !== "") {
  //     setShow(true)
  //     setTimeout(() => {
  //       setShow(false)
  //     }, 3000)
  //   } else {
  //     alert("You are missing information! Please try again.")
  //   }
  // }

  return (
    <Layout title="Contact">
      <div className="wrapper">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <h1 className="m-4 text-center">Contact</h1>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-12">
              <div className="card">
                <div className="card-body">
                  <form
                    className="contact-form"
                    name="contact"
                    method="POST"
                    netlify-honeypot="bot-field"
                    data-netlify="true"
                    // onSubmit={handleSubmit}
                  >
                    <input type="hidden" name="form-name" value="contact" />
                    <div class="hidden">
                      <label htmlFor="bot-field">
                        Don’t fill this out if you’re human:
                      </label>
                      <input name="bot-field" />
                    </div>
                    <div className="form-group">
                      <label htmlFor="name">Name</label>
                      <input
                        type="text"
                        className="form-control"
                        id="name"
                        name="name"
                        value={name}
                        onChange={e => {
                          setName(e.target.value)
                        }}
                        placeholder="Name"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="email-address">Email</label>
                      <input
                        type="email"
                        className="form-control"
                        id="email-address"
                        name="emailAddress"
                        value={email}
                        onChange={e => {
                          setEmail(e.target.value)
                        }}
                        placeholder="Email"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="phone-number">Phone Number</label>
                      <input
                        type="tel"
                        className="form-control"
                        id="phone-number"
                        name="phoneNumber"
                        value={phoneNumber}
                        onChange={e => {
                          setPhoneNumber(e.target.value)
                        }}
                        placeholder="Phone Number"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="textarea-1">Message</label>
                      <textarea
                        className="form-control"
                        id="message"
                        name="message"
                        value={message}
                        onChange={e => {
                          setMessage(e.target.value)
                        }}
                        rows="10"
                        placeholder="Message"
                      ></textarea>
                    </div>
                    <button type="submit" className="global-btn submitBtn">
                      Submit
                    </button>
                  </form>
                  <Alert
                    className="text-center mt-3"
                    variant="success"
                    show={show}
                  >
                    <span>Email sent.</span>
                  </Alert>
                </div>
              </div>
            </div>
          </div>
          <Reviews />
          <br />
        </div>
      </div>
    </Layout>
  )
}

export default Contact
