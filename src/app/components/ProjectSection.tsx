'use client'
import React, { useState, useRef } from 'react'
import ProjectCard from './ProjectCard'
import ProjectTag from './ProjectTag'
import { motion, useInView } from "framer-motion"

const projectsData = [
    {
        id: 1,
        title: "Gear Up",
        description: "Gear Up is a car rental web application that allows users to create an account, rent cars from providers, and checkout while viewing their rental history. Users also have the option to register as providers, offering their cars for rent with detailed information.",
        image: "/images/projects/1.jpg",
        tag: ["All", "Web"],
        gitURL: "https://github.com/2110503TACEDT66/cedt-se-project-borisat_yaeng_tua",
        previewURL: "https://cedt-se-project-frontend.vercel.app/",
    },
    {
        id: 1,
        title: "Gear Up",
        description: "Gear Up is a car rental web application that allows users to create an account, rent cars from providers, and checkout while viewing their rental history. Users also have the option to register as providers, offering their cars for rent with detailed information.",
        image: "/images/projects/1.jpg",
        tag: ["All"],
        gitURL: "https://github.com/2110503TACEDT66/cedt-se-project-borisat_yaeng_tua",
        previewURL: "https://cedt-se-project-frontend.vercel.app/",
    }
    ]

const ProjectSection = () => {

  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTabChange = (newTag : any) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) => 
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate : { y: 0, opacity: 1 },
  };

  return (
    <section id='projects'>
      <h2 className='text-center text-4xl font-bold text-white mt-4 mb-8'>My Projects</h2>
      <div className='text-white flex flex-row justify-center items-center gap-2 py-6'>
        <ProjectTag 
            onClick={handleTabChange} 
            name="All" 
            isSelected={tag === "All"} 
        />
        <ProjectTag 
            onClick={handleTabChange} 
            name="Web" 
            isSelected={tag === "Web"} 
        />
      </div>
      <ul ref={ref} className='grid md:grid-cols-3 gap-8 md:gap-12'>
        {filteredProjects.map((project, index) => (
            <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: 0.2 * index }}
            >
            <ProjectCard
                key={project.id}
                title={project.title}
                description={project.description}
                imgURL={project.image}
                gitURL={project.gitURL}
                previewURL={project.previewURL}
            />
            </motion.li>
        ))}
        </ul>
    </section>
  )
}

export default ProjectSection
