import React from 'react'
import "../Styles/projects.css"



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
            <div className='projects-hero' id='projects'>
                <div className='projects-heading'>
                    PROJECTS
                </div>

                <Project
                    projectTitle={"Local Business MarketPlace"}
                    number={1}
                    toolsUsed={["BootStrap", "React.js", "Redux-ToolKit", "Visual Studio Code", "Figma", "Express.js", "Node.js", "Lottie", "MongoDB", "PostMan"]}
                    role={"Frontend Developer and support backend in need"}
                    description={"Developed a web application aimed at supporting small businesses by connecting them with local customers. Conducted requirement gathering to understand the challenges faced by small businesses. Developed a user-friendly and responsive interface using React.js for seamless navigation. Utilized stage-management to handle user interactions and ensure a smooth user experience."}
                />
                <Project
                    projectTitle={"Faculty Recritment website"}
                    number={2}
                    toolsUsed={["HTML", "CSS", "JavaScript", "Java", "SPA", "PostMan"]}
                    role={"Frontend Developer"}
                    description={"A simple web application that connects faculties seeking job opportunities with colleges looking to hire. Faculties can create profiles showcasing their expertise, while colleges can browse and reach out to suitable candidates. Built using HTML, CSS, JavaScript for the frontend and Java & SPA (Single Page Application) for the backend, ensuring seamless navigation and interaction. This platform simplifies the hiring process by providing an efficient way for institutions to discover qualified educators."}
                />
                <Project
                    projectTitle={"Spotify Clone"}
                    number={3}
                    toolsUsed={["CSS", "React.js", "Context-API", "Spotify-web-API", "Mobile-simulator-chrome-extention"]}
                    role={"Frontend Developer"}
                    description={"Developed a fully functional music streaming application that allows users to search for songs, playlists, albums, and artists. Integrated Spotify web API to fetch real-time music data. Enhanced skills in React.js including modular design and state management for complex workflows."}
                />
                <Project
                    projectTitle={"Ecommerce Landing Page"}
                    number={4} toolsUsed={["React.js", "CSS", "Redux-ToolKit", "Python", "MySQL", "BootStrap"]}
                    description={"A simple e-commerce web application built with React.js for the frontend, using Redux for state management. It allows users to browse products and add them to the cart. The backend is developed with Python and MySQL to store and manage product and cart data. This project demonstrates efficient state handling with Redux while integrating a database for persistent storage."}
                />
            </div>
        </>
    )
}
