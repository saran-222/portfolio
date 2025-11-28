"use client"
import React from 'react'
import ProjectCard from './ProjectCard'
import { useRef } from "react"
import { motion, useInView } from "framer-motion"

const projects_data = [
    {
        id: 1,
        title: "My Portfolio",
        description: "Next.js | Tailwind CSS | Framer-motion",
        image: "images/projects/portfolio.png",
        git: "https://github.com/saran-222",
        web: "/"
    },
    {
        id: 2,
        title: "Chat Application",
        description: "MERN | Socket.io | Tailwind CSS ",
        image: "images/projects/chat.png",
        git: "https://github.com/saran-222",
        web: "/"
    },
    {
        id: 3,
        title: "Video call Application",
        description: "Next.js | Socket-io | Stream-io | Tailwind CSS | Typescript",
        image: "images/projects/room.png",
        git: "https://github.com/saran-222",

    },
    {
        id: 4,
        title: "AI Medicalbot",
        description: "Python | LangChain | Pinecone DB | Gemini | Gen AI | RAG",
        image: "images/projects/medicalbot.png",
        git: "https://github.com/saran-222",
        web: "/"
    },
    {
        id: 5,
        title: "AI Trip Planner",
        description: "Next.js | Gen AI | Gemini | MongoDB ",
        image: "images/projects/trip.png",
        git: "https://github.com/saran-222",
        web: "/"
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
            {/* <div ref={ref} className='grid md:grid-cols-3 gap-8 lg:gap-20 md:mx-5 lg:mx-10 '>
                {projects_data.map((project) =>
                    <motion.li key={project.id} variants={cardVariants} initial="initial" animate={isInView ? "animate" : "initial"} transition={{ duration: 2, delay: project.id * 0.4 }}  >
                        <ProjectCard key={project.id} title={project.title} description={project.description} url={project.image} git={project.git} web={project.web} />
                    </motion.li>
                )}
            </div> */}
            <div ref={ref} className='grid md:grid-cols-3 gap-8 lg:gap-20 md:mx-5 lg:mx-10'>
                {projects_data.map((project) =>
                    <motion.div
                        key={project.id}
                        variants={cardVariants}
                        initial="initial"
                        animate={isInView ? "animate" : "initial"}
                        transition={{ duration: 1.2, delay: project.id * 0.2 }}
                    >
                        <ProjectCard
                            title={project.title}
                            description={project.description}
                            url={project.image}
                            git={project.git}
                            web={project.web}
                        />
                    </motion.div>
                )}
            </div>

        </section>
    )

   
}

export default Projects
