'use client'
import React, { useTransition, useState } from 'react'
import Image from "next/image"
import TabButton from './TabButton'
import { motion } from "framer-motion"

const TAB_DATA = [
    {
        title : "Skills",
        id: "skills",
        content: (
            <ul className='list-disc pl-2'>
                <li>Node.js</li>
                <li>Express</li>
                <li>React</li>
                <li>Go-Fiber</li>
                <li>Javascript</li>
            </ul>
        )
    },
    {
        title : "Education",
        id: "education",
        content: (
            <ul className='list-disc pl-2'>
                <li>Computer Engineering and Digital Technology at Chulalongkorn University</li>
                <li>Math-Sci (Gifted Program), Suankularb Wittayalai Thonburi School</li>
            </ul>
        )
    },
    {
        title : "Certifications",
        id: "certifications",
        content: (
            <ul className='list-disc pl-2'>
                <li>Udemy Web Development Bootcamp</li>
            </ul>
        )
    }
]

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id : any) => {
    startTransition(() => {
        setTab(id);
    });
  };
  const currentTab = TAB_DATA.find((t) => t.id === tab);
  return (
    <section className='text-white'>
      <div 
      className='md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16'>
        <motion.div
        initial={{ opacity: 0, y: 50}} 
        animate={{opacity: 1, y: 0}}
        transition={{ duration: 0.4}} 
        >
            <Image 
            src={"/images/about-image.jpg"} 
            alt='about-image' 
            className='rounded-2xl'
            width={500} 
            height={500} />
        </motion.div>
        <motion.div 
        initial={{ opacity: 0, y: 50}} 
        animate={{opacity: 1, y: 0}}
        transition={{ duration: 0.4}} 
        className='mt-4 md:mt-0 text-left flex flex-col h-full'>
            <h2 className='text-3xl font-bold text-white mb-4'>About Me</h2>
            <p className='text-base lg:text-lg'>
                Hello! My name is Rachanon, and I am an computer engineering student
                with a passion for technology and problem-solving. As someone deeply
                interested in the intersection of cybersecurity, web development, and data
                engineering, I am eager to contribute my skills and knowledge to innovative
                projects. I pride myself on being a quick learner, always ready to explore new
                concepts and adapt to dynamic environments. My passion for technology
                drives me to stay up-to-date with industry trends and continuously improve
                my abilities.
            </p>
            <div className='flex flex-row justify-start mt-8'>
                <TabButton selectTab={() => handleTabChange("skills")} active={tab === "skills"}>
                    {" "}
                    Skills{" "}
                </TabButton>
                <TabButton selectTab={() => handleTabChange("education")} active={tab === "education"}>
                    {" "}
                    Education{" "}
                </TabButton>
                <TabButton selectTab={() => handleTabChange("certifications")} active={tab === "certifications"}>
                    {" "}
                    Certifications{" "}
                </TabButton>
            </div>
            <div className='mt-8'>{currentTab ? currentTab.content : "Content not available"}</div>
        </motion.div>
      </div>
    </section>
  )
}

export default AboutSection
