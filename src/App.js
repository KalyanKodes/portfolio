import React, { useEffect, useRef, useState } from 'react'
import WhoAmI from './Components/WhoAmI'
import Education from './Components/Education'
import Skills from './Components/Skills'
import SelfLearning from './Components/SelfLearning'
import SendAMessage from './Components/SendAMessage'

export default function App() {
  const [currentScreenCount, setCurrentScreenCount] = useState(1);


  useEffect(() => {
    const mouseElement = document.getElementById('mouse-coursor')
    window.addEventListener("mousemove", (e) => {
      mouseElement.style.left = e.screenX - 20 + 'px'
      if (window.screenTop && window.screenY) {
        mouseElement.style.top = `${e.screenY - 20}px`;
      }
      else {
        mouseElement.style.top = `${e.screenY - 110}px`;
      }
    })
  }, [])
  useEffect(() => {
    let prevScrollY = window.scrollY;
    const handleScroll = () => {
      let elementNumber;
      let positionProperty;
      if (prevScrollY <= window.scrollY) {
        elementNumber = currentScreenCount + 1;
        positionProperty = "top"
      }
      else {
        elementNumber = currentScreenCount - 1;
        positionProperty = "bottom"
      }
      prevScrollY = window.scrollY;
      let element = document.getElementById(`main-screen-${elementNumber}`);
      if (!element) return;
      let computedTop = Math.round((element.getBoundingClientRect()[positionProperty] / window.innerHeight) * 100);
      if ((positionProperty === "top" && computedTop <= 70) || (positionProperty === "bottom" && computedTop >= 30)) {
        element.scrollIntoView({ behavior: "auto" })
        setCurrentScreenCount(elementNumber)
      }
    }
    const argPass = () => {
      handleScroll()
    }
    window.addEventListener('scroll', argPass)
    return () => window.removeEventListener('scroll', argPass)
  }, [currentScreenCount])

  return (
    <>
      <WhoAmI />
      <Education />
      <Skills />
      <SelfLearning />
      <SendAMessage />
      <div id="mouse-coursor"></div>
    </>
  )
}
