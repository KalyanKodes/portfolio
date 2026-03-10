import React from 'react'
import "../Styles/projects.css"
import j1 from "../Asests/journy_1.svg"


const Tool = ({ index, toolName, numberOfTools }) => {
    return (
        <>
            <span>
                <span style={{ color: 'var(--highlight-text-color)' }}>{index === 0 ? "['" : " '"}</span>
                <span className='primary-highlight-tag'>{toolName}</span>
                <span style={{ color: 'var(--highlight-text-color)' }}>'</span>
            </span ><span style={{ color: 'var(--highlight-text-color)' }}>{index + 1 === numberOfTools ? "]" : <pre>, </pre>}</span>
        </>
    )
}


const Project = ({ projectTitle, number, role, toolsUsed, description }) => {
    return (
        <div className='project-card' style={{ top: number * 60 + "px", zIndex: number }}>
            <div className='project-title-card'>
                <div className='project-title-card-colors'>
                    <div className="color-1" style={{ backgroundColor: "#F87171" }}></div>
                    <div className="color-2" style={{ backgroundColor: "#FB923C" }}></div>
                    <div className="color-3" style={{ backgroundColor: "#BBF7D0" }}></div>
                </div>
                <p className='project-title'>{projectTitle}</p>
            </div>
            <div className='intro-about-rigth-details project-card'>
                <code>
                    <div className="intro-about-right-details-1 intro-about-right-details-element">
                        <span style={{ color: 'var(--highlight-text-color)' }}>const </span> project <span style={{ color: 'var(--highlight-text-color)' }}>= {"{"}</span>
                    </div>
                    <div className="intro-about-right-details-2 intro-about-right-details-element">
                        name: <span>
                            <span style={{ color: 'var(--highlight-text-color)' }}>'</span>
                            <span className='primary-highlight-tag'>{projectTitle}</span>
                            <span style={{ color: 'var(--highlight-text-color)' }}>'</span>
                        </span> ,
                    </div>
                    <div className="intro-about-right-details-3 intro-about-right-details-element">
                        tools:
                        {
                            toolsUsed.map((item, index) => <Tool key={index} index={index} toolName={item} numberOfTools={toolsUsed.length} />)
                        },
                    </div>
                    <div className="intro-about-right-details-4 intro-about-right-details-element">
                        myRole: <span style={{ color: "var(--code-highlight-2)" }}>{role}</span>,
                    </div>
                    <div className="intro-about-right-details-7 intro-about-right-details-element">
                        <span style={{ color: "var(--code-highlight-4)" }}>description:</span> <span style={{ color: "rgb(34, 211, 238)", lineHeight: "25px" }}>{description}</span>
                    </div>
                    <div className="intro-about-right-details-14 intro-about-right-details-element">
                        <span style={{ color: 'var(--highlight-text-color)' }}>{"};"}</span>
                    </div>
                </code>
            </div>
        </div>
    )
}



export default function Projects() {
    return (
        <>
            <div className='projects-hero' id='journey'>
                <div className='projects-heading'>
                    JOURNEY
                </div>

                <div className="experience-card">
                    <div className="experience-left">
                        <img
                            src={j1}
                            alt="Bionivid Technologies"
                            className="company-logo"
                        />
                    </div>

                    <div className="experience-right">
                        <h3 className="role">Software Developer</h3>
                        <h4 className="company">Bionivid Technologies</h4>

                        <p className="duration">2025 — Present</p>
                    </div>
                </div>
            </div>
        </>
    )
}
