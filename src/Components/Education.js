import React, { useEffect, useState } from 'react'
import "../Styles/education.css"



export default function Education() {
  const [currentImage, setCurrentImage] = useState(0)

  const changeImage = (imageNumber) => {
    setCurrentImage(imageNumber)
  }


  return (
    <div className='main-screen-2 main-screen ' id='main-screen-2' >
      <h1 className='main-screen-2-title'>Education</h1>
      <div className="education-details-wrapper">
        <div className='education-detils-left-wrapper'>
          <div className="education" onMouseOver={() => changeImage(0)}>
            Schooling <br />2017
          </div>
          <div className="education" onMouseOver={() => changeImage(1)}>
            Diploma In Mechanical Engineering <br />2022
          </div>
          <div className="education" onMouseOver={() => changeImage(2)}>
            B.Tech in CS <br /> Expected:2025
          </div>

        </div>
        <div className="education-details-right-wrapper  animate__animated" id='education-image'>
          {currentImage === 0 && <img src="./Assests/school.png" alt="" className='animate__animated animate__fadeIn ' />}
          {currentImage == 1 && <img src="./Assests/diploma.png" alt="" className='animate__animated animate__fadeIn ' />}
          {currentImage === 2 && <img src="./Assests/btech.png" alt="" className='animate__animated animate__fadeIn ' />}

        </div>
      </div>
    </div>
  )
}
