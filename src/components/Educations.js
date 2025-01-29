import React from 'react'
import "../Styles/education.css";
import Lottie from 'lottie-react';
import Animation from "../Asests/Education_animation.json";
import icon from '../Asests/education-user-icon.svg'


const EducationCard = ({ startYear, endYear, degreeName, instituteName }) => {
    return (
        <div className='education-card'>
            <div className='education-card-title'>
                {startYear} - {endYear}
            </div>
            <div className="education-card-details">
                <div className="education-icon-wrapper">
                    <img src={icon} alt="education-icon" />
                </div>
                <div className='education-card-degree-details'>
                    <div className='education-card-degree-name'>
                        <h4>{degreeName}</h4>
                    </div>
                    <div className='education-card-degree-location'>
                        <p>{instituteName}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}



export default function Educations() {
    return (
        <div className='education-hero' id='education'>
            <div className="education-title-card">
                <p>EDUCATION</p>
            </div>
            <div className='education-bottom-card'>
                <div className="animation-wrapper">
                    <Lottie animationData={Animation} />
                </div>
                <div className="education-cards-wrapper">
                    <EducationCard startYear={2022} endYear={2025} instituteName={"Gitam University, Bengaluru"} degreeName={"BACHELOR DEGREE"} />
                    <EducationCard startYear={2017} endYear={2022} instituteName={"Chirala Engineering College"} degreeName={"DIPLOMA"} />
                    <EducationCard startYear={2007} endYear={2017} instituteName={"Vasavi Vidyanikethen"} degreeName={"SECONDARY SCHOOLING"} />
                </div>
            </div>
        </div>
    )
}
