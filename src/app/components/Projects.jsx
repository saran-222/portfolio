import React from 'react'
import ProjectCard from './ProjectCard'

const projects_data = [
    {
        id: 1,
        title: "My Portfolio",
        description: "Description",
        image: "images/projects/project1.png",
        git:"/",
        web:"/"
    },
    {
        id: 2,
        title: "My Portfolio",
        description: "Description",
        image: "images/projects/project1.png",
        git:"/",
        web:"/" 
    },
    {
        id: 3,
        title: "My Portfolio",
        description: "Description",
        image: "images/projects/project1.png",
        git:"/",
        web:"/"
    },
    {
        id: 4,
        title: "My Portfolio",
        description: "Description",
        image: "images/projects/project1.png",
        git:"/",
        web:"/"
    },
    {
        id:5,
        title: "My Portfolio",
        description: "Description",
        image: "images/projects/project1.png",
        git:"/",
        web:"/"
    },
    {
        id: 6,
        title: "My Portfolio",
        description: "Description",
        image: "images/projects/project1.png",
        git:"/",
        web:"/"
    },
]

const Projects = () => {
    return (
        <>
            <h2 className='text-center text-2xl font-bold text-white mt-4 mb-8 md:mb-12'>My Projects</h2>
            <div className='grid md:grid-cols-3 gap-10 md:gap-14 md:mx-20 '>
                {projects_data.map((project) => <ProjectCard key={project.id} title={project.title} description={project.description} url={project.image} git={project.git} web={project.web} />)}
            </div>
        </>

    )
}

export default Projects
