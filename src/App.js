import React, { useEffect, useState } from 'react'
import "./App.css"
import Intro from './components/Intro'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Educations from './components/Educations'
import Contact from './components/Contact';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';

export default function App() {
    const [show, setShow] = useState(false)
    useEffect(() => {
        window.addEventListener("scroll", (e) => {
            if (window.scrollY >= 400) {
                setShow(true)
            }
            else {
                setShow(false)
            }
        })
    }, [])
    return (
        <>

            <Intro />
            <Skills />
            <Projects />
            <Educations />
            <Contact />
            {show && <a href="#about">
                <div className='go-to-top'>

                    <FontAwesomeIcon icon={faArrowUp} />
                </div>
            </a>}
        </>
    )
}
