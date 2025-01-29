import React from 'react'
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import "../Styles/skills.css"
import git from '../Asests/git.svg'
import html from '../Asests/html.svg'
import js from '../Asests/javascript.svg'
import react from '../Asests/react.svg';
import css from '../Asests/css3.svg';
import bs from '../Asests/bootstrap.svg';
import ts from '../Asests/tailwindcss.svg';


const handleDragStart = (e) => e.preventDefault();
const responsive = {
    0: { items: 3 },
    500: { items: 5 },
    900: { items: 7, },
};

const items = [
    <div className='skillCard' >
        <img src={git} onDragStart={handleDragStart} role="presentation" className='carousel-image' />
        <p>Git</p>
    </div >,
    <div className='skillCard'>
        <img src={js} onDragStart={handleDragStart} role="presentation" className='carousel-image' />
        <p>JavaScript</p>
    </div>,
    <div className='skillCard'>
        <img src={css} onDragStart={handleDragStart} role="presentation" className='carousel-image' />
        <p>CSS</p>
    </div>,
    <div className='skillCard'>
        <img src={bs} onDragStart={handleDragStart} role="presentation" className='carousel-image' />
        <p>BootStrap</p>
    </div>,
    <div className='skillCard'>
        <img src={react} onDragStart={handleDragStart} role="presentation" className='carousel-image' />
        <p>React</p>
    </div>,
    <div className='skillCard'>
        <img src={html} onDragStart={handleDragStart} role="presentation" className='carousel-image' />
        <p>HTML</p>
    </div>,
    <div className='skillCard'>
        <img src={ts} onDragStart={handleDragStart} role="presentation" className='carousel-image' />
        <p>TailWind</p>
    </div>,
];
export default function Skills() {
    return (
        <div className='skills-hero' id='skills'>
            <div className='skills-heading'>
                SKILLS
            </div>

            <div className='carousel'>

                <AliceCarousel
                    disableDotsControls
                    disableButtonsControls
                    autoPlay
                    infinite
                    mouseTracking
                    autoPlayStrategy="none"  // Makes it scroll continuously
                    animationDuration={1000} // Adjust speed (lower = faster)
                    items={items}
                    responsive={responsive}
                // autoWidth
                />

            </div>
        </div>
    )
}
