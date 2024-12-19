import React, { useEffect } from 'react'
import "../Styles/skills.css"

export default function Skills() {
  const handleHover = (e) => {
    e.target.classList.add("animate__hinge");
    setTimeout(() => {
      e.target.classList.remove("animate__hinge");

    }, 2000)
  }
  return (
    <div className='main-screen-3 main-screen ' id='main-screen-3'>
      <h1>Skills</h1>
      <div className="main-screen-3-skills-wrapper">
        <div className="skill-1 skill" onMouseOver={handleHover}>HTML</div>
        <div className="skill-2 skill" onMouseOver={handleHover}>CSS</div>
        <div className="skill-3 skill" onMouseOver={handleHover}>JavaScript</div>
        <div className="skill-4 skill" onMouseOver={handleHover}>Object Oriented Programming</div>
        <div className="skill-5 skill" onMouseOver={handleHover}>Data Structures And Algorithms</div>
        <div className="skill-6 skill" onMouseOver={handleHover}>React.js</div>
        <div className="skill-7 skill" onMouseOver={handleHover}>Git</div>
      </div>
    </div>
  )
}
