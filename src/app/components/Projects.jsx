"use client"
import React from 'react'
import ProjectCard from './ProjectCard'
import { useRef } from "react"
import { motion, useInView } from "framer-motion"

const projects_data = [
    {
        id: 1,
        title: "My Portfolio",
        description: "A personal portfolio website built with Next.js",
        image: "images/projects/project1.png",
        git: "/",
        web: "/"
    },
    {
        id: 2,
        title: "Project Tracker",
        description: "project management application built using the MERN stack",
        image: "images/projects/project1.png",
       
    },
]

const Projects = () => {

    const ref = useRef(null)
    const isInView = useInView(ref, { triggerOnce: false, threshold: 0.1 })
    const cardVariants = {
        initial: { opacity: 0, scale: 0.5 },
        animate: { opacity: 1, scale: 1 }
    }

    return (
        <section id='projects' className='md:mt-20' >
            <h2 className='text-center text-2xl font-bold text-white mt-4 mb-8 md:mb-12 '>My Projects</h2>
            <div ref={ref} className='grid md:grid-cols-3 gap-8 lg:gap-20 md:mx-5 lg:mx-10 '>
                {projects_data.map((project) =>
                    <motion.li key={project.id} variants={cardVariants} initial="initial" animate={isInView ? "animate" : "initial"} transition={{ duration: 2, delay: project.id * 0.4 }}  >
                        <ProjectCard key={project.id} title={project.title} description={project.description} url={project.image} git={project.git} web={project.web} />
                    </motion.li>
                )}
            </div>
        </section>
    )
}

export default Projects
