import React, { useState } from "react";
import "../Styles/sendMessage.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";



export default function SendAMessage() {
  const [mailState, setMailState] = useState("Submit")
  const [params, setParams] = useState({
    name: "",
    replay_to: "",
    // subject: "",
    message: ""
  })

  const handleChange = (e) => {
    setParams((prevData) => {
      return {
        ...prevData,
        [e.target.name]: e.target.value
      }
    })
  }
  console.log(params)

  const submitDetails = () => {
    params.message = params.message + "My Email :" + params.replay_to
    const sendEmail = async () => {
      try {
        setMailState("Sending");
        await emailjs.send("service_g156utx", "template_eshhbdp", params);
        setMailState("Sent");
      } catch (error) {
        setMailState("Something went wrong");
      }
    };
    sendEmail()
  }
  return (
    <div className="contact-form-container main-screen main-screen-5" id="main-screen-5">
      <h1>
        Contact <span>Me!</span>
      </h1>
      <form onSubmit={(e) => {
        e.preventDefault();
        submitDetails()
      }}>
        <div className="links">
          <a href="https://github.com/kalyankodes" target="_blank">
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a href="https://www.linkedin.com/in/bolugondu-raj-kalyan-kumar/" target="_blank">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a href="mailto:rajkalyan.dev@gmail.com" target="_blank">
            <FontAwesomeIcon icon={faEnvelope} />
          </a>
        </div>
        <input type="text" name="name" placeholder="Full Name" value={params.name} onChange={handleChange} required />
        <input type="email" name="replay_to" placeholder="Email Address" value={params.email} onChange={handleChange} required />
        {/* <input type="text" name="subject" placeholder="Email Subject" value={params.subject} onChange={handleChange} required /> */}
        <textarea name="message" placeholder="Your Message" value={params.message} onChange={handleChange} required></textarea>
        <button type="submit">{mailState}</button>
      </form>
    </div>
  );
}
