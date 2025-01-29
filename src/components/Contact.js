import React, { useRef, useState } from 'react'
import emailjs from '@emailjs/browser';
import "../Styles/contact.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMessage } from '@fortawesome/free-regular-svg-icons';
import { faAt, faMapPin, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedinIn, faTwitter } from '@fortawesome/free-brands-svg-icons';
export default function Contact() {
    const [mailState, setMailState] = useState("SEND MESSAGE")
    const form = useRef()
    const [params, setParams] = useState({
        name: "",
        replay_to: "",
        message: ""
    })

    const handleChange = (e) => {
        setMailState("SEND MESSAGE")
        setParams((prevData) => {
            return {
                ...prevData,
                [e.target.name]: e.target.value
            }
        })
    }

    const submitDetails = () => {

        const updatedParams = {
            ...params,
            message: `${params.message}\n\nMy Email: ${params.replay_to}`,
        };

        console.log(updatedParams);

        const sendEmail = async () => {
            try {
                setMailState("SENDING...");
                await emailjs.send(
                    "service_g156utx",
                    "template_eshhbdp",
                    updatedParams,
                    "ll_mLFPo5LSuW86x_"
                );
                setMailState("SENT");


                setParams({
                    name: "",
                    replay_to: "",
                    message: ""
                });
            } catch (error) {
                console.log(error);
                setMailState("SOMETHING WENT WRONG");
            }
        };

        sendEmail();
    };


    return (
        <div className='contact-hero' id='contact'>
            <div className="contact-left">
                <h2>CONTACT WITH ME</h2>
                <br />
                <form ref={form} onSubmit={(e) => {
                    e.preventDefault();
                    submitDetails()
                }}>
                    <p style={{ color: "rgb(211, 216, 232)", fontSize: "13px" }}>If you have any questions or concerns, please don't hesitate to contact me. I am open to any work opportunities that align with my skills and interests.</p>
                    <div>
                        <label htmlFor="name">Your name:</label>
                        <input type="text" id='name' value={params.name} name='name' required onChange={handleChange} />
                    </div>
                    <div>
                        <label htmlFor="email">Your Email:</label>
                        <input type="email" id='email' value={params.replay_to} name='replay_to' required onChange={handleChange} />
                    </div>
                    <div className='message-input-wrapper'>
                        <label htmlFor="message">Your Message:</label>
                        <textarea name="message" id="message" value={params.message} required onChange={handleChange}></textarea>
                    </div>
                    <div className='submit-button'>
                        <button>
                            {mailState}
                            <FontAwesomeIcon icon={faMessage} />
                        </button>
                    </div>
                </form>
            </div>
            <div className="contact-right">
                <div className="mail-wrapper">
                    <div className='social-icons'>
                        <FontAwesomeIcon icon={faAt} />
                    </div>
                    <p>rajkalyan.dev@gmail.com</p>
                </div>
                <div className="mobile-number-wrapper">
                    <div className='social-icons'>
                        <FontAwesomeIcon icon={faPhone} />
                    </div>
                    <p>+917893906646</p>
                </div>
                <div className="location-wrapper">
                    <div className='social-icons'>
                        <FontAwesomeIcon icon={faMapPin} />
                    </div>
                    <p>Bengaluru, Karnataka, India</p>
                </div>
                <div className="social-link-wrapper">
                    <a href="https://github.com/KalyanKodes/">
                        <div className='social-icons'>
                            <FontAwesomeIcon icon={faGithub} />
                        </div>
                    </a>
                    <a href="https://www.linkedin.com/in/bolugondu-raj-kalyan-kumar/">
                        <div className='social-icons'>
                            <FontAwesomeIcon icon={faLinkedinIn} />
                        </div>
                    </a>
                    <a href="https://x.com/rajkalyan2001">
                        <div className='social-icons'>
                            <FontAwesomeIcon icon={faTwitter} />
                        </div>
                    </a>
                </div>
            </div>
        </div>
    )
}

