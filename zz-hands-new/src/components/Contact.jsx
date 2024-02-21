import React from "react";
import PhoneIcon from "../images/svg/phone.svg";
import EmailIcon from "../images/svg/email.svg";

function Contact() {
  return (
    <div id="contact" className="mt-5 px-3">
      <div id="get-quote" className="row justify-content-center bg-brown-light">
        <div id="get-quote-text" className="col-md-6 col-sm-8 col-12">
          <h4>Hire us to work on your new projects</h4>
          <h2 className="m-0">Get a quote from ZZ Hands now</h2>
        </div>
        <div id="get-quote-button" className="col-sm-4 col-12 text-center align-self-center">
          <a className="btn btn-lg rounded-0 bg-brown-dark" href="#contact-form" role="button">Contact with us</a>
        </div>
      </div>
      <div id="contact-us" className="row justify-content-center">
        <div id="get-in-touch" className="col-md-6 mb-md-0 mb-4 pe-md-5 px-0">
          <h4>Contact us</h4>
          <h1>Get in touch with <span> </span> <span className="underline">ZZ Hands</span></h1>
          <p>Whether you have just started planning your next project, or you know exactly what you want, we would love to hear from you. Get in touch with ZZ Hands or leave us a message. We will quickly assess your project and give you a quote</p>
          <div>
            <div id="contact-telephone" className="row">
              <div className="col-2">
                <img src={PhoneIcon} alt="phone" />
              </div>
              <div id="text" className="col-xl-10 col-8 ps-xl-3">
                <p>Have any questions?</p>
                <a className="text-decoration-none text-reset fw-bold" href="tel:+4407564113037">(+44) 07 564 11 30 37</a>
              </div>
            </div>
            <div id="contact-email" className="row">
              <div className="col-2">
                <img src={EmailIcon} alt="email" />
              </div>
              <div id="text" className="col-xl-10 col-8 ps-xl-3">
                <p>Send us a message</p>
                <a className="text-decoration-none text-reset fw-bold" href="mailto:info@zzhands.co.uk">info@zzhands.co.uk</a>
              </div>
            </div>
          </div>
        </div>
        <form id="contact-form" className="d-md-block col-md-4 p-5 bg-brown-dark">
          <h4 className="text-center">Contact us</h4>
          <h2 className="mb-5 text-center">Write anytime</h2>
          <div className="my-3">
            <input type="text" className="form-control rounded-0" id="name" placeholder="Your name" required />
          </div>
          <div className="my-3">
            <input type="email" className="form-control rounded-0" id="name" placeholder="Email address" required />
          </div>
          <div className="my-3">
            <input type="text" className="form-control rounded-0" id="name" placeholder="Phone number" required />
          </div>
          <div className="my-3">
            <textarea className="w-100" placeholder="Write a message" id="contact-form-text" rows="6"></textarea>
          </div>
          <div className="my-3">
            <button className="btn rounded-0 bg-white" type="submit">Submit form</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Contact