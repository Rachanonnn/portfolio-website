"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Gear Up",
    description:
      "Gear Up is a car rental web application that allows users to create an account, rent cars from providers, and checkout while viewing their rental history. Users also have the option to register as providers, offering their cars for rent with detailed information.",
    image: "/images/projects/1.jpg",
    tag: ["All", "Web"],
    gitURL:
      "https://github.com/2110503TACEDT66/cedt-se-project-borisat_yaeng_tua",
    previewURL: "https://cedt-se-project-frontend.vercel.app/",
  },
  {
    id: 2,
    title: "Ecommerce (On-going)",
    description:
      "Our e-commerce project leverages Go Fiber for the backend and React/Next.js for the frontend. It's straightforward, enabling users to create accounts, add products to their carts, and complete purchases. Users can easily sign up using Google authentication and update their profiles as needed.",
    image: "/images/projects/2.png",
    tag: ["All", "Web"],
    gitURL: "https://github.com/Rachanonnn/go-ecommerce",
    previewURL: "",
  },
  {
    id: 3,
    title: "Udemy Web Development Bootcamp Certification",
    description:
      "The Complete Web Development Bootcamp, learn to code and become a full-stack web developer with the HIGHEST RATED courses in the history of Udemy. I have completed this course and I have learned a lot from it.",
    image:
      "https://media.discordapp.net/attachments/1240950010473091155/1240950372055384185/UC-9e61f8ba-bfdc-4ce7-a93c-7652f12b69ef.jpg?ex=666c0518&is=666ab398&hm=bbcad32600bde8b263d5053875a383b3a792bd7e8ba74cfac2ec19642eac957a&=&format=webp&width=828&height=616",
    tag: ["All", "Certificate"],
    gitURL:
      "https://www.udemy.com/certificate/UC-9e61f8ba-bfdc-4ce7-a93c-7652f12b69ef/",
    previewURL:
      "https://udemy-certificate.s3.amazonaws.com/image/UC-9e61f8ba-bfdc-4ce7-a93c-7652f12b69ef.jpg?v=1715932665000",
  },
];

const ProjectSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTabChange = (newTag: string) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8">
        My Activities
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
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
        <ProjectTag
          onClick={handleTabChange}
          name="Certificate"
          isSelected={tag === "Certificate"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
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
  );
};

export default ProjectSection;
