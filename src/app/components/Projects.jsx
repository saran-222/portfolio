"use client"
import React from 'react'
import ProjectCard from './ProjectCard'
import { useRef } from "react"
import { motion, useInView } from "framer-motion"

const projects_data = [
    {
        id: 1,
        title: "My Portfolio",
        description: "Description",
        image: "images/projects/project1.png",
        git: "/",
        web: "/"
    },
    {
        id: 2,
        title: "My Portfolio",
        description: "Description",
        image: "images/projects/project1.png",
        git: "/",
        web: "/"
    },
    {
        id: 3,
        title: "My Portfolio",
        description: "Description",
        image: "images/projects/project1.png",
        git: "/",
        web: "/"
    },
    
]

const Projects = () => {

    const ref = useRef(null)
    const isInView = useInView(ref, { once: false })

    const cardVariants = {
        initial : {y:50 ,opacity:0},
        animate : {y:0,opacity:1}
    }

    return (
        <section id='projects' >
            <h2 className='text-center text-2xl font-bold text-white mt-4 mb-8 md:mb-12'>My Projects</h2>
            <div ref={ref} className='grid md:grid-cols-3 gap-10 md:gap-14 md:mx-20 '>
                {projects_data.map((project,index) => 
                    <motion.li key={index} variants={cardVariants} initial="initial" animate={isInView ? "animate" : "initial"} transition={{duration: 1,delay:index * 0.4}}>
                        <ProjectCard key={project.id} title={project.title} description={project.description} url={project.image} git={project.git} web={project.web} />
                    </motion.li>
                )}
            </div>
        </section>

    )
}

export default Projects
