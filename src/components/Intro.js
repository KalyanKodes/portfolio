import React from 'react'
import "../Styles/intro.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faUser } from '@fortawesome/free-regular-svg-icons'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import myImage from '../Asests/passport.jpg'

const Header = () => {
    const anchorStyles = {
        textDecoration: "none",
        color: "var(--primary-text-color)"
    }
    return (
        <header className='intro-header'>
            <h1 >KALYAN</h1>
            <ul className='intro-header-ul'>
                <li><a style={anchorStyles} href="#about">ABOUT</a></li>
                <li><a style={anchorStyles} href="#skills">SKILLS</a></li>
                <li><a style={anchorStyles} href="#projects">PROJECTS</a></li>
                <li><a style={anchorStyles} href="#education">EDUCATION</a></li>
                <li><a style={anchorStyles} href="#contact">CONTACT</a></li>
            </ul>
        </header>
    )
}


const About = () => {
    return (
        <div className='intro-about'>
            <div className='intro-about-left'>

                <div className='intro-about-left-1'>
                    <h1>Hello,</h1>
                    <h1>This is <span style={{ color: "var(--highlight-text-color)" }}>Kalyan Kumar</span>,</h1>
                    <h1>I'm a <span style={{ color: "var(--secondary-text-color)" }}>Frontend Web Developer</span>.</h1>
                </div>

                <div className='intro-about-left-2'>
                    <a href="https://github.com/kalyankodes/"><FontAwesomeIcon icon={faGithub} /></a>
                    <a href="https://www.linkedin.com/in/bolugondu-raj-kalyan-kumar/"><FontAwesomeIcon icon={faLinkedin} /></a>
                    <a href="https://x.com/rajkalyan2001"><FontAwesomeIcon icon={faTwitter} /></a>

                </div>


                <div className='intro-about-left-3'>
                    <a href="#contact" className='contact-button' style={{ textDecoration: "none" }}>
                        <button>
                            CONTACT ME
                            <FontAwesomeIcon icon={faUser} />
                        </button>
                    </a>
                    <a href="#" className='get-resume-button' style={{ textDecoration: "none" }}>
                        <button>
                            GET RESUME
                            <FontAwesomeIcon icon={faArrowRight} />
                        </button>
                    </a>
                </div>


            </div>


            <div className='intro-about-right'>
                <div className='intro-about-right-colors'>
                    <div className="color-1" style={{ backgroundColor: "#F87171" }}></div>
                    <div className="color-2" style={{ backgroundColor: "#FB923C" }}></div>
                    <div className="color-3" style={{ backgroundColor: "#BBF7D0" }}></div>
                </div>
                <div className='intro-about-rigth-details'>
                    <code>
                        <div className="intro-about-right-details-1 intro-about-right-details-element">
                            <span style={{ color: 'var(--highlight-text-color)' }}>const </span> coder <span style={{ color: 'var(--highlight-text-color)' }}>= {"{"}</span>
                        </div>
                        <div className="intro-about-right-details-2 intro-about-right-details-element">
                            name: <span>
                                <span style={{ color: 'var(--highlight-text-color)' }}>'</span>
                                <span className='primary-highlight-tag'>Kalyan</span>
                                <span style={{ color: 'var(--highlight-text-color)' }}>'</span>
                            </span> ,
                        </div>
                        <div className="intro-about-right-details-3 intro-about-right-details-element">
                            skills:
                            <span>
                                <span style={{ color: 'var(--highlight-text-color)' }}>{"['"}</span>
                                <span className='primary-highlight-tag'>HTML</span>
                                <span style={{ color: 'var(--highlight-text-color)' }}>'</span>
                            </span><pre>, </pre>
                            <span>
                                <span style={{ color: 'var(--highlight-text-color)' }}> '</span>
                                <span className='primary-highlight-tag'>CSS</span>
                                <span style={{ color: 'var(--highlight-text-color)' }}>'</span>
                            </span><pre>, </pre>
                            <span>
                                <span style={{ color: 'var(--highlight-text-color)' }}> '</span>
                                <span className='primary-highlight-tag'>Bootstrap</span>
                                <span style={{ color: 'var(--highlight-text-color)' }}>'</span>
                            </span><pre>, </pre>
                            <span>
                                <span style={{ color: 'var(--highlight-text-color)' }}> '</span>
                                <span className='primary-highlight-tag'>JavaScript</span>
                                <span style={{ color: 'var(--highlight-text-color)' }}>'</span>
                            </span><pre>, </pre>
                            <span>
                                <span style={{ color: 'var(--highlight-text-color)' }}> '</span>
                                <span className='primary-highlight-tag'>React.js</span>
                                <span style={{ color: 'var(--highlight-text-color)' }}>'</span>
                            </span><pre>, </pre>
                            <span>
                                <span style={{ color: 'var(--highlight-text-color)' }}> '</span>
                                <span className='primary-highlight-tag'>Redux-Toolkit</span>
                                <span style={{ color: 'var(--highlight-text-color)' }}>'</span>
                            </span><pre>, </pre>
                            <span>
                                <span style={{ color: 'var(--highlight-text-color)' }}> '</span>
                                <span className='primary-highlight-tag'>Git</span>
                                <span style={{ color: 'var(--highlight-text-color)' }}>'</span>
                            </span><pre>, </pre>
                            <span>
                                <span style={{ color: 'var(--highlight-text-color)' }}> '</span>
                                <span className='primary-highlight-tag'>Object Oriented Programming</span>
                                <span style={{ color: 'var(--highlight-text-color)' }}>{"']"}</span>
                            </span>,
                        </div>
                        <div className="intro-about-right-details-4 intro-about-right-details-element">
                            hardWorker: <span style={{ color: "var(--code-highlight-2)" }}>true</span>,
                        </div>
                        <div className="intro-about-right-details-5 intro-about-right-details-element">
                            quickLearner: <span style={{ color: "var(--code-highlight-2)" }}>true</span>,
                        </div>
                        <div className="intro-about-right-details-6 intro-about-right-details-element">
                            problemSolver: <span style={{ color: "var(--code-highlight-2)" }}>true</span>,
                        </div>
                        <div className="intro-about-right-details-7 intro-about-right-details-element">
                            <span style={{ color: "var(--code-highlight-4)" }}>hireable:</span> <span style={{ color: "var(--code-highlight-2)" }}>function() {"{"}</span>
                        </div>
                        <div className="intro-about-right-details-8 intro-about-right-details-element">
                            <span style={{ color: "var(--code-highlight-2)" }}>return</span> <span style={{ color: 'var(--highlight-text-color)' }}>(</span>
                        </div>
                        <div className="intro-about-right-details-9 intro-about-right-details-element">
                            <span style={{ color: 'var(--code-highlight-3)' }}>this.</span>hardWorker <span style={{ color: 'var(--code-highlight-1)' }}>&&</span>
                        </div>
                        <div className="intro-about-right-details-10 intro-about-right-details-element">
                            <span style={{ color: 'var(--code-highlight-3)' }}>this.</span>problemSolver <span style={{ color: 'var(--code-highlight-1)' }}>&&</span>
                        </div>
                        <div className="intro-about-right-details-11 intro-about-right-details-element">
                            <span style={{ color: 'var(--code-highlight-3)' }}>this.</span>skills.length <span style={{ color: 'var(--code-highlight-1)' }}>{">="} 5</span>
                        </div>
                        <div className="intro-about-right-details-12 intro-about-right-details-element">
                            <span style={{ color: 'var(--highlight-text-color)' }}>);</span>
                        </div>
                        <div className="intro-about-right-details-13 intro-about-right-details-element">
                            <span style={{ color: 'var(--highlight-text-color)' }}>{"};"}</span>
                        </div>
                        <div className="intro-about-right-details-14 intro-about-right-details-element">
                            <span style={{ color: 'var(--highlight-text-color)' }}>{"};"}</span>
                        </div>
                    </code>
                </div>
            </div>
        </div >
    )
}

const WhoAmI = () => {
    return (
        <div className='intro-whoAmI'>
            <div className='intro-whoAmI-left'>
                <h2>WHO I AM?</h2>
                <p>I am a final-year Computer Science student at Gitam University with a profound love for front-end web development. Throughout my academic journey, I have passionately explored this field, undertaking various self-directed projects that showcase my creativity and dedication. Currently, I am delving deeper into React.js, driven by my enthusiasm to craft dynamic and engaging user experiences. Additionally, I have earned certifications that validate my skills and further fuel my passion for web development. My unwavering commitment to learning and innovation underscores my aspiration to excel in this ever-evolving domain.</p>
            </div>
            <div className='intro-whoAmI-right'>
                <div className='intro-whoAmI-right-image-wrapper'>
                    <img src={myImage} alt="profile-image" />
                </div>
            </div>
        </div>
    )
}

export default function Intro() {
    return (
        <>
            <div className="intro-hero" id='about'>
                {/* Header */}
                <Header />
                {/* About */}
                <About />
                {/* Who am i */}
                <WhoAmI />
            </div>
        </>
    )
}



