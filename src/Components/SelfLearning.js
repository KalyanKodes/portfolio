import React from 'react'
import "../Styles/projects.css"
export default function SelfLearning() {
  return (
    <div className='main-screen-4 main-screen ' id='main-screen-4'>
      <h1 className='screen-title'>Projects</h1>
      <p>Below are some of the projects I created while honing my skills and crafting my journey as a frontend developer.</p>
      <div className="main-screen-4-wrapper">
        <a href="https://kalyankodes.github.io/react-spotify-clone" className='project-1 project' target='_blank'>
          <img src="./Assests/project-1.png" alt="" />
          <h1>Spotify Clone</h1>
        </a>
        <a href="https://kalyankodes.github.io/fm-ecommerce-product-landing-page/" className='project-2 project' target='_blank'>
          <img src="./Assests/project-2.png" alt="" />
          <h1>Ecommerce Product Landing Page</h1>
        </a>
        <a href="https://kalyankodes.github.io/Food-Order/" className='project-3 project'>
          <img src="./Assests/project-3.png" alt="" />
          <h1>Food Order</h1>
        </a>

        <a href="https://kalyankodes.github.io/React.js-Todo/" className='project-4 project'>
          <img src="./Assests/project-4.png" alt="" />
          <h1>ToDo</h1>
        </a>
        <a href="https://kalyankodes.github.io/multistep-form/" className='project-5 project'>
          <img src="./Assests/project-5.png" alt="" />
          <h1>Multi Step Form</h1>
        </a>
      </div>
    </div>
  )
}
