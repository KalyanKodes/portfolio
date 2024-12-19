import React from 'react'
import "../Styles/whoAmI.css"
export default function WhoAmI() {
  return (
    <div className='main-screen-1 main-screen ' id='main-screen-1'>
      <div className="main-screen-1-profile-details-wrapper ">
        <h1 className='main-screen-1-profile-h1-greet'>Hai.</h1>
        <h1 className='main-screen-1-profile-h1-name-intro animate__backInDown'>My name is <span className='main-screen-1-h1-name-1'>Raj Kalyan Kumar</span> from INDIA.</h1>
        <h1 className='main-screen-1-profile-h1-name-intro'>You can call me <span className='main-screen-1-h1-name-2'>Kalyan</span>.</h1>


        <p className='main-screen-1-profile-quote '>
          I love to craft Frontend web applications—where bugs are just unplanned features!
        </p>
      </div>
      <div className="main-screen-1-profile-3d-image">
        <picture>
          <source media='(min-width:1200px)' srcSet='./Assests/desktop.png' />
          <img src="./Assests/mobile.png" alt="" />
        </picture>
      </div>

    </div>
  )
}
