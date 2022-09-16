import React from "react";
import emailjs from "@emailjs/browser";
import "./Contact.css";
import { MdEmail } from "react-icons/md";
import { FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";
import { useState } from "react";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  var templateParams = {
    name: name,
    email: email,
    subject: subject,
    message: message,
  };

  const sendEmail = (e) => {
    e.preventDefault();
    
    emailjs.send('service_rn02dwu', 'template_0axsrhn', templateParams,'O8hyd5yOHHItAfktQ')
            .then((response) => {
                console.log('SUCCESS!', response.status, response.text);
                alert('Message sent successfully');
                setMessage('');
                setName('');
                setEmail('');
                setSubject('');
                e.target.reset();
            },(error) => {
                console.log('FAILED...', error);
                alert('Some technical error');
            });
  };

  return (
    <div className="contact-container" id="Contact">
      <div className="contact-header">
        <h3>Contact Me</h3>
        <p>Let's Keep In Touch</p>
        <span className="header-underline">
          <span className="header-underline1"></span>
        </span>
      </div>

      <div className="contactDetails">
        <div className="contactForm">
          <div className="topCtn">
            <div className="callBtn btnTp">
              <FaPhoneAlt />
              <p>PHONE</p>
              <span>Contact me </span>
              <p className="contactNo">
                <a href="tel:6200539474" target="_blank">
                  6200539474
                </a>
              </p>
            </div>
            <div className="emailBtn btnTp">
              <MdEmail />
              <p>EMAIL</p>
              <span>Contact me on email address</span>
              <p className="contactNo">
                <a href="mailto: kumar.prashant477@gmail.com" target="_blank">
                  kumar.prashant477@gmail.com
                </a>
              </p>
            </div>
            <div className="addrBtn btnTp">
              <FaMapMarkerAlt />
              <p>LOCATION</p>
              <span>Dist-Bhagalpur, Bihar 812002 </span>
              <p className="contactNo">
                <a href="https://www.google.com/maps/place/Bhagalpur+Jn./@25.2413266,86.9708701,17z/data=!3m1!4b1!4m5!3m4!1s0x39f04a0557a997bf:0xe2a547943ee900cc!8m2!3d25.2413266!4d86.9730588" target="_blank">
                  View on Google Map
                </a>
              </p>
            </div>
          </div>
          {/* <form onSubmit={sendEmail}>
            <div className="formInput">
              <div className="leftForm">
                <div className="rows">
                  <input
                    type="text"
                    name="name"
                    pattern="[A-Za-z]{3,}"
                    // minLength="3"
                    id="name"
                    value={name}
                    onInput={(e) => setName(e.target.value)}
                    placeholder="Full Name: "
                    required={true}
                  />
                </div>
                <div className="rows">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    pattern="[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                    value={email}
                    onInput={(e) => setEmail(e.target.value)}
                    placeholder="Your Email:"
                    required={true}
                  />
                </div>
                <div className="rows">
                  <input
                    type="text"
                    name="subject"
                    id="subject"
                    value={subject}
                    onInput={(e) => setSubject(e.target.value)}
                    placeholder="Your Subject:"
                    required={true}
                  />
                </div>
              </div>
              <div className="rightForm">
                <div className="rows">
                  <textarea
                    name="message"
                    id="inputMessage"
                    cols="0"
                    rows="9"
                    value={message}
                    onInput={(e) => setMessage(e.target.value)}
                    placeholder="Your Message:"
                    required={true}
                  ></textarea>
                </div>
              </div>
            </div>
            <div className="formSubmit">
              <div className="sendButton" colSpan="2">
                <button type="submit" value="Submit">Send Message</button>
              </div>
            </div>
          </form> */}
        </div>
      </div>
    </div>
  );
}
